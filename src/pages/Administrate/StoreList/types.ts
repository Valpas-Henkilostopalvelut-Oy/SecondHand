import type {
  LazyCategory,
  LazyOpentime,
  LazyContact,
  LazyLocation,
  LazyImage,
} from "../../../models";

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
  imgs: LazyImage[];
}
