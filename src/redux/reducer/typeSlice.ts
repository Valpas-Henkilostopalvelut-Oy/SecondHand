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

export const deleteBusinessType = createAsyncThunk(
  "businessTypes/deleteBusinessType",
  async (id: string) => {
    const result = await DataStore.delete(Types, id);
    return { id, result };
  }
);

export const updateBusinessType = createAsyncThunk(
  "businessTypes/updateBusinessType",
  async (type?: BusinessType | null) => {
    if (!type) throw new Error("Type not found");
    const toUpdate = await DataStore.query(Types, type?.id ?? "");
    if (!toUpdate) throw new Error("Type not found");
    const result = await DataStore.save(
      Types.copyOf(toUpdate, (updated) => {
        updated.name = type.name;
      })
    );
    return result;
  }
);

export const updateTypeImage = createAsyncThunk(
  "businessTypes/updateTypeImage",
  async ({ image, id }: { image?: string | null; id?: string | null }) => {
    if (!id) throw new Error("Type not found");
    const toUpdate = await DataStore.query(Types, id ?? "");
    if (!toUpdate) throw new Error("Type not found");
    const result = await DataStore.save(
      Types.copyOf(toUpdate, (updated) => {
        updated.image = image;
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
      })

      .addCase(updateTypeImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTypeImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businessTypes = (state.businessTypes ?? []).map((type) =>
          type.id === action.payload.id ? action.payload : type
        );
      })
      .addCase(updateTypeImage.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = businessTypeSlice.actions;

export const selectBusinessTypes = (state: RootState) => state.typeSlice;

export default businessTypeSlice.reducer;
