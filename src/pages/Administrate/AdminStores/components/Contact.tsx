import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { addContact } from "../redux/newstore";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email("Sähköposti on väärässä muodossa"),
  website: yup.string().url("URL on väärässä muodossa"),
});

const addHttpsToUrl = (url: string) => {
  if (!url) return null;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  return url;
};

const Contact = () => {
  const values = useAppSelector((state) => state.newstore).contacts;
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      website: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") dispatch(addContact({ ...values, email: value }));
    if (name === "phone") dispatch(addContact({ ...values, phone: value }));
    if (name === "website")
      dispatch(addContact({ ...values, website: addHttpsToUrl(value) }));
    formik.handleChange(e);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Yhteystiedot</Typography>
      </Grid>
      <Grid item sm={4} xs={12}>
        <TextField
          name="email"
          label="Sähköposti"
          variant="outlined"
          fullWidth
          type="email"
          value={formik.values.email}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Grid>
      <Grid item sm={4} xs={12}>
        <TextField
          name="phone"
          label="Puhelinnumero"
          variant="outlined"
          fullWidth
          type="tel"
          value={formik.values.phone}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
      </Grid>
      <Grid item sm={4} xs={12}>
        <TextField
          name="website"
          label="Nettisivu"
          variant="outlined"
          fullWidth
          value={formik.values.website}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.website && Boolean(formik.errors.website)}
          helperText={formik.touched.website && formik.errors.website}
        />
      </Grid>
    </Grid>
  );
};

export default Contact;
