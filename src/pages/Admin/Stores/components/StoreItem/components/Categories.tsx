import React from "react";
import type { LazyCategories } from "../../../../../../models";
import { Typography, Box } from "@mui/material";

const Category = ({ categories }: { categories: LazyCategories[] | null }) => {
  if (!categories) return null;

  return (
    <Box>
      {categories.map((category) => (
        <Typography key={category.id}>{category.name}</Typography>
      ))}
    </Box>
  );
};

export default Category;
