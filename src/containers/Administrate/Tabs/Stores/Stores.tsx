import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { DataStore } from "aws-amplify";
import type { LazyCategories } from "../../../../models";
import { Store as StoreModel } from "../../../../models";
import NewStore from "./services/NewStore";
import KirppisItem from "./services/kirppisitem";

const Stores = (props: any) => {
  const { isEmpty } = props;
  const [kirppukset, setKirppukset] = useState<LazyCategories[]>([]);

  useEffect(() => {
    const fetchKirppukset = async () => {
      const data = await DataStore.query(StoreModel);
      setKirppukset(data);
    };

    fetchKirppukset();
  }, [isEmpty]);

  return (
    <Box>
      <Grid container spacing={2}>
        <NewStore {...props} />
      </Grid>

      {kirppukset.map((kirppis) => (
        <KirppisItem key={kirppis.id} {...kirppis} />
      ))}
    </Box>
  );
};

export default Stores;
