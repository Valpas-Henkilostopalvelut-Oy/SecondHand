import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  search: string;
  area: string | null;
  category: string[] | null;
  city: string | null;
}

const initialState: SearchState = {
  search: "",
  area: null,
  category: null,
  city: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setArea: (state, action: PayloadAction<string | null>) => {
      state.area = action.payload;
    },
    setCategory: (state, action: PayloadAction<string[] | null>) => {
      state.category = action.payload;
    },
    setCity: (state, action: PayloadAction<string | null>) => {
      state.city = action.payload;
    },
    resetSearch: (state) => {
      state.search = "";
      state.area = null;
      state.category = null;
      state.city = null;
    },
  },
});

export const { setSearch, setArea, setCategory, setCity, resetSearch } =
  searchSlice.actions;
export default searchSlice.reducer;
