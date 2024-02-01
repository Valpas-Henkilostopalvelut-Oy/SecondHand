import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { BusinessState, BusinessShort, Business } from "../../types/businesses";
import searchBusinesses from "../../utils/searchBusinesses";
import { SearchQuery } from "../../types/search";
import {
  DataStore,
  PaginationInput,
  SortDirection,
} from "aws-amplify/datastore";
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
    // Sort first newest to oldest
    const result = await DataStore.query(Businesses, null, {
      // Pagination
      limit: 10,
      sort: (c) => c.createdAt(SortDirection.ASCENDING),
    });
    return result;
  }
);

export const fetchBusinessesShort = createAsyncThunk(
  "businesses/fetchBusinessesShort",
  async (query: SearchQuery) => {
    const resultShort: BusinessShort[] = (
      await DataStore.query(Businesses, null, {
        // Pagination
        sort: (c) => c.createdAt(SortDirection.DESCENDING),
      })
    ).map((business) => ({
      id: business.id,
      name: business.name,
      openNow: business.openHours?.openNow,
      description: business.description,
      typeId: business.typesID,
      image: business.logo || "", // Add a default value for the image property
      locationId: business.locationsID,
      cityId: business.citiesID,
    }));
    const result = searchBusinesses(query, resultShort);
    return result;
  }
);
export const fetchBusinessesShortByType = createAsyncThunk(
  "businesses/fetchBusinessesShortByType",
  async (typeId: string) => {
    const result = await DataStore.query(
      Businesses,
      (c) => c.typesID.eq(typeId), // Filter by type
      {
        // Pagination
        sort: (c) => c.createdAt(SortDirection.DESCENDING),
      }
    );
    const resultShort: BusinessShort[] = result.map((business) => ({
      id: business.id,
      name: business.name,
      openNow: business.openHours?.openNow,
      description: business.description,
      typeId: business.typesID,
      image: business.logo || "", // Add a default value for the image property
      locationId: business.locationsID,
      cityId: business.citiesID,
    }));
    return resultShort;
  }
);

export const fetchBusinessesShortByRegion = createAsyncThunk(
  "businesses/fetchBusinessesShortByRegion",
  async (regionId: string) => {
    const result = await DataStore.query(
      Businesses,
      (c) => c.locationsID.eq(regionId) // Filter by type
    );
    const resultShort: BusinessShort[] = result.map((business) => ({
      id: business.id,
      name: business.name,
      openNow: business.openHours?.openNow,
      description: business.description,
      typeId: business.typesID,
      image: business.logo || "", // Add a default value for the image property
      locationId: business.locationsID,
      cityId: business.citiesID,
    }));
    return resultShort;
  }
);

export const openBusiness = createAsyncThunk(
  "businesses/openBusiness",
  async (id?: string | null) => {
    if (!id) return null;
    const result = await DataStore.query(Businesses, id);
    return result;
  }
);

export const createBusiness = createAsyncThunk(
  "businesses/createBusiness",
  async (business: Business) => {
    const result = await DataStore.save(new Businesses(business));
    console.log("createBusiness", result);
    return result;
  }
);

export const deleteBusiness = createAsyncThunk(
  "businesses/deleteBusiness",
  async (id: string) => {
    const result = await DataStore.delete(Businesses, id);
    return { id, result };
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

      .addCase(fetchBusinessesShortByType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBusinessesShortByType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businessesShort = action.payload;
      })
      .addCase(fetchBusinessesShortByType.rejected, (state) => {
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
      })

      .addCase(deleteBusiness.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBusiness.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businesses = (state.businesses ?? []).filter(
          (business) => business.id !== action.payload.id
        );
      })
      .addCase(deleteBusiness.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reset } = businessSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectBusinesses = (state: RootState) => state.business.businesses;

export default businessSlice.reducer;
