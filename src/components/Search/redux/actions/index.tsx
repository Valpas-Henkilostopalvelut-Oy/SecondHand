import {
  SELECT_AREA,
  SELECT_CATEGORY,
  SELECT_CITY,
  TYPE_SEARCH,
} from "../../types";

export const selectArea = (area: string) => ({
  type: SELECT_AREA,
  payload: area,
});

export const selectCity = (city: string) => ({
  type: SELECT_CITY,
  payload: city,
});

export const selectCategory = (category: string) => ({
  type: SELECT_CATEGORY,
  payload: category,
});

export const typeSearch = (search: string) => ({
  type: TYPE_SEARCH,
  payload: search,
});
