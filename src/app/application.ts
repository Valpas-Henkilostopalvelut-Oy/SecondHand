import { createSlice } from "@reduxjs/toolkit";

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
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
    toggleEmpty: (state) => {
      state.isEmpty = !state.isEmpty;
    },
    toggleAdmin: (state) => {
      state.isAdmin = !state.isAdmin;
    },
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
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
