import React from "react";
import { Box, Grid } from "@mui/material";
import type { StoresProps } from "./types";
import NewStore from "./components/NewStore";
import StoreItem from "./components/StoreItem";
import withLoading from "./components/withloading";

const Stores = (props: StoresProps) => {
  const { storelist } = props;
  return (
    <Box>
      <Grid container spacing={2}>
        <NewStore />
      </Grid>

      {!!storelist &&
        storelist.map((kirppis) => (
          <StoreItem key={kirppis.id} {...kirppis} />
        ))}
    </Box>
  );
};

const AdminStores = withLoading(Stores);

export default AdminStores;
