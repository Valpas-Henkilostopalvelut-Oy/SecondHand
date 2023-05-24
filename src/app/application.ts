import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";

interface ApplicationState {
  isDarkMode: boolean;
  isDrawerOpen: boolean;
  isEmpty: boolean;
  isAdmin: boolean;
  isAuth: boolean;
  userID: string | null;
}

const initialState: ApplicationState = {
  isDarkMode: false,
  isDrawerOpen: false,
  isEmpty: true,
  isAdmin: false,
  isAuth: false,
  userID: null,
};

export const logout = createAsyncThunk("application/logout", async () => {
  await Auth.signOut();
});

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
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuth = false;
      state.isAdmin = false;
      state.userID = null;
    });
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
