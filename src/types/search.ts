export interface SearchState {
  search: string;
  openOn: number;
  category: string | null;
  subcategory: string | null;
  region: string | null;
  city: string | null;
  orderBy: string | null;
}
