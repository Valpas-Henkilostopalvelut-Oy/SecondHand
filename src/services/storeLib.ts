import { Store, StoreCategories } from "../models";
import type { LazyCategories, LazyStore } from "../models";
import {
  DataStore,
  Auth,
  Storage,
  SortDirection,
  Predicates,
} from "aws-amplify";
import type { filterProps, StoreFormProps } from "../types/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createNote } from "./noteLib";
import { createOpenTimeAsync } from "./openTimeLib";

const uploadImage = async (file: File, storeName: string) => {
  // Generate random id for the file
  const id = Math.random().toString(36).substring(2);
  const fileName = `${storeName}/${id}.${file.name.split(".").pop()}}`;
  // Upload images to store folder
  const { key } = await Storage.put(`${fileName}`, file, {
    contentType: "image/png",
    progressCallback(progress) {
      console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
    },
  });
  return key;
};

export const createStoreAsync = createAsyncThunk(
  "adminStores/createStore",
  async ({
    store,
    isAdmin = false,
    dispatch,
  }: {
    store: StoreFormProps;
    isAdmin?: boolean;
    dispatch: any;
  }) => {
    try {
      const logo = store.logo
        ? await uploadImage(store.logo, store.name)
        : null;

      const imgs = await Promise.all(
        (store.imgs || []).map((img) => uploadImage(img, store.name))
      );
      const user = await Auth.currentAuthenticatedUser();
      const newStore = await DataStore.save(
        new Store({
          userID: user.username,
          type: store.type,
          name: store.name,
          contact: store.contact,
          location: store.location,
          settings: {
            ...store.settings,
            isConfirmed: { status: isAdmin },
          },
          description: store.description,
          imgs: imgs,
          logo: logo,
          social: store.social,
        })
      );

      const notesPromises = (store.notes || []).map((note) =>
        createNote(note.notes, newStore)
      );
      const opentimesPromises = (store.opentimes || []).map((openTime) =>
        dispatch(
          createOpenTimeAsync({
            openTime,
            store: newStore,
          })
        )
      );

      const categoriesPromises = (store.categories || []).map(
        async (category) =>
          await DataStore.save(
            new StoreCategories({ categories: category, store: newStore })
          )
      );

      await Promise.all(notesPromises);
      await Promise.all(opentimesPromises);
      await Promise.all(categoriesPromises);
      return newStore;
    } catch (error: any) {
      throw new Error(error);
    }
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
    return updatedStore;
  }
);

export const fetchStores = createAsyncThunk(
  "adminStores/fetchStores",
  async () => {
    const stores = await DataStore.query(Store, Predicates.ALL, {
      sort: (s) => s.name(SortDirection.ASCENDING),
    });

    return stores.filter((store) => store.settings.isConfirmed.status === true);
  }
);

export const fetchStoreFilter = createAsyncThunk(
  "adminStores/fetchStoreFilter",
  async (filter: filterProps) => {
    const { type, title, area, city, category, isConfirmed } = filter;
    const stores = await DataStore.query(
      Store,
      (s) =>
        s.settings.isConfirmed.status.eq(isConfirmed) &&
        s.type.eq(type || "") &&
        s.location?.admin_name.eq(area || "") &&
        s.location?.city.eq(city || ""),
      {
        sort: (s) => s.name(SortDirection.ASCENDING),
      }
    );

    return stores;
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
    return updatedStore;
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

    return updatedStore;
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
    return updatedStore;
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
    return updatedStore;
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
    return updatedStore;
  }
);
