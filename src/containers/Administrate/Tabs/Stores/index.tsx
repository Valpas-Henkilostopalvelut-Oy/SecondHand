import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { DataStore } from "aws-amplify";
import type { LazyCategories } from "../../../../models";
import { Store } from "../../../../models";
import NewKirppis from "./services/addnew";
import KirppisItem from "./services/kirppisitem";

const Kirppukset = (props: any) => {
  const { auth, isAdmin, isEmpty } = props;
  const [kirppukset, setKirppukset] = useState<LazyCategories[]>([]);

  useEffect(() => {
    const fetchKirppukset = async () => {
      const data = await DataStore.query(Store);
      setKirppukset(data);
    };

    fetchKirppukset();
  }, [isEmpty]);

  return (
    <Box>
      <Grid container spacing={2}>
        <NewKirppis {...props} />
      </Grid>

      {kirppukset.map((kirppis) => (
        <KirppisItem key={kirppis.id} {...kirppis} />
      ))}
    </Box>
  );
};

export default Kirppukset;
