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
  isSignUpComplete: boolean;
  signInStep:
    | "CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE"
    | "CONTINUE_SIGN_IN_WITH_MFA_SELECTION"
    | "CONFIRM_SIGN_IN_WITH_SMS_CODE"
    | "CONFIRM_SIGN_IN_WITH_TOTP_CODE"
    | "CONTINUE_SIGN_IN_WITH_TOTP_SETUP"
    | "CONFIRM_SIGN_UP"
    | "RESET_PASSWORD"
    | "DONE"
    | "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED"
    | null;
  signUpStep: "DONE" | "CONFIRM_SIGN_UP" | "COMPLETE_AUTO_SIGN_IN" | null;
  error?: string | null;
}

const initialState: ApplicationState = {
  isLoaded: false,
  isLoading: false,
  isLogged: false,
  isSignUpComplete: false,
  userId: null,
  signInStep: null,
  signUpStep: null,
  error: null,
};

export const loadLoggedUser = createAsyncThunk(
  "application/loadLoggedUser",
  async () => {
    const user = await getCurrentUser();
    if (user) {
      return { isLogged: true, userId: user.username };
    }
    return { isLogged: false, userId: null };
  }
);

export const signInUser = createAsyncThunk(
  "application/signInUser",
  async ({ email, password }: { email: string; password: string }) => {
    const result = await signIn({ username: email, password });
    return result;
  }
);

export const signUpUser = createAsyncThunk(
  "application/signUpUser",
  async ({ password, email }: { password: string; email: string }) => {
    const result = await signUp({
      username: email,
      password: password,
    });
    return result;
  }
);

export const signOutUser = createAsyncThunk(
  "application/signOutUser",
  async () => {
    const result = await signOut();
    return result;
  }
);

export const confirmSignUpUser = createAsyncThunk(
  "application/confirmSignUpUser",
  async ({ code, email }: { code: string; email: string }) => {
    const confirmSignUpResponse = await confirmSignUp({
      username: email,
      confirmationCode: code,
    });
    console.log(confirmSignUpResponse);
    return confirmSignUpResponse;
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
        console.error(action.error.message);
        state.isLogged = false;
      })

      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLogged = action.payload.isSignedIn;
        state.signInStep = action.payload.nextStep.signInStep;
      })
      .addCase(signInUser.rejected, (state, action) => {
        console.error(action.error.message);
        state.error = action.error.message;
      })

      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isSignUpComplete = action.payload.isSignUpComplete;
        state.userId = action.payload.userId;
        state.signUpStep = action.payload.nextStep.signUpStep;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        console.error(action.error.message);
        state.error = action.error.message;
      })

      .addCase(confirmSignUpUser.fulfilled, (state, action) => {
        state.isSignUpComplete = action.payload.isSignUpComplete;
        state.userId = action.payload.userId;
        state.signUpStep = action.payload.nextStep.signUpStep;
      })
      .addCase(confirmSignUpUser.rejected, (state, action) => {
        console.error(action.error.message);
        state.error = action.error.message;
      })

      .addCase(signOutUser.fulfilled, (state, action) => {
        state.isLogged = false;
      })
      .addCase(signOutUser.rejected, (state, action) => {
        console.error(action.error.message);
        state.error = action.error.message;
      });
  },
  reducers: {
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { setLoaded } = applicationSlice.actions;

export default applicationSlice.reducer;
