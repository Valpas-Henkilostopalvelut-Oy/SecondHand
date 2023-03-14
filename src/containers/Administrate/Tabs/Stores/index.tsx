import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Collapse,
  Button,
} from "@mui/material";
import { DataStore, Hub } from "aws-amplify";
import { Store, Categories } from "../../../../models";
import NewKirppis from "./services/addnew";

const Kirppis = (props: any) => {
  return;
};

const handleAddKirpis = async (values: any) => {
  const { name, description } = values;
};

const Kirppukset = (props: any) => {
  const { auth, isAdmin } = props;
  const [kirppukset, setKirppukset] = useState([]);

  useEffect(() => {
    const fetchKirppukset = async () => {
      await DataStore.query(Store).then((data: any) => {
        setKirppukset(data);
        console.log(data);
      });
    };

    fetchKirppukset();

    console.log("qq");
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        <NewKirppis {...props} />
      </Grid>
    </Box>
  );
};

export default Kirppukset;
