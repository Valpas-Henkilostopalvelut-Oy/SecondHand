import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { Ads } from "../../models";
import { DataStore, Storage } from "aws-amplify";
import type { LazyAds } from "../../models";
import type { Ad, AdsState } from "../../types/ad";

const initialState: AdsState = {
  ads: [],
  isLoading: false,
  isError: false,
  error: null,
};

const getFixedAd = (ad: LazyAds) => ({
  id: ad.id,
  firm: ad.firm,
  site: ad.site,
  backgroundColor: ad.backgroundColor,
  left: ad.left,
  right: ad.right,
});

const addImageToStorage = async (image: File) => {
  const fileType = image.name.split(".")[1];
  //random id example: e52dawds
  const id = Math.random().toString(36).substring(7);
  const key = `${id}.${fileType}`;
  const stored = await Storage.put(key, image, {
    contentType: image.type,
  });
  return stored.key;
};

const removeImageFromStorage = async (key: string) => {
  const deleted = await Storage.remove(key);
  return deleted;
};

export const removeAd = createAsyncThunk(
  "ads/removeAd",
  async ({ id, isAdmin }: { id: string; isAdmin: boolean }) => {
    const toBeDeleted = await DataStore.query(Ads, id);
    if (!isAdmin) throw new Error("You are not authorized to delete this ad");
    if (!toBeDeleted) throw new Error("Ad not found");
    if (toBeDeleted.left?.image) {
      await removeImageFromStorage(toBeDeleted.left.image);
    }
    if (toBeDeleted.right?.image) {
      await removeImageFromStorage(toBeDeleted.right.image);
    }
    const deleted = await DataStore.delete(toBeDeleted);
    return deleted;
  }
);

export const addAd = createAsyncThunk(
  "ads/addAd",
  async ({
    ad,
    leftImage,
    rightImage,
  }: {
    ad: Ad;
    leftImage?: File | null;
    rightImage?: File | null;
  }) => {
    const { left, right, ...newAd } = ad;
    const leftImageKey = leftImage ? await addImageToStorage(leftImage) : null;
    const rightImageKey = rightImage
      ? await addImageToStorage(rightImage)
      : null;
    const newRight = right ? { ...right, image: rightImageKey } : null;

    const newAddedAd = await DataStore.save(
      new Ads({
        ...newAd,
        left: {
          image: leftImageKey,
          ...left,
        },
        right: newRight,
      })
    );
    return getFixedAd(newAddedAd);
  }
);

export const fetchAds = createAsyncThunk("ads/fetchAds", async () => {
  const ads = await DataStore.query(Ads).then((ads) =>
    ads.map((ad) => getFixedAd(ad))
  );
  return ads;
});

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    clearError: (state) => {
      state.isError = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAds.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAds.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.ads = [...action.payload];
    });
    builder.addCase(fetchAds.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(addAd.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addAd.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.ads = [...state.ads, action.payload];
    });
    builder.addCase(addAd.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(removeAd.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeAd.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.ads = state.ads.filter((ad) => ad.id !== action.payload.id);
    });
    builder.addCase(removeAd.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export const { clearError } = adsSlice.actions;
export default adsSlice.reducer;
