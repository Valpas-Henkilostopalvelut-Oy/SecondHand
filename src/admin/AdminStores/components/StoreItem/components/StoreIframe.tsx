import React from "react";
import type { LazyStore } from "../../../../../models";
import { Typography, Box, styled } from "@mui/material";

const CustomIframe = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: "100%",
  border: "none",
  borderRadius: "10px",
  boxShadow: theme.shadows[2],
}));

const StoreIframe = (props: LazyStore) => {
  const { location } = props;
  const iframe = location?.iframe;
  if (!iframe) return null;

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <CustomIframe src={iframe} />
    </Box>
  );
};

export default StoreIframe;
