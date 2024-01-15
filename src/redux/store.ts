import {
  ThunkAction,
  Action,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

import searchSlice from "./reducer/searchSlice";
import businessSlice from "./reducer/businessSlice";
import typeSlice from "./reducer/typeSlice";
import categoriesSlice from "./reducer/categoriesSlice";
import locationSlice from "./reducer/locationSlice";

const business = combineReducers({
  search: searchSlice,
  businesses: businessSlice,
});

export const store = configureStore({
  reducer: {
    business,
    typeSlice,
    categoriesSlice,
    locationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
