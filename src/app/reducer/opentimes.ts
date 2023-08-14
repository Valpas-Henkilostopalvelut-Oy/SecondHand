import { createSlice } from "@reduxjs/toolkit";
import type { initialStateProps } from "../../types/opentimes";
import {
  createOpenTimeAsync,
  fetchOpenTimesAsync,
  deleteOpenTimeAsync,
} from "../../services/openTimeLib";

const initialState: initialStateProps = {
  isLoading: false,
  isError: false,
  error: null,
  opentimes: null,
};

const opentimes = createSlice({
  name: "opentimes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOpenTimeAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.opentimes = (state.opentimes || []).concat(action.payload);
    });
    builder.addCase(createOpenTimeAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(fetchOpenTimesAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.opentimes = action.payload;
    });
    builder.addCase(fetchOpenTimesAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(deleteOpenTimeAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.opentimes = (state.opentimes || []).filter(
        (opentime) => opentime.id !== action.payload.id
      );
    });
    builder.addCase(deleteOpenTimeAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export default opentimes.reducer;
