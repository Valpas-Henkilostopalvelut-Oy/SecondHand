import React, { useState, useEffect } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import type { NewStoreProps } from "../types";

const Editemail = (props: NewStoreProps) => {
  const { values, setValues } = props;
  const [email, setEmail] = useState("");

  const handleChange = (e: any) => setEmail(e.target.value);

  useEffect(() => {
    setValues({
      ...values,
      contact: { ...values.contact, email: email },
    });
  }, [email]);

  return (
    <Grid item sm={4}>
      <TextField
        label="Kirppiksen sähköposti"
        variant="outlined"
        fullWidth
        value={email}
        onChange={handleChange}
        helperText="Kirppiksen sähköposti"
      />
    </Grid>
  );
};

const Editphone = (props: NewStoreProps) => {
  const { values, setValues } = props;
  const [phone, setPhone] = useState("");

  const handleChange = (e: any) => setPhone(e.target.value);

  useEffect(() => {
    setValues({
      ...values,
      contact: { ...values.contact, phone: phone },
    });
  }, [phone]);

  return (
    <Grid item sm={4}>
      <TextField
        label="Kirppiksen puhelinnumero"
        variant="outlined"
        fullWidth
        value={phone}
        onChange={handleChange}
        helperText="Kirppiksen puhelinnumero"
      />
    </Grid>
  );
};

const Website = (props: NewStoreProps) => {
  const { values, setValues } = props;
  const [website, setWebsite] = useState("");

  const handleChange = (e: any) => setWebsite(e.target.value);

  useEffect(() => {
    setValues({
      ...values,
      contact: { ...values.contact, website: website },
    });
  }, [website]);

  return (
    <Grid item sm={4}>
      <TextField
        label="Kirppiksen nettisivu"
        variant="outlined"
        fullWidth
        value={website}
        onChange={handleChange}
        helperText="Kirppiksen nettisivu"
      />
    </Grid>
  );
};

const Contact = (props: NewStoreProps) => {
  const { values, setValues } = props;
  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <Typography variant="h6">Yhteystiedot</Typography>
      </Grid>
      <Editemail values={values} setValues={setValues} />
      <Editphone values={values} setValues={setValues} />
      <Website values={values} setValues={setValues} />
    </Grid>
  );
};

export default Contact;
