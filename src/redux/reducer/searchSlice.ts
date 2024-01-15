import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { SearchQuery, SearchState } from "../../types/search";

// Define a type for the slice state

// Define the initial state using that type
export const initialState: SearchState = {
  result: null,
  isSearching: false,
  searchQuery: {
    search: "",
    openOn: 0,
    type: null,
    category: null,
    city: null,
    orderBy: null,
    adminName: null,
  },
  sellectedRegion: null,
  sellectedType: null
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    selectType: (state, action: PayloadAction<string>) => {
      
    },
    search: (state, action: PayloadAction<SearchQuery>) => {
      state.searchQuery = action.payload;
    },
    setOpen: (state, action: PayloadAction<number>) => {
      state.searchQuery.openOn = action.payload;
    },
    onUpdate: (state, action: PayloadAction<SearchState>) => {
      state.searchQuery = action.payload.searchQuery;
    },
    reset: (state) => {
      state.searchQuery = initialState.searchQuery;
    },
  },
});

export const { onUpdate, setOpen, reset, search } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSearch = (state: RootState) => state.business.search;

export default searchSlice.reducer;
