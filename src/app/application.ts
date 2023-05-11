import { createSlice } from "@reduxjs/toolkit";

interface ApplicationState {
  isDarkMode: boolean;
  isDrawerOpen: boolean;
  isEmpty: boolean;
  isAdmin: boolean;
  isAuth: boolean;
  userData:
    | {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: string;
      }
    | null
    | undefined;
}

export const applicationSlice = createSlice({
  name: "application",
  initialState: {
    isDarkMode: false,
    isDrawerOpen: false,
    isEmpty: true,
    isAdmin: false,
    isAuth: false,
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
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {
  toggleDarkMode,
  toggleDrawer,
  toggleEmpty,
  toggleAdmin,
  toggleAuth,
  setUserData,
} = applicationSlice.actions;

export default applicationSlice.reducer;
