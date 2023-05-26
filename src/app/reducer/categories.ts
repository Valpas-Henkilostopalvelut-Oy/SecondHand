import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Categories } from "../../models";
import { DataStore } from "aws-amplify";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";

export interface CategoriesProps {
  id: string;
  createdBy?: string | null;
  name?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

interface initialStateProps {
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
  data: CategoriesProps[] | null | undefined;
}

const initialState: initialStateProps = {
  isLoading: false,
  isError: false,
  error: null,
  data: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const categories = await DataStore.query(Categories);
    const filteredCategories: CategoriesProps[] = categories.map(
      (category) => ({
        id: category.id,
        createdBy: category.createdBy,
        name: category.name,
        createdAt: category.createdAt,
        updatedAt: category.updatedAt,
      })
    );

    return filteredCategories;
  }
);

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (category: string) => {
    const user = await Auth.currentAuthenticatedUser();
    const newCategory = await DataStore.save(
      new Categories({
        name: category,
        createdBy: user.username,
      })
    );
    const { id, name, createdAt, createdBy, updatedAt } = newCategory;
    return { id, name, createdAt, createdBy, updatedAt };
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id: string) => {
    const categoryToDelete = await DataStore.query(Categories, id);
    if (!categoryToDelete) throw new Error("Category not found");
    await DataStore.delete(categoryToDelete);
    return categoryToDelete.id;
  }
);

const categories = createSlice({
  name: "categories",
  initialState,
  reducers: {
    updateData: (state, action) => {
      if (!state.data) state.data = [];
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<CategoriesProps[]>) => {
          state.isLoading = false;
          state.isError = false;
          state.error = null;
          state.data = action.payload;
        }
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(addCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.data?.push({
          id: action.payload.id,
          createdBy: action.payload.createdBy,
          name: action.payload.name,
          createdAt: action.payload.createdAt,
          updatedAt: action.payload.updatedAt,
        });
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.data = state.data?.filter(
          (category) => category.id !== action.payload
        );
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { updateData } = categories.actions;
export default categories.reducer;
