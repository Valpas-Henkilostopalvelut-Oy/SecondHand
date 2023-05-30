import React from "react";
import { Box, CircularProgress, type BoxProps } from "@mui/material";

const LoadingComponent = (props: BoxProps) => (
  <Box
    {...props}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70vh",
    }}
  >
    <CircularProgress />
  </Box>
);

export default LoadingComponent;
