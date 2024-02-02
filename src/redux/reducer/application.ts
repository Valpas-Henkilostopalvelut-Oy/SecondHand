import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  signOut,
  signIn,
  signUp,
  confirmSignUp,
} from "aws-amplify/auth";

interface ApplicationState {
  isLogged: boolean;
  userId: string | null;
  isConfirmed: boolean;
  nextStep: any;
  error?: string | null;
}

const initialState: ApplicationState = {
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
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
);

export const signInUser = createAsyncThunk(
  "application/signInUser",
  async ({ username, password }: { username: string; password: string }) => {
    try {
      const user = await signIn({ username, password });
      return user;
      // Handle navigation or state update after successful sign-in
    } catch (error) {
      return error;
    }
  }
);

export const signUpUser = createAsyncThunk(
  "application/signUpUser",
  async ({ password, email }: { password: string; email: string }) => {
    try {
      const {
        isSignUpComplete,
        userId,
        nextStep: { signUpStep },
      } = await signUp({
        username: email,
        password: password,
      });
      return { isSignUpComplete, userId, signUpStep };
    } catch (error) {
      return error;
    }
  }
);

export const signOutUser = createAsyncThunk(
  "application/signOutUser",
  async () => {
    try {
      await signOut();
    } catch (error) {
      return error;
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
        state.isLogged = action.payload;
      })
      .addCase(loadLoggedUser.rejected, (state, action) => {
        state.isLogged = false;
      });

    builder.addCase(signInUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
  reducers: {
    setLogged: (state, action) => {
      state.isLogged = action.payload;
    },
  },
});

export const { setLogged } = applicationSlice.actions;

export default applicationSlice.reducer;
