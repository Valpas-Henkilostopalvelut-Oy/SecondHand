import { createSlice } from "@reduxjs/toolkit";

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

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    toggleEmpty: (state, action) => {
      state.isEmpty = action.payload;
    },
  },
});

export const { toggleEmpty } = applicationSlice.actions;
export default applicationSlice.reducer;
