import { createSlice } from "@reduxjs/toolkit";
import type { Dispatch } from "@reduxjs/toolkit";
import type { NewStoreProps } from "../../StoreList/types";
import { Store } from "../../../../models";
import { DataStore } from "aws-amplify";
import { useAppDispatch } from "../../../../app/hooks";

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
  imgs: [],
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
      state.imgs = [];
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
  reset,
  createNewStorePending,
  createNewStoreSuccess,
  createNewStoreFailed,
  clearError,
} = newStoreSlice.actions;

export const createNewStoreAsync =
  (newStore: NewStoreProps) => async (dispatch: Dispatch) => {
    try {
      dispatch(createNewStorePending());
      const {
        name,
        description,
        categories,
        openTimes,
        contacts,
        location,
        imgs,
      } = newStore;
      const store = new Store({
        name,
        description,
        categories,
        opentimes: openTimes,
        contact: contacts,
        location,
        imgs,
      });

      await DataStore.save(store);
      dispatch(createNewStoreSuccess());
      dispatch(reset());
    } catch (error) {
      dispatch(createNewStoreFailed(error));
    }
  };

export default newStoreSlice.reducer;
