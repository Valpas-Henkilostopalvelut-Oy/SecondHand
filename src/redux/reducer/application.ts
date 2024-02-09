import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  signOut,
  signIn,
  signUp,
  confirmSignUp,
} from "aws-amplify/auth";
import { DataStore } from "aws-amplify/datastore";

interface ApplicationState {
  isLoaded: boolean;
  isLoading: boolean;
  isLogged: boolean;
  userId?: string | null;
  isConfirmed: boolean;
  nextStep: any;
  error?: string | null;
}

const initialState: ApplicationState = {
  isLoaded: false,
  isLoading: false,
  isLogged: false,
  isConfirmed: false,
  userId: null,
  nextStep: null,
  error: null,
};

export const loadLoggedUser = createAsyncThunk(
  "application/loadLoggedUser",
  async () => {
    try {
      const user = await getCurrentUser();
      if (user) {
        return { isLogged: true, userId: user.username };
      }
      return { isLogged: false, userId: null };
    } catch (error) {
      throw new Error("Error loading logged user:" + error);
    }
  }
);

export const signInUser = createAsyncThunk(
  "application/signInUser",
  async ({ username, password }: { username: string; password: string }) => {
    try {
      return await signIn({ username, password });
    } catch (error) {
      throw new Error("Error signing in:" + error);
    }
  }
);

export const signUpUser = createAsyncThunk(
  "application/signUpUser",
  async ({ password, email }: { password: string; email: string }) => {
    try {
      return await signUp({
        username: email,
        password: password,
      });
    } catch (error) {
      throw new Error("Error signing up:" + error);
    }
  }
);

export const signOutUser = createAsyncThunk(
  "application/signOutUser",
  async () => {
    try {
      await signOut();
      await DataStore.clear();
      return true;
    } catch (error) {
      throw new Error("Error signing out:" + error);
    }
  }
);

export const confirmSignUpUser = createAsyncThunk(
  "application/confirmSignUpUser",
  async ({ code, email }: { code: string; email: string }) => {
    try {
      const confirmSignUpResponse = await confirmSignUp({
        username: email,
        confirmationCode: code,
      });
      console.log(confirmSignUpResponse);
      // Handle navigation or state update after successful confirmation
    } catch (error) {
      return error;
    }
  }
);

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadLoggedUser.fulfilled, (state, action) => {
        state.isLogged = action.payload.isLogged;
        state.userId = action.payload.userId;
      })
      .addCase(loadLoggedUser.rejected, (state, action) => {
        state.isLogged = false;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLogged = true;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isConfirmed = action.payload.isSignUpComplete;
        state.userId = action.payload.userId;
        state.nextStep = action.payload.nextStep.signUpStep;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
  reducers: {
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    }
  },
});

export const { setLoaded } = applicationSlice.actions;

export default applicationSlice.reducer;
