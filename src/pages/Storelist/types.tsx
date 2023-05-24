import type { Dispatch, SetStateAction } from "react";
import type { LazyImage, LazyCategories, LazyStore } from "../../models";

export interface StorelistProps {
  storelist: LazyStore[] | null | undefined;
}

export type ImgsTypes = {
  url: string | null;
  identify: LazyImage | null;
};

export type SearchState = {
  search: string;
  area: string;
  city: string;
  category: LazyCategories[];
};

export type SearchProps = {
  search: SearchState;
  setSearch: Dispatch<
    SetStateAction<{
      search: string;
      area: string;
      city: string;
      category: LazyCategories[];
    }>
  >;
  onClick: () => void;
};

export interface OpentimesReducer {
  day_first: string | null | undefined;
  day_last: string | null | undefined;
  start: string | null | undefined;
  end: string | null | undefined;
  isClosed: boolean | null | undefined;
}
