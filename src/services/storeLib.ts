import { Store } from "../models";
import { DataStore, Auth, Storage } from "aws-amplify";
import type StoreFormProps from "../types/store";
import type { filterProps } from "../types/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createNote } from "./noteLib";
import { createOpenTime } from "./openTimeLib";

export const getFixedStore = (store: Store) => {
  const { ...rest } = store;
  return rest;
};

export const createStore = async ({
  store,
  isAdmin,
}: {
  store: StoreFormProps;
  isAdmin: boolean;
}) => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const newStore = await DataStore.save(
      new Store({
        categories: store.categories ? store.categories : undefined,
        username: user.username,
        type: store.type,
        name: store.name,
        contact: store.contact,
        location: store.location,
        settings: {
          ...store.settings,
          isConfirmed: { status: isAdmin },
        },
      })
    );

    const notesPromises = (store.notes || []).map((note) =>
      createNote(note.notes, newStore)
    );
    const opentimesPromises = (store.opentimes || []).map((openTime) =>
      createOpenTime(openTime, newStore)
    );

    await Promise.all(notesPromises);
    await Promise.all(opentimesPromises);
    return newStore;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createStoreAsync = createAsyncThunk(
  "adminStores/createStore",
  async ({
    store,
    isAdmin = false,
  }: {
    store: StoreFormProps;
    isAdmin?: boolean;
  }) => {
    const newStore = await createStore({ store, isAdmin });
    return getFixedStore(newStore);
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

export const updateStoreAsync = createAsyncThunk(
  "adminStores/updateStore",
  async ({
    id,
    isAdmin,
    name,
    value,
  }: {
    id: string;
    isAdmin: boolean | undefined | null;
    name: string;
    value: any;
  }) => {
    const store = await DataStore.query(Store, id);
    if (!isAdmin) throw new Error("You are not authorized to update stores");
    if (!store) throw new Error("Store not found");
    const updatedStore = await DataStore.save(
      Store.copyOf(store, (updated: any) => {
        updated[name] = value;
      })
    );
    return getFixedStore(updatedStore);
  }
);

export const fetchStores = createAsyncThunk(
  "adminStores/fetchStores",
  async () => {
    const stores = await DataStore.query(Store);
    const fixedStores = stores.map((store) => getFixedStore(store));
    const filteredStores = fixedStores.filter(
      (store) => store.settings.isConfirmed?.status
    );
    const sortedStores = filteredStores.sort((a, b) => {
      if (a.name && b.name) {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return sortedStores;
  }
);

export const fetchStoreFilter = createAsyncThunk(
  "adminStores/fetchStoreFilter",
  async (filter: filterProps) => {
    const { type, title, area, city, category, isConfirmed } = filter;
    const stores = await DataStore.query(Store);
    const filteredStores = stores.map((store) => getFixedStore(store));
    const sortedStores = filteredStores.sort((a, b) => {
      if (a.name && b.name) {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    // Apply search by confirmed
    const searchedStoresByConfirmed = sortedStores.filter(
      (store) =>
        !!store.settings.isConfirmed?.status === isConfirmed ||
        isConfirmed === null
    );

    // Apply search filter based on the category
    /*const searchedStoresByCategory = category
      ? searchedStoresByConfirmed.filter((store) =>
          category.every((category) =>
            store.categories?.map((c) => c?.name).includes(category)
          )
        )
      : searchedStoresByConfirmed;*/

    // Apply search filter based on the type
    const searchedStoresByType = type
      ? searchedStoresByConfirmed.filter((store) => store.type === type)
      : searchedStoresByConfirmed;

    // Apply search filter based on the type
    const searchedStoresByArea = area
      ? searchedStoresByType.filter(
          (store) => store.location?.admin_name === area
        )
      : searchedStoresByType;

    // Apply search filter based on the city
    const searchedStoresByCity = city
      ? searchedStoresByArea.filter((store) => store.location?.city === city)
      : searchedStoresByArea;

    return searchedStoresByCity;
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
        updated.settings.isConfirmed = {
          status: true,
        };
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
        updated.settings.isConfirmed = {
          status: false,
        };
      })
    );

    return getFixedStore(updatedStore);
  }
);

export const uploadImageAsync = createAsyncThunk(
  "adminStores/uploadImage",
  async ({
    id,
    file,
    fileName,
    fileId,
    isAdmin,
  }: {
    id: string;
    isAdmin: boolean | undefined | null;
    file: File;
    fileName: string;
    fileId: string;
  }) => {
    if (!isAdmin) throw new Error("You are not authorized to update stores");
    const store = await DataStore.query(Store, id);
    if (!store) throw new Error("Store not found");
    const { key } = await Storage.put(`${fileName}`, file, {
      contentType: "image/png",
      progressCallback(progress) {
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
      },
    });
    const updatedStore = await DataStore.save(
      Store.copyOf(store, (updated) => {
        updated.imgs = null;
      })
    );
    return getFixedStore(updatedStore);
  }
);

export const deleteImageAsync = createAsyncThunk(
  "adminStores/deleteImage",
  async ({
    id,
    isAdmin,
    key,
  }: {
    id: string;
    isAdmin: boolean | undefined | null;
    key: string;
  }) => {
    if (!isAdmin) throw new Error("You are not authorized to update stores");
    const store = await DataStore.query(Store, id);
    if (!store) throw new Error("Store not found");
    await Storage.remove(key);
    const updatedStore = await DataStore.save(
      Store.copyOf(store, (updated) => {
        updated.imgs = store.imgs?.filter((img) => img !== key);
      })
    );
    return getFixedStore(updatedStore);
  }
);

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
