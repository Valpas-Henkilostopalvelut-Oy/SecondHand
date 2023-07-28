import type {
  LazyCategories,
  LazyOpentime,
  LazyContact,
  LazyLocation,
  LazyStore,
  LazySocial,
} from "../../models";

export interface ImageTypes {
  id: string;
  key: string;
  filename: string;
  imgUrl: string | null;
}

export interface StoresProps {
  storelist: LazyStore[] | null | undefined;
}

export interface NewStoreProps {
  type: string | null | undefined;
  isCreating: boolean;
  isError: boolean;
  error: string | null | undefined;
  isConfirm: boolean;
  name: string;
  description: string | null;
  social: LazySocial;
  categories: LazyCategories[];
  openTimes: LazyOpentime[];
  contacts: LazyContact;
  location: LazyLocation;
  files: ImageTypes[];
  logo?: ImageTypes | null;
}
