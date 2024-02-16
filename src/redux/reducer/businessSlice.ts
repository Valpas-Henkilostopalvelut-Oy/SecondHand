import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  BusinessState,
  BusinessShort,
  NewBusiness,
} from "../../types/businesses";
import searchBusinesses from "../../utils/searchBusinesses";
import { SearchQuery } from "../../types/search";
import { DataStore, SortDirection } from "aws-amplify/datastore";
import { Businesses, BusinessesCategories, Categories } from "../../models";
import { getUrl, uploadData, remove } from "aws-amplify/storage";
import { BusinessEditProps } from "../../containers/Admin/AdminBusiness/AdminBusinessesEdit";

// Define a type for the slice state

// Define the initial state using that type
export const initialState: BusinessState = {
  businesses: null,
  businessesShort: null,
  isLoading: false,
};

export const fetchSingleBusiness = async (
  id: string | undefined
): Promise<Businesses | null> => {
  if (!id) return null;
  const result = await DataStore.query(Businesses, id);
  if (!result) return null;
  return result;
};

export const fetchLogo = async (
  logo?: string | null | undefined
): Promise<string | null> => {
  if (!logo) return null;

  try {
    const result = await getUrl({ key: logo });
    return result.url.toString();
  } catch (error) {
    console.error("Error fetching logo:", error);
    return null;
  }
};

const uploadLogo = async (file: File, name: string) => {
  const { result } = uploadData({
    key: `businesses/${name}/${file.name}`,
    data: file,
  });
  return (await result).key;
};

const updateLogo = async (
  id: string,
  file: File,
  keyToRemove: string | null | undefined
) => {
  if (keyToRemove) {
    await remove({ key: keyToRemove });
  }
  const { result } = uploadData({
    key: `businesses/${id}/${file.name}`,
    data: file,
  });
  return (await result).key;
};

export const updateBusinessCategories = async ({
  businesses,
  categories,
}: {
  businesses: Businesses;
  categories: Categories[];
}) => {
  try {
    // Fetch existing relationships for the given businessesId
    const existingRelationships = await DataStore.query(
      BusinessesCategories,
      (q) => q.businessesId.eq(businesses.id)
    );

    // Extract existing categoryIds from relationships
    const existingCategoryIds = existingRelationships.map(
      (relationship) => relationship.categoriesId
    );

    // Determine new categoryIds to add
    const categoryIdsToAdd = categories
      .map((category) => category.id)
      .filter(
        (categoryId) => categoryId && !existingCategoryIds.includes(categoryId)
      );

    // Determine existing categoryIds to remove
    const categoryIdsToRemove = existingCategoryIds.filter(
      (categoryId) =>
        categoryId && !categories.some((category) => category.id === categoryId)
    );

    // Create new relationships for categoryIdsToAdd
    await Promise.all(
      categoryIdsToAdd.map(async (categoryId) => {
        const category = await DataStore.query(Categories, categoryId);
        if (!category) return;
        const newRelationship = new BusinessesCategories({
          businesses,
          categories: category,
        });

        await DataStore.save(newRelationship);
      })
    );

    // Delete relationships for categoryIdsToRemove
    await Promise.all(
      categoryIdsToRemove.map(async (categoryId) => {
        const relationshipToDelete = existingRelationships.find(
          (relationship) => relationship.categoriesId === categoryId
        );
        if (relationshipToDelete) {
          await DataStore.delete(BusinessesCategories, relationshipToDelete.id);
        }
      })
    );

    console.log("BusinessCategories updated successfully");
  } catch (error) {
    console.error("Error updating BusinessCategories:", error);
  }
};

export const fetchBusinessCategoriesOnBusiness = async (
  id: string
): Promise<Categories[] | undefined> => {
  if (!id) return;

  try {
    const business = await DataStore.query(Businesses, id);
    if (!business) return;

    const businessCategories = await business.Categoriess?.toArray();

    if (!businessCategories || businessCategories.length === 0)
      return undefined;

    const result: Categories[] = await Promise.all(
      businessCategories.map(async (businessCategory) => {
        const category = await businessCategory.categories;
        return category;
      })
    );

    return result;
  } catch (error) {
    console.error("Error fetching business categories:", error);
    return;
  }
};

export const fetchBusinesses = createAsyncThunk(
  "businesses/fetchBusinesses",
  async () => {
    // Sort first newest to oldest
    const result = await DataStore.query(Businesses, null, {
      // Pagination
      sort: (c) => c.createdAt(SortDirection.DESCENDING),
    });
    return result;
  }
);

export const fetchBusinessesShort = createAsyncThunk(
  "businesses/fetchBusinessesShort",
  async (query: SearchQuery) => {
    const resultShort: BusinessShort[] = (
      await DataStore.query(Businesses, null, {
        // Pagination
        sort: (c) => c.createdAt(SortDirection.DESCENDING),
      })
    ).map((business) => ({
      id: business.id,
      name: business.name,
      openNow: business.openHours?.openNow,
      description: business.description,
      typeId: business.typesID,
      image: business.logo || "", // Add a default value for the image property
      locationId: business.locationsID,
      cityId: business.citiesID,
    }));
    const result = searchBusinesses(query, resultShort);
    return result;
  }
);
export const fetchBusinessesShortByType = createAsyncThunk(
  "businesses/fetchBusinessesShortByType",
  async (typeId: string) => {
    const result = await DataStore.query(
      Businesses,
      (c) => c.typesID.eq(typeId), // Filter by type
      {
        // Pagination
        sort: (c) => c.createdAt(SortDirection.DESCENDING),
      }
    );
    const resultShort: BusinessShort[] = result.map((business) => ({
      id: business.id,
      name: business.name,
      openNow: business.openHours?.openNow,
      description: business.description,
      typeId: business.typesID,
      image: business.logo || "", // Add a default value for the image property
      locationId: business.locationsID,
      cityId: business.citiesID,
    }));
    return resultShort;
  }
);

