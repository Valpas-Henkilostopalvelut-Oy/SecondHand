import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { BusinessType, BusinessTypesState } from "../../types/businessType";
import { DataStore } from "aws-amplify/datastore";
import { Types } from "../../models";

const initialState: BusinessTypesState = {
  businessTypes: null,
  isLoading: false,
};

export const createBusinessType = createAsyncThunk(
  "businessTypes/createBusinessType",
  async (type: BusinessType) => {
    const result = await DataStore.save(new Types(type));
    return result;
  }
);

export const fetchBusinessTypes = createAsyncThunk(
  "businessTypes/fetchBusinessTypes",
  async () => {
    const result = await DataStore.query(Types);
    return result;
  }
);

const businessTypeSlice = createSlice({
  name: "businessTypes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinessTypes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBusinessTypes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businessTypes = action.payload;
      });
  },
});

export const {} = businessTypeSlice.actions;

export const selectBusinessTypes = (state: RootState) => state.typeSlice;

export default businessTypeSlice.reducer;
