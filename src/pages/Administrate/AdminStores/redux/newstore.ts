import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Dispatch } from "@reduxjs/toolkit";
import type { NewStoreProps, ImageTypes } from "../types";
import type {
  LazyCategory,
  LazyOpentime,
  LazyContact,
  LazyLocation,
} from "../../../../models";
import { Store } from "../../../../models";
import { DataStore, Storage } from "aws-amplify";
import { useAppSelector } from "../../../../app/hooks";

const initialState: NewStoreProps = {
  isCreating: false,
  error: null,
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
  files: [],
};

export const newStoreSlice = createSlice({
  name: "newStore",
  initialState,
  reducers: {
    reset: (state) => {
      state.isCreating = false;
      state.error = null;
      state.isConfirm = false;
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
      state.files = [];
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
      state.contacts = {
        email: action.payload.email,
        phone: action.payload.phone,
        website: action.payload.website,
      };
    },

    addLocation: (state, action: PayloadAction<LazyLocation>) => {
      state.location = {
        city: action.payload.city,
        country: action.payload.country,
        admin_name: action.payload.admin_name,
        driveto: action.payload.driveto,
        address: action.payload.address,
      };
    },

    addOpenTime: (state, action: PayloadAction<LazyOpentime>) => {
      state.openTimes.push(action.payload);
    },
    removeOpenTime: (state, action: PayloadAction<LazyOpentime>) => {
      state.openTimes.filter((openTime) => openTime.id !== action.payload.id);
    },

    addCategory: (state, action: PayloadAction<LazyCategory>) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.categories.filter((category) => category.id !== action.payload);
    },

    createNewStorePending: (state) => {
      state.isCreating = true;
      state.error = null;
    },
    createNewStoreSuccess: (state) => {
      state.isCreating = false;
      state.error = null;
    },
    createNewStoreFailed: (state, action) => {
      state.isCreating = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setName,
  setDescription,
  addContact,
  addOpenTime,
  removeOpenTime,
  addCategory,
  removeCategory,
  reset,
  addLocation,
  addFile,
  removeFile,
  createNewStorePending,
  createNewStoreSuccess,
  createNewStoreFailed,
  clearError,
} = newStoreSlice.actions;

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

export const createNewStoreAsync =
  (newStore: NewStoreProps, isAdmin: boolean) => async (dispatch: Dispatch) => {
    try {
      const { files } = newStore;
      const onUploadImages = await Promise.all(
        files.map((file) => onUploadImage(file))
      );

      const { name, description, categories, openTimes, contacts, location } =
        newStore;
      const store = new Store({
        isConfirmed: isAdmin,
        name,
        description,
        categories,
        opentimes: openTimes,
        contact: contacts,
        location,
        imgs: onUploadImages,
      });

      await DataStore.save(store);
      dispatch(createNewStoreSuccess());
      dispatch(reset());
    } catch (error) {
      dispatch(createNewStoreFailed(error));
    }
  };

export default newStoreSlice.reducer;
