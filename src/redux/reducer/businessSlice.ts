import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { BusinessShort, Businesses } from "../../types/businesses";
import { businesses, businessesShort } from "../../testdata/businesses";

// Define a type for the slice state
export interface BusinessState {
  businessesShort: BusinessShort[] | null | undefined;
  businesses: Businesses[] | null | undefined;
  isLoaded: boolean;
}

// Define the initial state using that type
export const initialState: BusinessState = {
  businesses: null,
  businessesShort: null,
  isLoaded: false,
};

export const fetchBusinesses = createAsyncThunk(
  "businesses/fetchBusinesses",
  async () => {
    return businesses;
  }
);

export const fetchBusinessesShort = createAsyncThunk(
  "businesses/fetchBusinessesShort",
  async () => {
    return businessesShort;
  }
);

export const businessSlice = createSlice({
  name: "businesses",
  initialState,
  reducers: {},
});

export const {} = businessSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBusinesses = (state: RootState) => state.businesses;

export default businessSlice.reducer;
