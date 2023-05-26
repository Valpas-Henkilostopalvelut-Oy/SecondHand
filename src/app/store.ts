import type { ThunkAction, Action } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import application from "./reducer/application";
import newstore from "../pages/Administrate/AdminStores/redux/newstore";
import adminStoresSlice from "./reducer/adminStores";
import stores from "./reducer/stores";
import categories from "./reducer/categories";
import user from "./reducer/user";

export const store = configureStore({
  reducer: {
    application,
    newstore,
    adminStoresSlice,
    stores,
    categories,
    user,
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
