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
import type { LazyStore } from "../../models";

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
    updateData: (state, action: PayloadAction<LazyStore>): void => {
      state.data = [action.payload];
    },
    clearError: (state) => {
      state.isError = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createStoreAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(createStoreAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data = [action.payload];
    });
    builder.addCase(createStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

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

    builder.addCase(fetchStoreFilter.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
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

    builder.addCase(confirmStoreAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(confirmStoreAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data?.filter((store) => store.id !== action.payload.id);
    });
    builder.addCase(confirmStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(deleteStoreAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(deleteStoreAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data?.filter((store) => store.id !== action.payload);
    });
    builder.addCase(deleteStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(updateStoreAsync.pending, (state) => {
      state.isError = false;
      state.error = null;
    });
    builder.addCase(updateStoreAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data?.map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    });
    builder.addCase(updateStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(unconfirmStoreAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(unconfirmStoreAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data?.filter((store) => store.id !== action.payload.id);
    });
    builder.addCase(unconfirmStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(updateLogoAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(updateLogoAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data?.map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    });
    builder.addCase(updateLogoAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    /*builder.addCase(uploadImageAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });*/
    builder.addCase(uploadImageAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data?.map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    });
    builder.addCase(uploadImageAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    /*builder.addCase(deleteImageAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });*/
    builder.addCase(deleteImageAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data?.map((store) =>
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
