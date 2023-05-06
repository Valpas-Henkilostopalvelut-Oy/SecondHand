import type { Dispatch, SetStateAction } from "react";
import type { LazyImage, LazyCategories } from "../../models";

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

export const SELECT_AREA = "SELECT_AREA";
export const SELECT_CITY = "SELECT_CITY";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const TYPE_SEARCH = "TYPE_SEARCH";
