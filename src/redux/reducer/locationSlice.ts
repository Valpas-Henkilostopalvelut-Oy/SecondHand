import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DataStore } from "aws-amplify/datastore";
import { Locations, Cities } from "../../models";
import { City, Location, LocationsState } from "../../types/locations";

const initialState: LocationsState = {
  locations: null,
  isLoading: false,
  cities: null,
};

export const createLocation = createAsyncThunk(
  "locations/createLocation",
  async (location: Location) => {
    const result = await DataStore.save(new Locations(location));
    return result;
  }
);

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  async () => {
    const result = await DataStore.query(Locations);
    return result;
  }
);

export const createCities = createAsyncThunk(
  "locations/createCities",
  async (city: City) => {
    const result = await DataStore.save(new Cities(city));
    return result;
  }
);

export const fetchCities = createAsyncThunk(
  "locations/fetchCities",
  async () => {
    const result = await DataStore.query(Cities);
    return result;
  }
);

export const deleteLocation = createAsyncThunk(
  "locations/deleteLocation",
  async (id: string) => {
    const result = await DataStore.delete(Locations, id);
    return result;
  }
);

export const deleteCity = createAsyncThunk(
  "locations/deleteCity",
  async (id: string) => {
    const result = await DataStore.delete(Cities, id);
    return result;
  }
);

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.locations = action.payload;
      })

      .addCase(createLocation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.locations = [...(state.locations ?? []), action.payload];
      })

      .addCase(fetchCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cities = action.payload;
      })

      .addCase(createCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cities = [...(state.cities ?? []), action.payload];
      })

      .addCase(deleteLocation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.locations = action.payload;
      })

      .addCase(deleteCity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cities = action.payload;
      });
  },
});

export const {} = locationsSlice.actions;

export const selectLocations = (state: RootState) => state.locationSlice;

export default locationsSlice.reducer;
