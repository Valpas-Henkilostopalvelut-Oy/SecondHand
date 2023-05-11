import type { Dispatch, SetStateAction } from "react";

export interface UserData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface ErrorLoginProps {
  error: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<string>>;
}
