import { ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import searchSlice from "./reducer/searchSlice";
import businessSlice from "./reducer/businessSlice";

const rootReducer = combineReducers({
  search: searchSlice,
  businesses: businessSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
