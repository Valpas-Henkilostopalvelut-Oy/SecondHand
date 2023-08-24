/* eslint-disable react/display-name */
import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useAppSelector } from "../../../app/hooks";

const loadingCategories = (Component: () => JSX.Element) => () => {
  const { isLoading } = useAppSelector((state) => state.categories);

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

  return <Component />;
};

export default loadingCategories;
