export interface userState {
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
