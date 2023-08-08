import { createSlice } from "@reduxjs/toolkit";
import type { initialStateProps } from "../../types/opentimes";
import {
  createOpenTimeAsync,
  fetchOpenTimesAsync,
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
      state.opentimes?.push(action.payload);
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
  },
});

export default opentimes.reducer;
