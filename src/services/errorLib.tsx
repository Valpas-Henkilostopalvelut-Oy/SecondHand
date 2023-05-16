import React from "react";
import { Alert, Snackbar } from "@mui/material";
import type { ErrorLoginProps, ErrorBoundaryProps } from "../types/application";

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

export const ErrorLogin = (props: ErrorLoginProps) => {
  const { error, open, setOpen } = props;
  const handleClose = () => setOpen("");

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
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
