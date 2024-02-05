import BaseType from "./basetype";
import { Business } from "./businesses";
import { Category } from "./categories";

export interface BusinessesCategories extends BaseType {
  businessesId?: string | null;
  categoriesId?: string | null;
  businesses: Business;
  categories: Category;
}
