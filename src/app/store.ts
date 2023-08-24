import type { ThunkAction, Action } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import application from "./reducer/application";
import stores from "./reducer/stores";
import categories from "./reducer/categories";
import user from "./reducer/user";
import ads from "./reducer/ads";
import evaluation from "./reducer/evaluation";
import opentimes from "./reducer/opentimes";

export const store = configureStore({
  reducer: {
    application,
    stores,
    categories,
    user,
    ads,
    evaluation,
    opentimes,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
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
