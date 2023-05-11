import React from "react";
import { Alert, Snackbar } from "@mui/material";
import type { ErrorLoginProps } from "../types/application";

export const onError = (error: Error) => {
  const message = error.toString();

  if (!(error instanceof Error) && message) {
    alert(message);
  }
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
