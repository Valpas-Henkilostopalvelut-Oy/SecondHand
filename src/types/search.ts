import { Categories, Types, Locations, Cities } from "../models";
import { BusinessShort } from "./businesses";


export interface SearchQuery {
  search: string;
  openOn?: number;
  type: Types | null;
  category?: Categories | null;
  adminName: Locations | null;
  city: Cities | null;
  orderBy: string | null;
}
export interface SearchState {
  sellectedRegion: string | null;
  sellectedType: string | null;
  searchQuery: SearchQuery;
  result: BusinessShort[] | null;
  isSearching: boolean;
}
