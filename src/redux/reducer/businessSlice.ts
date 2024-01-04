import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const businesses: BusinessShort[] = [
  {
    id: "1",
    name: "Business One",
    description: "Description of Business One",
    category: "Retail",
    image: "https://picsum.photos/320/200?random=1",
  },
  {
    id: "2",
    name: "Business Two",
    description: "Description of Business Two",
    category: "Technology",
    image: "https://picsum.photos/320/200?random=1",
  },
  // ... repeat for more items
  {
    id: "9",
    name: "Business Nine",
    description: "Description of Business Nine",
    category: "Food",
    image: "https://picsum.photos/320/200?random=1",
  },
  {
    id: "10",
    name: "Business Ten",
    description: "Description of Business Ten",
    category: "Food",
    image: "https://picsum.photos/320/200?random=1",
  },
];

export interface BusinessShort {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
}

// Define a type for the slice state
export interface BusinessState {
  businesses: BusinessShort[];
  isLoaded: boolean;
}

// Define the initial state using that type
export const initialState: BusinessState = {
  businesses: [],
  isLoaded: false,
};

export const fetchBusinesses = createAsyncThunk(
  "businesses/fetchBusinesses",
  async () => {
    return businesses;
  }
);

export const businessSlice = createSlice({
  name: "businesses",
  initialState,
  reducers: {
    setBusinesses: (state, action: PayloadAction<BusinessShort[]>) => {
      state.businesses = action.payload;
      state.isLoaded = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBusinesses.fulfilled, (state, action) => {
      state.businesses = action.payload;
      state.isLoaded = true;
    });
  },
});

export const { setBusinesses } = businessSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBusinesses = (state: RootState) => state.businesses;

export default businessSlice.reducer;
