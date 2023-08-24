import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { initialStateProps } from "../../types/store";
import {
  fetchStoreFilter,
  fetchStores,
  updateStoreAsync,
  deleteStoreAsync,
  confirmStoreAsync,
  unconfirmStoreAsync,
  updateLogoAsync,
  uploadImageAsync,
  deleteImageAsync,
  createStoreAsync,
} from "../../services/storeLib";

const initialState: initialStateProps = {
  isLoading: false,
  isError: false,
  error: null,
  data: null,
};

const stores = createSlice({
  name: "adminStores",
  initialState,
  reducers: {
    updateData: (state, action): void => {
      state.data = [action.payload];
    },
    clearError: (state) => {
      state.isError = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStores.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(fetchStores.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(fetchStores.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(createStoreAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data = (state.data || []).concat(action.payload);
    });
    builder.addCase(createStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(fetchStoreFilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchStoreFilter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(confirmStoreAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data = (state.data || []).map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    });
    builder.addCase(confirmStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(deleteStoreAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data = (state.data || []).filter(
        (store) => store.id !== action.payload
      );
    });
    builder.addCase(deleteStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(updateStoreAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data = (state.data || []).map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    });
    builder.addCase(updateStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(unconfirmStoreAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data = (state.data || []).map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    });
    builder.addCase(unconfirmStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(updateLogoAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data = (state.data || []).map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    });
    builder.addCase(updateLogoAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(uploadImageAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data = (state.data || []).map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    });
    builder.addCase(uploadImageAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(deleteImageAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data = (state.data || []).map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    });
    builder.addCase(deleteImageAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export const { updateData, clearError } = stores.actions;
export default stores.reducer;
