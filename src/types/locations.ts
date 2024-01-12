import { Locations, Cities } from "../models";

export interface Location {
  adminName: string;
  country: string;
}

export interface City {
  name: string;
  zipcode: string;
  locationId: string;
}

export interface LocationsState {
  locations: Locations[] | null;
  cities: Cities[] | null;
  isLoading: boolean;
}
