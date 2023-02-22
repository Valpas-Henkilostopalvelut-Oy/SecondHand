import type React from "react";

export type SearchProps = {
  search: {
    search: string;
    area: string;
    city: string;
  };
  setSearch: React.Dispatch<
    React.SetStateAction<{
      search: string;
      area: string;
      city: string;
    }>
  >;
  category: string[];
  setCategory: React.Dispatch<React.SetStateAction<string[]>>;
};

export const SELECT_AREA = "SELECT_AREA";
export const SELECT_CITY = "SELECT_CITY";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const TYPE_SEARCH = "TYPE_SEARCH";
