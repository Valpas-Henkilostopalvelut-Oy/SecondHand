import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { dismissError } from "../app/reducer/user";
import { clearError } from "../app/reducer/stores";
import { clearCreateError } from "../admin/AdminStores/redux/newstore";

export const onError = (error: Error) => {
  const message = error.toString();

  if (!(error instanceof Error) && message) {
    alert(message);
  }
};

export const ErrorCreateStore = () => {
  const { isError, error } = useAppSelector((state) => state.newstore);
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(clearCreateError());
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

export const ErrorStore = () => {
  const { isError, error } = useAppSelector((state) => state.stores);
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(clearError());
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