export const fetchBusinessesShortByRegion = createAsyncThunk(
  "businesses/fetchBusinessesShortByRegion",
  async (regionId: string) => {
    const result = await DataStore.query(Businesses, (c) =>
      c.locationsID.eq(regionId)
    );
    console.log("fetchBusinessesShortByRegion", result);
    const resultShort: BusinessShort[] = result.map((business) => ({
      id: business.id,
      name: business.name,
      openNow: business.openHours?.openNow,
      description: business.description,
      typeId: business.typesID,
      image: business.logo || "", // Add a default value for the image property
      locationId: business.locationsID,
      cityId: business.citiesID,
    }));
    return resultShort;
  }
);

export const createBusiness = createAsyncThunk(
  "businesses/createBusiness",
  async (business: NewBusiness) => {
    if (!business.location) throw new Error("Location is required");
    if (!business.city) throw new Error("City is required");
    if (!business.type) throw new Error("Type is required");
    if (!business.logoFile) {
      const result = await DataStore.save(
        new Businesses({
          ...business,
          typesID: business.type?.id ?? "",
          citiesID: business.city?.id ?? "",
          locationsID: business.location?.id ?? "",
        })
      );
      if (business.categories) {
        business.categories.forEach((category) => {
          DataStore.save(
            new BusinessesCategories({
              categories: category,
              businesses: result,
            })
          );
        });
      }
      return result;
    }

    const logo = await uploadLogo(business.logoFile, business.name);
    const result = await DataStore.save(
      new Businesses({
        ...business,
        typesID: business.type?.id ?? "",
        citiesID: business.city?.id ?? "",
        locationsID: business.location?.id ?? "",
        logo,
      })
    );
    if (business.categories) {
      business.categories.forEach((category) => {
        DataStore.save(
          new BusinessesCategories({
            categories: category,
            businesses: result,
          })
        );
      });
    }
    return result;
  }
);

export const updateBusiness = createAsyncThunk(
  "businesses/updateBusiness",
  async ({
    id,
    newData,
  }: {
    id?: string | null;
    newData?: BusinessEditProps | null;
  }) => {
    if (!id) throw new Error("Business ID is required");
    if (!newData) throw new Error("New data is required");
    const dataToUpdate = await DataStore.query(Businesses, id);
    if (!dataToUpdate) throw new Error("Business not found");

    console.log("Updating");
    if (newData.category) {
      updateBusinessCategories({
        businesses: dataToUpdate,
        categories: newData.category,
      });
    }

    if (!newData.logoFile) {
      return await DataStore.save(
        Businesses.copyOf(dataToUpdate, (updated) => {
          updated.name = newData.name ?? updated.name;
          updated.address = newData.address ?? updated.address;
          updated.description = newData.description ?? updated.description;
          updated.cardDescription =
            newData.cardDesctiption ?? updated.cardDescription;
          updated.websiteUrl = newData.websiteUrl ?? updated.websiteUrl;
          updated.typesID = newData.type?.id ?? updated.typesID;
          updated.citiesID = newData.city?.id ?? updated.citiesID;
          updated.locationsID = newData.location?.id ?? updated.locationsID;
        })
      );
    }

    const logo = await uploadLogo(newData.logoFile, id);
    const result = await DataStore.save(
      Businesses.copyOf(dataToUpdate, (updated) => {
        updated.name = newData.name ?? updated.name;
        updated.address = newData.address ?? updated.address;
        updated.description = newData.description ?? updated.description;
        updated.cardDescription =
          newData.cardDesctiption ?? updated.cardDescription;
        updated.websiteUrl = newData.websiteUrl ?? updated.websiteUrl;
        updated.typesID = newData.type?.id ?? updated.typesID;
        updated.citiesID = newData.city?.id ?? updated.citiesID;
        updated.locationsID = newData.location?.id ?? updated.locationsID;
        updated.logo = logo;
      })
    );

    return result;
  }
);

export const deleteBusiness = createAsyncThunk(
  "businesses/deleteBusiness",
  async (id: string) => {
    const result = await DataStore.delete(Businesses, id);
    return { id, result };
  }
);

export const businessSlice = createSlice({
  name: "businesses",
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinesses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBusinesses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businesses = action.payload;
      })
      .addCase(fetchBusinesses.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(fetchBusinessesShort.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBusinessesShort.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businessesShort = action.payload;
      })
      .addCase(fetchBusinessesShort.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(fetchBusinessesShortByType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBusinessesShortByType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businessesShort = action.payload;
      })
      .addCase(fetchBusinessesShortByType.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(createBusiness.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBusiness.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businesses = [...(state.businesses ?? []), action.payload];
      })
      .addCase(createBusiness.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(deleteBusiness.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBusiness.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businesses = (state.businesses ?? []).filter(
          (business) => business.id !== action.payload.id
        );
      })
      .addCase(deleteBusiness.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(fetchBusinessesShortByRegion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBusinessesShortByRegion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businessesShort = action.payload;
      })
      .addCase(fetchBusinessesShortByRegion.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(updateBusiness.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBusiness.fulfilled, (state, action) => {
        state.isLoading = false;
        state.businesses = (state.businesses ?? []).map((business) =>
          business.id === action.payload.id ? action.payload : business
        );
      })
      .addCase(updateBusiness.rejected, (state, action) => {
        console.log(action.error);
        state.isLoading = false;
      });
  },
});

export const { reset } = businessSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectBusinesses = (state: RootState) => state.business.businesses;

export default businessSlice.reducer;
