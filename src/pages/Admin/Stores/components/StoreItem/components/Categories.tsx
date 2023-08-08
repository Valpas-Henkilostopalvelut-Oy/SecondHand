import React from "react";
import type { LazyStore } from "../../../../../../models";
import { Categories as Cats } from "../../../../../../models";
import { DataStore } from "aws-amplify";
import { Typography, Box } from "@mui/material";

const getCategories = async (store: LazyStore) => {
  const categories = await DataStore.query(Cats, (c) =>
    c.stores.store.id.eq(store.id)
  );
  return categories;
};

const Categories = (props: LazyStore) => {
  return (
    <Box>
      <Typography>
        <b>Kategoriat</b>
      </Typography>
      <Typography>cats</Typography>
    </Box>
  );
};

export default Categories;
