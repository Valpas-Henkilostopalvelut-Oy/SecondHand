import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DataStore } from "aws-amplify/datastore";
import { Categories } from "../../models";
import { Category, CategoriesState } from "../../types/categories";

const initialState: CategoriesState = {
  categories: null,
  isLoading: false,
};

export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (category: Category) => {
    const result = await DataStore.save(new Categories(category));
    return result;
  }
);

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const result = await DataStore.query(Categories);
    return result;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })

      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = [...(state.categories ?? []), action.payload];
      });
  },
});

export const {} = categoriesSlice.actions;

export const selectCategories = (state: RootState) => state.categoriesSlice;

export default categoriesSlice.reducer;
