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

const initialState: NewStoreProps = {
  isCreating: false,
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
      state.contacts = action.payload;
    },

    addLocation: (state, action: PayloadAction<LazyLocation>) => {
      state.location = action.payload;
    },

    addOpenTime: (state, action: PayloadAction<LazyOpentime>) => {
      state.openTimes.push(action.payload);
    },
    removeOpenTime: (state, action: PayloadAction<LazyOpentime>) => {
      state.openTimes.filter((openTime) => openTime.id !== action.payload.id);
    },

    setCategories: (state, action: PayloadAction<LazyCategory[]>) => {
      state.categories = action.payload;
    },

    createNewStorePending: (state) => {
      state.isCreating = true;
      state.error = null;
      state.isError = false;
    },
    createNewStoreSuccess: (state) => {
      state.isCreating = false;
      state.error = null;
      state.isError = false;
    },
    createNewStoreFailed: (state, action) => {
      state.isCreating = false;
      state.error = action.payload;
      state.isError = true;
    },
    clearError: (state) => {
      state.error = null;
      state.isError = false;
    },
  },
});

export const {
  setName,
  setDescription,
  addContact,
  addOpenTime,
  removeOpenTime,
  setCategories,
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
