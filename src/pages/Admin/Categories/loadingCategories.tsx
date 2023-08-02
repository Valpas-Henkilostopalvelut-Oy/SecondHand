/* eslint-disable react/display-name */
import React, { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { fetchCategories } from "../../../app/reducer/categories";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

const loadingCategories = (Component: () => JSX.Element) => () => {
  const { isLoading } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
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

  return <Component />;
};

export default loadingCategories;