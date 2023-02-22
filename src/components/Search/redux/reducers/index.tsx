import {
  SELECT_CITY,
  SELECT_CATEGORY,
  SELECT_AREA,
  TYPE_SEARCH,
} from "../../types";

export const selectArea = (area: string, action: any) => ({
  type: SELECT_AREA,
  payload: area,
  action: action,
});

export const selectCity = (city: string, action: any) => ({
  type: SELECT_CITY,
  payload: city,
  action: action,
});

export const selectCategory = (category: string, action: any) => ({
  type: SELECT_CATEGORY,
  payload: category,
  action: action,
});

export const typeSearch = (search: string, action: any) => ({
  type: TYPE_SEARCH,
  payload: search,
  action: action,
});
