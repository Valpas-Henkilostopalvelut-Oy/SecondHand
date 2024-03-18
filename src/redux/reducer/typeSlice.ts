import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { BusinessType, BusinessTypesState } from "../../types/businessType";
import { DataStore, SortDirection } from "aws-amplify/datastore";
import { Types } from "../../models";

const initialState: BusinessTypesState = {
  businessTypes: null,
  isLoading: false,
  error: null,
};

export const fetchSingleType = async (id: string) => {
  if (!id) return null;
  const result = await DataStore.query(Types, id);
  if (!result) return null;
  return result;
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
    const result = await DataStore.query(Types, null, {
      sort: (c) => c.name(SortDirection.ASCENDING),
    });
    return result;
  }
);

export const deleteBusinessType = createAsyncThunk(
  "businessTypes/deleteBusinessType",
  async (id: string) => {
    const result = await DataStore.delete(Types, id);
    return { id, result };
  }
);

export const updateBusinessType = createAsyncThunk(
  "businessTypes/updateBusinessType",
  async ({
    id,
    newData,
  }: {
    id?: string | null;
    newData?: BusinessType | null;
  }) => {
    const dataToUpdate = await DataStore.query(Types, id ?? "");
    if (!dataToUpdate) throw new Error("Type not found");
    const result = await DataStore.save(
      Types.copyOf(dataToUpdate, (updated) => {
        updated.name = newData?.name ?? "";
        updated.image = newData?.image ?? "";
      })
    );
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
      })
      .addCase(fetchBusinessTypes.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(createBusinessType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBusinessType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businessTypes = [...(state.businessTypes ?? []), action.payload];
      })
      .addCase(createBusinessType.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(deleteBusinessType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBusinessType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businessTypes = (state.businessTypes ?? []).filter(
          (type) => type.id !== action.payload.id
        );
      })
      .addCase(deleteBusinessType.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(updateBusinessType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBusinessType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businessTypes = (state.businessTypes ?? []).map((type) =>
          type.id === action.payload.id ? action.payload : type
        );
      })
      .addCase(updateBusinessType.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = businessTypeSlice.actions;

export const selectBusinessTypes = (state: RootState) => state.typeSlice;

export default businessTypeSlice.reducer;
