import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  BusinessState,
  BusinessShort,
  Business
} from "../../types/businesses";
import searchBusinesses from "../../utils/searchBusinesses";
import { SearchQuery } from "../../types/search";
import { DataStore } from "aws-amplify/datastore";
import { Businesses } from "../../models";

// Define a type for the slice state

// Define the initial state using that type
export const initialState: BusinessState = {
  businesses: null,
  businessesShort: null,
  isLoading: false,
  previouseBusinesses: null,
};

export const fetchBusinesses = createAsyncThunk(
  "businesses/fetchBusinesses",
  async () => {
    const result = await DataStore.query(Businesses);
    return result;
  }
);

export const fetchBusinessesShort = createAsyncThunk(
  "businesses/fetchBusinessesShort",
  async (query: SearchQuery) => {
    const resultShort: BusinessShort[] = (await DataStore.query(Businesses)).map(
      (business) => ({
        id: business.id,
        name: business.name,
        openNow: business.openHours?.openNow,
        description: business.description,
        typeId: business.typesID,
        image: business.logo || "", // Add a default value for the image property
        locationId: business.locationsID,
      })
    );
    const result = searchBusinesses(query, resultShort);
    console.log("fetchBusinessesShort", result);
    return result;
  }
);

export const openBusiness = createAsyncThunk(
  "businesses/openBusiness",
  async (id: string) => {
    const result = await DataStore.query(Businesses, id);
    return result;
  }
);

export const createBusiness = createAsyncThunk(
  "businesses/createBusiness",
  async (business: Business) => {
    const result = await DataStore.save(new Businesses(business));
    console.log("createBusiness", result  )
    return result;
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
        state.previouseBusinesses = action.payload ?? null;
      })
      .addCase(openBusiness.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(createBusiness.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBusiness.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businesses = [...(state.businesses ?? []), action.payload];
      })
      .addCase(createBusiness.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reset } = businessSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBusinesses = (state: RootState) => state.business.businesses;

export default businessSlice.reducer;
