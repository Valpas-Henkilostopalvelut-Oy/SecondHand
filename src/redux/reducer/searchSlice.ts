import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { SearchState } from "../../types/search";

// Define a type for the slice state

// Define the initial state using that type
export const initialState: SearchState = {
  search: "",
  category: null,
  region: null,
  openOn: 0,
  subcategory: null,
  city: null,
  orderBy: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<number>) => {
      state.openOn = action.payload;
    },
    onUpdate: (state, action: PayloadAction<SearchState>) => {
      console.log("onUpdate", action.payload);
      state = { ...state, ...action.payload };
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { onUpdate, setOpen, reset } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSearch = (state: RootState) => state.search;

export default searchSlice.reducer;
