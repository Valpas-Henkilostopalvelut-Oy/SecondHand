import type {
  LazyCategory,
  LazySellplaces,
  LazyPriceitem,
  LazyOpentime,
  LazyContact,
  LazyLocation,
  LazyImage,
} from "../../../../models";

export type ImgsTypes = {
  url: string | null;
  identify: LazyImage | null;
};

export type ImageTypes = {
  identify: LazyImage;
  imgUrl: string;
  file: File;
};

export type NewStoreProps = {
  values: valuesProps;
  setValues: (values: valuesProps) => void;
};

export type StoreValues = {
  name: string;
  description: string;
  categories: StoreCategories[];
  services: StoreServices[];
  sellplaces: {
    all: number;
    free: number;
  };
  pricelist: string[];
  embedmap: string;
  opentimes: StoreOpentimes[];
};

export type StoreOpentimes = {
  day: string;
  open: string;
  close: string;
};

export type StoreCategories = {
  name: string;
  id: string;
};

export type StoreServices = {
  name: string;
  id: string;
};

export type valuesProps = {
  id: string;
  isConfirmed?: boolean | null;
  name?: string | null;
  description?: string | null;
  categories?: (LazyCategory | null)[] | null;
  services?: (number | null)[] | null;
  clicked?: string | null;
  sellplaces?: LazySellplaces | null;
  pricelist?: (LazyPriceitem | null)[] | null;
  embedmap?: string | null;
  opentimes?: (LazyOpentime | null)[] | null;
  contact?: LazyContact | null;
  location?: LazyLocation | null;
  imgs?: (ImageTypes | null)[] | null;
};
