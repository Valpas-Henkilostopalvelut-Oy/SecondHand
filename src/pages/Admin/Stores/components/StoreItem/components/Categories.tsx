import React from "react";
import type { LazyStore } from "../../../../../../models";
import { Typography, Box } from "@mui/material";

const Categories = (props: LazyStore) => {
  const { categories } = props;
  if (!categories) return null;

  return (
    <Box>
      <Typography>
        <b>Kategoriat</b>
      </Typography>
    </Box>
  );
};

export default Categories;