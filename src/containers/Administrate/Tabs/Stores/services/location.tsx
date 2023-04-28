import React, { useState, useEffect } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { AreaSelect, CitySelect } from "./areas";
import Driveto from "./driveto";
import Iframe from "./Iframe";

const Editaddress = (props: any) => {
  const { values, setValues } = props;
  const [address, setAddress] = useState("");

  const handleChange = (e: any) => setAddress(e.target.value);

  useEffect(() => {
    setValues({
      ...values,
      location: { ...values.location, address: address },
    });
  }, [address]);

  return (
    <Grid item sm={4}>
      <TextField
        label="Toimipaikan sijainti"
        variant="outlined"
        fullWidth
        value={address}
        onChange={handleChange}
        helperText="Toimipaikan sijainti"
      />
    </Grid>
  );
};

const Editzip = (props: any) => {
  const { values, setValues } = props;
  const [zip, setZip] = useState("");

  const handleChange = (e: any) => setZip(e.target.value);

  useEffect(() => {
    setValues({
      ...values,
      location: { ...values.location, zip: zip },
    });
  }, [zip]);

  return (
    <Grid item sm={4}>
      <TextField
        label="Postinumero"
        variant="outlined"
        fullWidth
        value={zip}
        onChange={handleChange}
        helperText="Postinumero"
      />
    </Grid>
  );
};

const Location = (props: any) => {
  const { values, setValues } = props;
  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <Typography variant="h6">Sijainti</Typography>
      </Grid>
      <Editaddress values={values} setValues={setValues} />
      <AreaSelect values={values} setValues={setValues} />
      <CitySelect values={values} setValues={setValues} />
      <Driveto values={values} setValues={setValues} />
      <Iframe values={values} setValues={setValues} />
    </Grid>
  );
};

export default Location;
