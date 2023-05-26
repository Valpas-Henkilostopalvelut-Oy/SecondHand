import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";

interface userState {
  isAuth: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  isEmailVerified: boolean;
  isError: boolean;
  isConfirming: boolean;
  userID: string | null;
  userEmail: string | null;
  error: string | null | undefined;
}

const initialState: userState = {
  isAuth: false,
  isAdmin: false,
  isLoading: true,
  isEmailVerified: false,
  isError: false,
  isConfirming: false,
  userID: null,
  error: null,
  userEmail: null,
};

export const getAuth = createAsyncThunk("application/getAuth", async () => {
  await Auth.currentSession();
  const user = await Auth.currentAuthenticatedUser();
  return user;
});

export const logout = createAsyncThunk("application/logout", async () => {
  await Auth.signOut();
});

export const login = createAsyncThunk(
  "application/login",
  async ({ email, password }: { email: string; password: string }) => {
    const user = await Auth.signIn(email, password);
    return user;
  }
);

export const signup = createAsyncThunk(
  "application/signup",
  async ({ email, password }: { email: string; password: string }) => {
    const user = await Auth.signUp({
      username: email,
      password: password,
    });
    return {
      user,
      email,
    };
  }
);

export const verifyEmail = createAsyncThunk(
  "application/verifyEmail",
  async ({ email, code }: { email: string; code: string }) => {
    const user = await Auth.confirmSignUp(email, code);
    return user;
  }
);

export const resendCode = createAsyncThunk(
  "application/resendCode",
  async ({ username }: { username: string }) => {
    const user = await Auth.resendSignUp(username);
    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    dismissError: (state) => {
      state.isError = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.isError = true;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAuth.fulfilled, (state, action) => {
      const groups =
        action.payload.signInUserSession.idToken.payload["cognito:groups"] ||
        [];
      state.isLoading = false;
      state.isAdmin = groups.includes("admin") || false;
      state.isAuth = true;
      state.userID = action.payload.username;
      state.userEmail = action.payload.attributes.email;
      state.isEmailVerified = action.payload.attributes.email_verified;
    });
    builder.addCase(getAuth.rejected, (state, action) => {
      state.isLoading = false;
      if (action.error.message === "No current user") return;
      state.isError = true;
      state.error = action.error.message;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuth = false;
      state.isAdmin = false;
      state.userID = null;
      state.userEmail = null;
      state.isEmailVerified = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const groups =
        action.payload.signInUserSession.idToken.payload["cognito:groups"] ||
        [];
      state.isLoading = false;
      state.isAuth = true;
      state.isAdmin = groups.includes("admin") || false;
      state.userID = action.payload.username;
      state.userEmail = action.payload.attributes.email;
      state.isEmailVerified = action.payload.attributes.email_verified;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
    builder.addCase(verifyEmail.fulfilled, (state) => {
      state.isEmailVerified = true;
      state.isConfirming = false;
    });
    builder.addCase(verifyEmail.rejected, (state, action) => {
      state.isError = true;
      state.error = action.error.message;
    });
    builder.addCase(resendCode.fulfilled, (state) => {
      state.isEmailVerified = false;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.userEmail = action.payload.email;
      state.isConfirming = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export const { dismissError, setError } = userSlice.actions;
export default userSlice.reducer;
