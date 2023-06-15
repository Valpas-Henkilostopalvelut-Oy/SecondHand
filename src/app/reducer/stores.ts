import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { LazyStore } from "../../models";
import { Store } from "../../models";
import { DataStore } from "aws-amplify";
import type { PayloadAction } from "@reduxjs/toolkit";
interface filterProps {
  title: string;
  type: string | null | undefined;
  category: string[] | null | undefined;
  area: string | null;
  city: string | null;
  isConfirmed: boolean | undefined | null;
}

interface initialStateProps {
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
  data: LazyStore[] | [];
}

const initialState: initialStateProps = {
  isLoading: false,
  isError: false,
  error: null,
  data: [],
};

const getFixedStore = (store: LazyStore) => {
  const { ...rest } = store;
  return rest;
};

export const updateLogoAsync = createAsyncThunk(
  "adminStores/updateLogo",
  async ({
    id,
    isAdmin,
    logo,
  }: {
    id: string;
    isAdmin: boolean | undefined | null;
    logo: string | null;
  }) => {
    const store = await DataStore.query(Store, id);
    if (!isAdmin) throw new Error("You are not authorized to update stores");
    if (!store) throw new Error("Store not found");
    const updatedStore = await DataStore.save(
      Store.copyOf(store, (updated) => {
        updated.logo = logo;
      })
    );
    return getFixedStore(updatedStore);
  }
);

export const confirmStoreAsync = createAsyncThunk(
  "adminStores/confirmStore",
  async ({
    id,
    isAdmin,
  }: {
    id: string;
    isAdmin: boolean | undefined | null;
  }) => {
    const store = await DataStore.query(Store, id);
    if (!isAdmin) throw new Error("You are not authorized to confirm stores");
    if (!store) throw new Error("Store not found");
    const updatedStore = await DataStore.save(
      Store.copyOf(store, (updated) => {
        updated.settings.isConfirmed = true;
      })
    );
    return getFixedStore(updatedStore);
  }
);

export const unconfirmStoreAsync = createAsyncThunk(
  "adminStores/unconfirmStore",
  async ({
    id,
    isAdmin,
  }: {
    id: string;
    isAdmin: boolean | undefined | null;
  }) => {
    const store = await DataStore.query(Store, id);
    if (!isAdmin) throw new Error("You are not authorized to unconfirm stores");
    if (!store) throw new Error("Store not found");
    const updatedStore = await DataStore.save(
      Store.copyOf(store, (updated) => {
        updated.settings.isConfirmed = false;
      })
    );

    return getFixedStore(updatedStore);
  }
);

export const updateStoreAsync = createAsyncThunk(
  "adminStores/updateStore",
  async ({
    id,
    isAdmin,
    data,
  }: {
    id: string;
    isAdmin: boolean | undefined | null;
    data: LazyStore;
  }) => {
    const store = await DataStore.query(Store, id);
    if (!isAdmin) throw new Error("You are not authorized to update stores");
    if (!store) throw new Error("Store not found");
    const updatedStore = await DataStore.save(
      Store.copyOf(store, (updated) => {
        updated.name = data.name;
        updated.description = data.description;
        updated.categories = data.categories;
        updated.opentimes = data.opentimes;
        updated.contact = data.contact;
        updated.location = data.location;
        updated.imgs = data.imgs;
        updated.settings.isConfirmed = data.settings.isConfirmed;
        updated.social = data.social;
        updated.type = data.type;
      })
    );
    return getFixedStore(updatedStore);
  }
);

export const deleteStoreAsync = createAsyncThunk(
  "adminStores/deleteStore",
  async ({
    id,
    isAdmin,
  }: {
    id: string;
    isAdmin: boolean | undefined | null;
  }) => {
    const store = await DataStore.query(Store, id);
    if (!isAdmin) throw new Error("You are not authorized to delete stores");
    if (!store) throw new Error("Store not found");
    await DataStore.delete(Store, id);
    return id;
  }
);

export const fetchStores = createAsyncThunk(
  "adminStores/fetchStores",
  async () => {
    const stores = await DataStore.query(Store);
    const filteredStores = stores
      .map((store) => getFixedStore(store))
      .filter((store) => store.settings.isConfirmed);
    return filteredStores;
  }
);

export const fetchStoreFilter = createAsyncThunk(
  "adminStores/fetchStoreFilter",
  async (filter: filterProps) => {
    const { type, title, area, city, category, isConfirmed } = filter;
    const stores = await DataStore.query(Store);
    const filteredStores = stores.map((store) => getFixedStore(store));

    // Apply search by confirmed
    const searchedStoresByConfirmed = filteredStores.filter(
      (store) =>
        store.settings.isConfirmed === isConfirmed ||
        store.settings.isConfirmed === null ||
        store.settings.isConfirmed === undefined
    );

    // Apply search filter based on the category
    const searchedStoresByCategory = category
      ? searchedStoresByConfirmed.filter((store) =>
          category.every((category) =>
            store.categories?.map((c) => c?.name).includes(category)
          )
        )
      : searchedStoresByConfirmed;

    // Apply search filter based on the type
    const searchedStoresByType = type
      ? searchedStoresByCategory.filter((store) => store.type === type)
      : searchedStoresByCategory;

    // Apply search filter based on the title
    const searchedStoresByTitle = searchedStoresByType.filter(
      (store) =>
        store?.name?.toLowerCase().includes(title.toLowerCase()) ||
        store?.description?.toLowerCase().includes(title.toLowerCase()) ||
        store?.categories?.some((category) =>
          category?.name?.toLowerCase().includes(title.toLowerCase())
        )
    );

    // Apply search filter based on the type
    const searchedStoresByArea = area
      ? searchedStoresByTitle.filter(
          (store) => store.location?.admin_name === area
        )
      : searchedStoresByTitle;

    // Apply search filter based on the city
    const searchedStoresByCity = city
      ? searchedStoresByArea.filter((store) => store.location?.city === city)
      : searchedStoresByArea;

    return searchedStoresByCity;
  }
);

const stores = createSlice({
  name: "adminStores",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<any>): void => {
      state.data = [...state.data, action.payload];
    },
    clearError: (state) => {
      state.isError = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStores.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(
      fetchStores.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchStores.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(fetchStoreFilter.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(
      fetchStoreFilter.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchStoreFilter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(confirmStoreAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(
      confirmStoreAsync.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.data = state.data?.filter(
          (store) => store.id !== action.payload.id
        );
      }
    );
    builder.addCase(confirmStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(deleteStoreAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(
      deleteStoreAsync.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.data = state.data?.filter((store) => store.id !== action.payload);
      }
    );
    builder.addCase(deleteStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(updateStoreAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(
      updateStoreAsync.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.data = state.data?.map((store) =>
          store.id === action.payload.id ? action.payload : store
        );
      }
    );
    builder.addCase(updateStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(unconfirmStoreAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(
      unconfirmStoreAsync.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.data = state.data?.filter(
          (store) => store.id !== action.payload.id
        );
      }
    );
    builder.addCase(unconfirmStoreAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(updateLogoAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(updateLogoAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data = state.data?.map((store) =>
        store.id === action.payload.id ? action.payload : store
      );
    });
    builder.addCase(updateLogoAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export const { updateData, clearError } = stores.actions;
export default stores.reducer;
