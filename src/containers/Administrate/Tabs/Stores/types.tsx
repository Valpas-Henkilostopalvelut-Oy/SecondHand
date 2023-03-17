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
