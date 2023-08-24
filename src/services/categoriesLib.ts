import { createAsyncThunk } from "@reduxjs/toolkit";
import { Auth, DataStore } from "aws-amplify";
import { Categories, Store, StoreCategories } from "../models";

export const deleteCategoryFromStore = async (
  storeID: string,
  categoryID: string
) => {
  const storeCategory = await DataStore.query(
    StoreCategories,
    (sc) => sc.categories.id.eq(categoryID) && sc.store.id.eq(storeID)
  );
  if (!storeCategory) throw new Error("Category not found");
  await DataStore.delete(storeCategory);
};

export const addCategoryToStore = async (
  storeID: string,
  categoryID: string
) => {
  const category = await DataStore.query(Categories, categoryID);
  if (!category) throw new Error("Category not found");
  const store = await DataStore.query(Store, storeID);
  if (!store) throw new Error("Store not found");

  await DataStore.save(
    new StoreCategories({
      categories: category,
      store: store,
    })
  );
};

export const fetchCategoriesByStore = async (storeID: string) =>
  await DataStore.query(Categories, (c) => c.stores.storeId.eq(storeID), {
    sort: (s) => s.name("ASCENDING"),
  });

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
