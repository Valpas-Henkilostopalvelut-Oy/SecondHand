import { Categories, Types, Locations, Cities } from "../models";
import { BusinessShort } from "./businesses";


export interface SearchQuery {
  search: string;
  openOn?: number;
  type: Types | null;
  category?: Categories | null;
  adminName: Locations | null;
  city?: Cities | null;
  orderBy?: number | null;
}
export interface SearchState {
  searchQuery: SearchQuery;
  result: BusinessShort[] | null;
  isSearching: boolean;
}
