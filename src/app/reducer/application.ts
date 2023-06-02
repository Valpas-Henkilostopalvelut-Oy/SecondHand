import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Auth, DataStore } from "aws-amplify";

interface ApplicationState {
  isDarkMode: boolean;
  isDrawerOpen: boolean;
  isEmpty: boolean;
}

const initialState: ApplicationState = {
  isDarkMode: false,
  isDrawerOpen: false,
  isEmpty: true,
};

const loadDataStore = createAsyncThunk(
  "application/loadDataStore",
  async () => {
    await DataStore.start();
  }
);

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleDrawer: (state, action) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
    toggleEmpty: (state, action) => {
      state.isEmpty = action.payload;
    },
  },
});

export const { toggleDarkMode, toggleDrawer, toggleEmpty } =
  applicationSlice.actions;

export default applicationSlice.reducer;
