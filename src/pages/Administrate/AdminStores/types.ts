import type {
  LazyCategory,
  LazyOpentime,
  LazyContact,
  LazyLocation,
  LazyImage,
  LazyStore,
} from "../../../models";

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
  isCreating: boolean;
  error: string | null;
  isConfirm: boolean;
  name: string;
  description: string | null;
  categories: LazyCategory[];
  openTimes: LazyOpentime[];
  contacts: LazyContact;
  location: LazyLocation;
  files: ImageTypes[];
}
