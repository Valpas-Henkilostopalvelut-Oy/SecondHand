import { createSlice } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import type { LazyStore } from "../../../../models";
import { Store } from "../../../../models";
import { DataStore } from "aws-amplify";

interface initialStateProps {
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  data: LazyStore[] | null;
}

const initialState: initialStateProps = {
  isLoading: false,
  isError: false,
  error: null,
  data: null,
};

export const adminStoresSlice = createSlice({
  name: "adminStores",
  initialState,
  reducers: {
    fetchStores: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    },
    fetchStoresSuccess: (state, action: PayloadAction<LazyStore[]>) => {
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

export const { fetchStores, fetchStoresSuccess, fetchStoresFailure } =
  adminStoresSlice.actions;

export const fetchStoresAsync = () => async (dispatch: Dispatch) => {
  dispatch(fetchStores());
  try {
    const stores = await DataStore.query(Store);
    dispatch(fetchStoresSuccess(stores));
  } catch (error: any) {
    dispatch(fetchStoresFailure(error.message));
  }
};

export default adminStoresSlice.reducer;
