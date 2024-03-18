import { BusinessShort } from "../types/businesses";
import { Category } from "../types/categories";
import { SearchQuery } from "../types/search";
import { DataStore } from "aws-amplify/datastore";
import { Locations } from "../models";

function searchName(business: BusinessShort, search?: string): boolean {
  if (!search) {
    return true;
  }
  return business.name.toLowerCase().includes(search.toLowerCase());
}

function isOpenOn(business: BusinessShort, openOn?: number): boolean {
  if (!openOn) {
    return true;
  }
  // Implement the logic to determine if a business is open on a given day
  return true;
}

function categoryIncluded(
  business: BusinessShort,
  category?: Category | null
): boolean {
  if (!category) {
    return true;
  }
  return (business.categories ?? []).includes(category?.name ?? "");
}

const isBuisnessInRegion = async (
  business: BusinessShort,
  regionId?: string | null
) => {
  if (!regionId) {
    return true;
  }
  const locations = await DataStore.query(Locations, (l) =>
    l.Businesses.locationsID.eq(business.id)
  );
  if (locations.length === 0) {
    return false;
  }
  return true;
};

function searchBusinesses(
  query?: SearchQuery,
  businesses?: BusinessShort[] | null
): BusinessShort[] | null {
  return (businesses ?? [])
    .filter((business) => {
      // Filter by 'search' term if provided
      if (!searchName(business, query?.search)) {
        return false;
      }

      // Filter by 'openOn' if provided (assuming you have logic to determine if a business is open)
      if (!isOpenOn(business, query?.openOn)) {
        return false;
      }

      // Continue with other filters like 'type', 'category', 'region', 'city'
      if (query?.type && business.typeId !== query.type.id) {
        return false;
      }

      if (!categoryIncluded(business, query?.category)) {
        return false;
      }
      if (query?.adminName && business.locationId !== query.adminName.id) {
        return false;
      }

      if (query?.city && business.cityId !== query.city.id) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sorting logic based on 'orderBy'
      // Implement the sorting logic based on your requirements
      return 0; // Placeholder, replace with actual sorting logic
    });
}

export default searchBusinesses;
