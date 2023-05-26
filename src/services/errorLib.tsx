import React from "react";
import { Alert, Snackbar } from "@mui/material";
import type { ErrorLoginProps, ErrorBoundaryProps } from "../types/application";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { dismissError } from "../app/reducer/user";

export const onError = (error: Error) => {
  const message = error.toString();

  if (!(error instanceof Error) && message) {
    alert(message);
  }
};

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  const { error, isError, clearError } = props;
  if (!isError) return null;
  const handleClose = () => clearError();

  return (
    <Snackbar open={isError} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="error"
        sx={{ width: "100%" }}
        variant="filled"
      >
        {error}
      </Alert>
    </Snackbar>
  );
};

export const ErrorLogin = () => {
  const { isError, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(dismissError());
  return (
    <Snackbar open={isError} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="error"
        sx={{ width: "100%" }}
        variant="filled"
      >
        {error}
      </Alert>
    </Snackbar>
  );
};
