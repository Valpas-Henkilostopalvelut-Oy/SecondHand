/* eslint-disable react/display-name */
import React, { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { fetchStoresAsync } from "../redux/adminStores";

const withLoading = (WrappedComponent: () => JSX.Element | null) => () => {
  const isEmpty = useAppSelector((state) => state.application.isEmpty);
  const values = useAppSelector((state) => state.adminStoresSlice);
  const { isLoading, isError } = values;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStoresAsync());
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Something went wrong</h1>
      </Box>
    );
  }

  return <WrappedComponent />;
};

export default withLoading;
