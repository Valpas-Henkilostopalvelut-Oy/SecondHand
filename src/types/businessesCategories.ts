import BaseType from "./basetype";
import { NewBusiness } from "./businesses";
import { Category } from "./categories";

export interface BusinessesCategories extends BaseType {
  businessesId?: string | null;
  categoriesId?: string | null;
  businesses: NewBusiness;
  categories: Category;
}
