import { Categories } from "../models";
import BaseType from "./basetype";
import { BusinessesCategories } from "./businessesCategories";

export interface Category {
  name: string;
  description?: string | null;
  image?: string | null;
}

export interface CategoriesState {
  categories: Categories[] | null;
  isLoading: boolean;
}
