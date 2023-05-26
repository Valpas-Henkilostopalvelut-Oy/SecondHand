import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { LazyStore } from "../../models";
import { Store } from "../../models";
import { DataStore } from "aws-amplify";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StoreProps {
  id: string;
  name: string;
  description: string;
  categories: string[];
  opentimes: string;
  contact: string;
  location: string;
  imgs: string[];
  isConfirmed: boolean;
}

interface filterProps {
  categoryName: string;
}

interface initialStateProps {
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
  data: LazyStore[] | null | undefined;
}

const initialState: initialStateProps = {
  isLoading: false,
  isError: false,
  error: null,
  data: null,
};

export const fetchStores = createAsyncThunk(
  "adminStores/fetchStores",
  async () => {
    const stores = await DataStore.query(Store);
    const filteredStores = stores
      .map((store) => ({
        id: store.id,
        name: store.name,
        description: store.description,
        categories: store.categories,
        opentimes: store.opentimes,
        contact: store.contact,
        location: store.location,
        imgs: store.imgs,
        isConfirmed: store.isConfirmed,
      }))
      .filter((store) => store.isConfirmed);
    return filteredStores;
  }
);

export const fetchStoreFilter = createAsyncThunk(
  "adminStores/fetchStoreFilter",
  async (filter: filterProps) => {
    const { categoryName } = filter;
    const stores = await DataStore.query(Store);
    const filteredStores = stores
      .map((store) => ({
        id: store.id,
        name: store.name,
        description: store.description,

        categories: store.categories,
        opentimes: store.opentimes,

        contact: store.contact,
        location: store.location,
        imgs: store.imgs,
        isConfirmed: store.isConfirmed,
      }))
      .filter(
        (store) =>
          store.isConfirmed &&
          store.categories?.map((c) => c?.name).includes(categoryName)
      );

    return filteredStores;
  }
);

const stores = createSlice({
  name: "adminStores",
  initialState,
  reducers: {
    updateData: (state, action) => {
      if (!state.data) state.data = [];
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStores.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(
      fetchStores.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchStores.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
    builder.addCase(fetchStoreFilter.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(
      fetchStoreFilter.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchStoreFilter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export const { updateData } = stores.actions;
export default stores.reducer;
