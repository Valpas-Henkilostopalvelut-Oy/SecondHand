import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setName, setDescription } from "../redux/newstore";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  name: yup.string().required("Nimi on pakollinen"),
  description: yup.string().required("Kuvaus on pakollinen"),
});

const Basic = () => {
  const values = useAppSelector((state) => state.newstore);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") dispatch(setName(value));
    if (name === "description") dispatch(setDescription(value));
    formik.handleChange(e);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Lisää toimipiste</Typography>
      </Grid>

      <Grid item sm={6} xs={12}>
        <TextField
          name="name"
          label="Nimi"
          variant="outlined"
          fullWidth
          value={values.name || ""}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </Grid>

      <Grid item sm={6} xs={12}>
        <TextField
          name="description"
          label="Kuvaus"
          variant="outlined"
          fullWidth
          value={values.description || ""}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
      </Grid>
    </Grid>
  );
};

export default Basic;
