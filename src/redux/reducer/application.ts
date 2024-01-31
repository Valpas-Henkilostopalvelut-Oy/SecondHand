import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ApplicationState {
  isLogged: boolean;
  isDark: boolean;
}

const initialState: ApplicationState = {
  isLogged: false,
  isDark: false,
};

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setDark: (state, action) => {
      state.isDark = action.payload;
    },
  },
});
