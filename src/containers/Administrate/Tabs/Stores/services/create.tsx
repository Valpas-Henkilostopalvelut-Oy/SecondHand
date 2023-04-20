import React from "react";
import { Grid, Button } from "@mui/material";
import { DataStore } from "aws-amplify";
import { Store } from "../../../../../models";
import type { LazyStore } from "../../../../../models";
import type { valuesProps } from "../types";

type Createprops = {
  values: valuesProps;
  onClear: () => void;
  isAdmin: boolean;
};

const onSubmit = async (values: valuesProps, isAdmin: boolean) => {
  await DataStore.save(
    new Store({
      name: values.name,
      description: values.description,
      isConfirmed: isAdmin,
      categories: values.categories,
      services: [],
      clicked: "0",
      sellplaces: values.sellplaces,
      pricelist: [],
      embedmap: null,
      opentimes: values.opentimes,
      contact: values.contact,
      location: values.location,
      imgs: [],
    })
  );
};

const Create = (props: Createprops) => {
  const { values, onClear, isAdmin } = props;

  const handleClick = async () =>
    await onSubmit(values, isAdmin).then(onClear);

  return (
    <Grid container spacing={2}>
      <Grid item sm={10} />
      <Grid item sm={2}>
        <Button variant="contained" onClick={handleClick}>
          Luo uusi kirppis
        </Button>
      </Grid>
    </Grid>
  );
};

export default Create;
