import BaseType from "./basetype";

export interface BusinessType extends BaseType {
  name: string;
  description?: string | null;
  image?: string | null;
}

export interface BusinessTypesState {
  businessTypes: BusinessType[] | null;
  isLoading: boolean;
}
