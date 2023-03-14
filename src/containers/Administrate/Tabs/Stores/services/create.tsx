import React from "react";
import { Grid, Button } from "@mui/material";
import { DataStore } from "aws-amplify";
import { Store } from "../../../../../models";

const onSubmit = async (values: any) => {
  await DataStore.save(
    new Store({
      name: values.name,
      description: values.description,
      categories: values.categories,
      services: [],
      clicked: "0",
      sellplaces: values.sellplaces,
      pricelist: [],
      embedmap: null,
      opentimes: [],
      contact: values.contact,
      location: values.location,
      imgs: [],
    })
  );
};

const Createnew = (props: any) => {
  const { values, setValues } = props;

  const handleClick = () => console.log(values);

  return (
    <Grid item sm={2}>
      <Button variant="contained" onClick={handleClick}>
        Luo uusi kirppis
      </Button>
    </Grid>
  );
};

export default Createnew;
