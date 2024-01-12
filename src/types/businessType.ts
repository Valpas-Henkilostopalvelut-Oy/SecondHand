import BaseType from "./basetype";
import { LazyTypes } from "../models";

export interface BusinessType extends BaseType {
  name: string;
  description?: string | null;
  image?: string | null;
}

export interface BusinessTypesState {
  businessTypes: LazyTypes[] | null;
  isLoading: boolean;
}
