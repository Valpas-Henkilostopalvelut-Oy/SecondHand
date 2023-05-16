import { createSlice } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import type { LazyStore } from "../../../../models";
import { Store } from "../../../../models";
import { DataStore } from "aws-amplify";

interface initialStateProps {
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  data: LazyStore[] | null | undefined;
}

const initialState: initialStateProps = {
  isLoading: false,
  isError: false,
  error: null,
  data: null,
};

export const adminStores = createSlice({
  name: "adminStores",
  initialState,
  reducers: {
    updateStore: (state, action) => {
      state.data = state.data?.map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    },
    updateError: (state, action: PayloadAction<string | null>) => {
      state.isError = true;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.isError = false;
      state.error = null;
    },
    deleteStore: (state, action) => {
      state.data = state.data?.filter((store) => store.id !== action.payload);
    },
    fetchStores: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    },
    fetchStoresSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchStoresFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const {
  updateStore,
  fetchStores,
  fetchStoresSuccess,
  fetchStoresFailure,
  updateError,
  clearError,
  deleteStore,
} = adminStores.actions;

export const deleteStoreAsync = (id: string) => async (dispatch: Dispatch) => {
  try {
    const store = await DataStore.query(Store, id);
    if (!store) throw new Error("Store not found");
    await DataStore.delete(store);
    dispatch(deleteStore(id));
  } catch (error: any) {
    dispatch(updateError(error.message));
  }
};

export const updateStoreAsync =
  (store: LazyStore) => async (dispatch: Dispatch) => {
    try {
      const originalStore = await DataStore.query(Store, store.id);
      if (!originalStore) throw new Error("Store not found");
      const updatedStore = await DataStore.save(
        Store.copyOf(originalStore, (updated) => {
          updated.name = store.name;
          updated.description = store.description;
          updated.categories = store.categories;
          updated.opentimes = store.opentimes;
          updated.contact = store.contact;
          updated.location = store.location;
          updated.imgs = store.imgs;
          updated.isConfirmed = store.isConfirmed;
        })
      ).then((res) => ({
        id: res.id,
        name: res.name,
        description: res.description,
        categories: res.categories,
        openTimes: res.opentimes,
        contacts: res.contact,
        location: res.location,
        images: res.imgs,
        isConfirmed: res.isConfirmed,
      }));

      dispatch(updateStore(updatedStore));
    } catch (error: any) {
      dispatch(updateError(error.message));
    }
  };

export const fetchStoresAsync = () => async (dispatch: Dispatch) => {
  dispatch(fetchStores());
  try {
    const stores = await DataStore.query(Store);
    const seriablizedStores = stores.map((store) => ({
      id: store.id,
      name: store.name,
      description: store.description,
      categories: store.categories,
      openTimes: store.opentimes,
      contacts: store.contact,
      location: store.location,
      images: store.imgs,
      isConfirmed: store.isConfirmed,
    }));
    dispatch(fetchStoresSuccess(seriablizedStores));
  } catch (error: any) {
    dispatch(fetchStoresFailure(error.message));
  }
};

export default adminStores.reducer;
