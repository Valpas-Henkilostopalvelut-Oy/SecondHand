import { BusinessShort, Businesses } from "../types/businesses";
import { Categories } from "../types/categories";
import { SearchQuery } from "../types/search";

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
  category?: Categories | null
): boolean {
  if (!category) {
    return true;
  }
  return (business.categories ?? []).includes(category.id);
}

function regionIncluded(
  business: BusinessShort,
  region?: string | null
): boolean {
  if (!region) {
    return true;
  }
  return (business.location ?? []).some((loc) => loc.adminName === region);
}

function cityIncluded(business: BusinessShort, city?: string | null): boolean {
  if (!city) {
    return true;
  }
  return (business.location ?? []).some((loc) => loc.city === city);
}

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
      if (query?.type && business.type?.id !== query.type.id) {
        return false;
      }

      if (!categoryIncluded(business, query?.category)) {
        return false;
      }

      if (!regionIncluded(business, query?.adminName)) {
        return false;
      }

      if (!cityIncluded(business, query?.city)) {
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
