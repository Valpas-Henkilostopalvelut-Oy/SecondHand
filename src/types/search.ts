import { BusinessType } from "./businessType";
import { BusinessShort } from "./businesses";
import { Categories } from "./categories";

export interface SearchQuery {
  search: string;
  openOn?: number;
  type: BusinessType | null;
  category?: Categories | null;
  adminName: string | null;
  city?: string | null;
  orderBy?: string | null;
}
export interface SearchState {
  sellectedRegion: string | null;
  sellectedType: string | null;
  searchQuery: SearchQuery;
  result: BusinessShort[] | null;
  isSearching: boolean;
}
