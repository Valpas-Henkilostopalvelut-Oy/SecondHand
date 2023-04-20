import React, { useState, useEffect } from "react";
import { Grid, TextField, Typography } from "@mui/material";

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
        label="Kirppiksen osoite"
        variant="outlined"
        fullWidth
        value={address}
        onChange={handleChange}
        helperText="Kirppiksen osoite"
      />
    </Grid>
  );
};

const Editcity = (props: any) => {
  const { values, setValues } = props;
  const [city, setCity] = useState("");

  const handleChange = (e: any) => setCity(e.target.value);

  useEffect(() => {
    setValues({
      ...values,
      location: { ...values.location, city: city },
    });
  }, [city]);

  return (
    <Grid item sm={4}>
      <TextField
        label="Kirppiksen kaupunki"
        variant="outlined"
        fullWidth
        value={city}
        onChange={handleChange}
        helperText="Kirppiksen kaupunki"
      />
    </Grid>
  );
};

const Editarea = (props: any) => {
  const { values, setValues } = props;
  const [area, setArea] = useState("");

  const handleChange = (e: any) => setArea(e.target.value);

  useEffect(() => {
    setValues({
      ...values,
      location: { ...values.location, area: area },
    });
  }, [area]);

  return (
    <Grid item sm={4}>
      <TextField
        label="Kirppiksen alue"
        variant="outlined"
        fullWidth
        value={area}
        onChange={handleChange}
        helperText="Kirppiksen alue"
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
        label="Kirppiksen postinumero"
        variant="outlined"
        fullWidth
        value={zip}
        onChange={handleChange}
        helperText="Kirppiksen postinumero"
      />
    </Grid>
  );
};

const Editcountry = (props: any) => {
  const { values, setValues } = props;
  const [country, setCountry] = useState("");

  const handleChange = (e: any) => setCountry(e.target.value);

  useEffect(() => {
    setValues({
      ...values,
      location: { ...values.location, country: country },
    });
  }, [country]);

  return (
    <Grid item sm={4}>
      <TextField
        label="Kirppiksen maa"
        variant="outlined"
        fullWidth
        value={country}
        onChange={handleChange}
        helperText="Kirppiksen maa"
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
      <Editcity values={values} setValues={setValues} />
      <Editzip values={values} setValues={setValues} />
      <Editarea values={values} setValues={setValues} />
      <Editcountry values={values} setValues={setValues} />
    </Grid>
  );
};

export default Location;
