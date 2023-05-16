import { createSlice } from "@reduxjs/toolkit";

interface ApplicationState {
  isDarkMode: boolean;
  isDrawerOpen: boolean;
  isEmpty: boolean;
  isAdmin: boolean;
  isAuth: boolean;
  userID: string | null;
}

export const applicationSlice = createSlice({
  name: "application",
  initialState: {
    isDarkMode: false,
    isDrawerOpen: false,
    isEmpty: true,
    isAdmin: false,
    isAuth: false,
    userID: null,
  } as ApplicationState,
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
    setUserID: (state, action) => {
      state.userID = action.payload;
    },
  },
});

export const {
  toggleDarkMode,
  toggleDrawer,
  toggleEmpty,
  toggleAdmin,
  toggleAuth,
  setUserID,
} = applicationSlice.actions;

export default applicationSlice.reducer;
