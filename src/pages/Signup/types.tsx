import type { Dispatch, SetStateAction } from "react";

export type ValueSignUpForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export interface SignupFormProps {
  setEmail: Dispatch<SetStateAction<string>>;
  setConfirm: Dispatch<SetStateAction<boolean>>;
}

export interface HandleSignupProps {
  email: string;
  password: string;
  setConfirm: Dispatch<SetStateAction<boolean>>;
}
