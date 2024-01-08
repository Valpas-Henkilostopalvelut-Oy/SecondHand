import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { BusinessShort, Businesses } from "../../types/businesses";
import { businesses, businessesShort } from "../../testdata/businesses";
import searchBusinesses from "../../utils/searchBusinesses";
import { SearchQuery } from "../../types/search";

// Define a type for the slice state
export interface BusinessState {
  businessesShort: BusinessShort[] | null | undefined;
  businesses: Businesses[] | null | undefined;
  previouseBusinesses: Businesses | null | undefined;
  isLoading: boolean;
  error?: string;
}

// Define the initial state using that type
export const initialState: BusinessState = {
  businesses: null,
  businessesShort: null,
  isLoading: false,
  previouseBusinesses: null,
};

export const fetchBusinesses = createAsyncThunk(
  "businesses/fetchBusinesses",
  async () => businesses
);

export const fetchBusinessesShort = createAsyncThunk(
  "businesses/fetchBusinessesShort",
  async (query: SearchQuery) => {
    const result = searchBusinesses(query, businessesShort);
    console.log("fetchBusinessesShort", result);
    return result;
  }
);

export const openBusiness = createAsyncThunk(
  "businesses/openBusiness",
  async (id: string) => {
    return businesses.find((business) => business.id === id);
  }
);

export const businessSlice = createSlice({
  name: "businesses",
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinesses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBusinesses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businesses = action.payload;
      })
      .addCase(fetchBusinesses.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(fetchBusinessesShort.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBusinessesShort.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businessesShort = action.payload;
      })
      .addCase(fetchBusinessesShort.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(openBusiness.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(openBusiness.fulfilled, (state, action) => {
        state.isLoading = false;
        state.previouseBusinesses = action.payload!;
      })
      .addCase(openBusiness.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reset } = businessSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBusinesses = (state: RootState) => state.business.businesses;

export default businessSlice.reducer;
