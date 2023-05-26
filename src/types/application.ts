import type { Dispatch, SetStateAction } from "react";

export interface UserData {
  id: string;
  email: string;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  role: string[] | null | undefined;
}

export interface ErrorLoginProps {
  error: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<string>>;
}

export interface ErrorBoundaryProps {
  error: string | null | undefined;
  isError: boolean;
  clearError: () => void;
}
