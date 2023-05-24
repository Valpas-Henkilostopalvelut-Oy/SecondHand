import type { ThunkAction, Action } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import application from "./application";
import newstore from "../pages/Administrate/AdminStores/redux/newstore";
import adminStoresSlice from "../pages/Administrate/AdminStores/redux/adminStores";
import stores from "./stores";
import categories from "./categories";

export const store = configureStore({
  reducer: {
    application,
    newstore,
    adminStoresSlice,
    stores,
    categories,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
