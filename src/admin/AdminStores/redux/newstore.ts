import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Dispatch } from "@reduxjs/toolkit";
import type { NewStoreProps, ImageTypes } from "../types";
import type {
  LazyCategory,
  LazyOpentime,
  LazyContact,
  LazyLocation,
  LazySocial,
} from "../../../models";
import { Store } from "../../../models";
import { DataStore, Storage } from "aws-amplify";
import { updateData } from "../../../app/reducer/stores";

const initialState: NewStoreProps = {
  isCreating: false,
  type: null,
  error: null,
  isError: false,
  isConfirm: false,
  name: "",
  description: null,
  categories: [],
  openTimes: [],
  contacts: {
    email: null,
    phone: null,
    website: null,
  },
  location: {
    city: null,
    country: null,
    admin_name: null,
    driveto: null,
    address: null,
    zip: null,
    iframe: null,
  },
  social: {
    facebook: null,
    instagram: null,
    twitter: null,
    youtube: null,
  },
  files: [],
};

const onUploadImage = async (props: ImageTypes) => {
  const { id, imgUrl, filename } = props;
  const response = await fetch(imgUrl as string);
  const blob = await response.blob();
  const { key } = await Storage.put(`${id}-${filename}`, blob, {
    contentType: "image/png",
    progressCallback(progress) {
      console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
    },
  });
  return {
    id: id,
    key,
  };
};

export const createNewStoreAsync = createAsyncThunk(
  "newStore/createNewStoreAsync",
  async (
    {
      newStore,
      isAdmin,
      username,
    }: {
      newStore: NewStoreProps;
      isAdmin: boolean;
      username: string;
    },
    { dispatch }: { dispatch: Dispatch }
  ) => {
    const { files } = newStore;
    const onUploadImages = await Promise.all(
      files.map((file) => onUploadImage(file))
    );

    const {
      name,
      description,
      categories,
      openTimes,
      contacts,
      location,
      social,
      type,
    } = newStore;
    const store = new Store({
      usernameID: username,
      isConfirmed: isAdmin,
      name,
      description,
      categories,
      opentimes: openTimes,
      contact: contacts,
      location,
      imgs: onUploadImages,
      social,
      type,
    });

    const storeToAdd = {
      username: store.usernameID,
      id: store.id,
      name: store.name,
      description: store.description,
      categories: store.categories,
      opentimes: store.opentimes,
      contact: store.contact,
      location: store.location,
      imgs: store.imgs,
      isConfirmed: store.isConfirmed,
      social: store.social,
      type: store.type,
    };

    await DataStore.save(store);
    dispatch(updateData(storeToAdd));
  }
);

export const newStoreSlice = createSlice({
  name: "newStore",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setSocial: (state, action: PayloadAction<LazySocial>) => {
      state.social = action.payload;
    },

    addFile: (state, action: PayloadAction<ImageTypes>) => {
      state.files.push(action.payload);
    },
    removeFile: (state, action: PayloadAction<ImageTypes>) => {
      state.files.filter((file) => file.id !== action.payload.id);
    },

    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },

    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },

    addContact: (state, action: PayloadAction<LazyContact>) => {
      state.contacts = action.payload;
    },

    addLocation: (state, action: PayloadAction<LazyLocation>) => {
      state.location = action.payload;
    },

    addOpenTime: (state, action: PayloadAction<LazyOpentime>) => {
      state.openTimes.push(action.payload);
    },
    removeOpenTime: (state, action: PayloadAction<LazyOpentime>) => {
      state.openTimes = state.openTimes.filter(
        (openTime) => openTime.id !== action.payload.id
      );
    },

    setCategories: (state, action: PayloadAction<LazyCategory[]>) => {
      state.categories = action.payload;
    },

    clearCreateError: (state) => {
      state.error = null;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewStoreAsync.pending, (state) => {
      state.isCreating = true;
    });
    builder.addCase(createNewStoreAsync.fulfilled, (state) => {
      state.type = null;
      state.isCreating = false;
      state.isConfirm = true;
      state.error = null;
      state.isError = false;
      state.name = "";
      state.description = null;
      state.categories = [];
      state.openTimes = [];
      state.contacts = {
        email: null,
        phone: null,
        website: null,
      };
      state.location = {
        city: null,
        country: null,
        admin_name: null,
        driveto: null,
        address: null,
        zip: null,
        iframe: null,
      };
      state.social = {
        facebook: null,
        instagram: null,
        twitter: null,
        youtube: null,
      };
      state.files = [];
    });
    builder.addCase(createNewStoreAsync.rejected, (state, action) => {
      state.isCreating = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export const {
  setName,
  setDescription,
  addContact,
  addOpenTime,
  removeOpenTime,
  setCategories,
  addLocation,
  addFile,
  removeFile,
  clearCreateError,
  setSocial,
  setType,
} = newStoreSlice.actions;

export default newStoreSlice.reducer;
