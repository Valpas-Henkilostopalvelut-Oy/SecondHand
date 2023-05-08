import React from "react";
import { Grid, Button } from "@mui/material";
import { DataStore, Storage } from "aws-amplify";
import { Store } from "../../../../../models";
import type { valuesProps, ImageTypes } from "../types";

type Createprops = {
  values: valuesProps;
  onClear: () => void;
  isAdmin: boolean;
};

const onUploadImage = async (props: ImageTypes) => {
  const { identify, file } = props;
  const { key } = await Storage.put(`${identify.id}-${identify.key}`, file, {
    contentType: file.type,
  });
  return {
    id: identify.id,
    key,
  };
};

const onSubmit = async (values: valuesProps, isAdmin: boolean) => {
  const { imgs } = values;

  if (!imgs) return;

  const imgKeys = await Promise.all(
    imgs.map(async (img) => {
      if (!img) return null;
      const { id, key } = await onUploadImage(img);
      return {
        url: await Storage.get(key),
        identify: { id, key },
      };
    })
  );

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
      imgs: imgKeys,
    })
  );
};

const Create = (props: Createprops) => {
  const { values, onClear, isAdmin } = props;

  const handleClick = async () => await onSubmit(values, isAdmin).then(onClear);

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
