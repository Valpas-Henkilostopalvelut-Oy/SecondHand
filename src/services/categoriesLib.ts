import { createAsyncThunk } from "@reduxjs/toolkit";
import { Auth, DataStore, Predicates, SortDirection } from "aws-amplify";
import { Categories } from "../models";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const categories = await DataStore.query(Categories);

    return categories.sort((a, b) => a.name.localeCompare(b.name));
  }
);

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (category: string) => {
    const user = await Auth.currentAuthenticatedUser();
    const newCategory = await DataStore.save(
      new Categories({
        name: category,
        createdAt: new Date().toISOString(),
        createdBy: user.username,
      })
    );

    return newCategory;
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
