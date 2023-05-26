import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import type { LazyStore } from "../../models";
import { Store } from "../../models";
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

export const fetchStoreAsync = createAsyncThunk(
  "adminStores/fetchStores",
  async () => {
    const stores = await DataStore.query(Store);
    const seriablizedStores = stores.map((store) => ({
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
    }));
    return seriablizedStores;
  }
);

export const confirmStoreAsync = createAsyncThunk(
  "adminStores/confirmStore",
  async (id: string) => {
    const store = await DataStore.query(Store, id);
    if (!store) throw new Error("Store not found");
    const updatedStore = await DataStore.save(
      Store.copyOf(store, (updated) => {
        updated.isConfirmed = true;
      })
    );
    return updatedStore;
  }
);

export const adminStores = createSlice({
  name: "adminStores",
  initialState,
  reducers: {
    updateData: (state, action) => {
      if (!state.data) state.data = [];
      state.data.push(action.payload);
    },
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStoreAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(
      fetchStoreAsync.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.data = action.payload;
      }
    );
    builder.addCase(
      fetchStoreAsync.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload.message;
      }
    );
  },
});

export const { updateStore, updateData, updateError, clearError, deleteStore } =
  adminStores.actions;

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
          updated.social = store.social;
          updated.type = store.type;
        })
      ).then((res) => ({
        id: res.id,
        name: res.name,
        description: res.description,
        categories: res.categories,
        opentimes: res.opentimes,
        contact: res.contact,
        location: res.location,
        imgs: res.imgs,
        isConfirmed: res.isConfirmed,
        social: res.social,
        type: res.type,
      }));

      dispatch(updateStore(updatedStore));
    } catch (error: any) {
      dispatch(updateError(error.message));
    }
  };

export default adminStores.reducer;
