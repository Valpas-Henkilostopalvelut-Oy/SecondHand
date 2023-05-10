import { createSlice } from "@reduxjs/toolkit";

interface ApplicationState {
  isDarkMode: boolean;
  isDrawerOpen: boolean;
  isEmpty: boolean;
  isAdmin: boolean;
  isAuth: boolean;
}

export const applicationSlice = createSlice({
  name: "application",
  initialState: {
    isDarkMode: false,
    isDrawerOpen: false,
    isEmpty: true,
    isAdmin: false,
    isAuth: false,
  },
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
    toggleAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    toggleAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const {
  toggleDarkMode,
  toggleDrawer,
  toggleEmpty,
  toggleAdmin,
  toggleAuth,
} = applicationSlice.actions;

export default applicationSlice.reducer;
