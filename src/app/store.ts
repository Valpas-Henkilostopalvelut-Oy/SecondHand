import type { ThunkAction, Action } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import application from "./reducer/application";
import newstore from "../admin/AdminStores/redux/newstore";
import stores from "./reducer/stores";
import categories from "./reducer/categories";
import user from "./reducer/user";
import ads from "./reducer/ads";
import evaluation from "./reducer/evaluation";

export const store = configureStore({
  reducer: {
    application,
    newstore,
    stores,
    categories,
    user,
    ads,
    evaluation,
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
