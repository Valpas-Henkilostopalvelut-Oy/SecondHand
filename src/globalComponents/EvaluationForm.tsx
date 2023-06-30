import React from "react";
import { Box, type BoxProps, TextField, Button, Grid } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import ImageComponent from "./ImageComponent";

interface EvaluationFormProps {
  name: string;
  email: string;
  phone: string;
  categoria: string;
  type: string;
  description: string;
  images: File[];
}

const validationSchema = yup.object({
  name: yup.string().required("Nimi on pakollinen"),
  email: yup
    .string()
    .email("Sähköposti on väärin")
    .required("Sähköposti on pakollinen"),
  phone: yup
    .string()
    .min(8, "Puhelinnumero on väärin")
    .matches(/^[0-9]+$/, "Puhelinnumero on väärin")
    .required("Puhelinnumero on pakollinen"),
  description: yup.string().required("Kuvaus on pakollinen"),
  images: yup
    .array()
    .min(1, "Kuvat on pakollinen")
    .required("Kuvat on pakollinen")
    .max(5, "Kuvia voi olla maksimissaan 5"),
  categoria: yup.string().required("Kategoria on pakollinen"),
  type: yup.string().required("Tyyppi on pakollinen"),
});

const EvaluationForm = ({ box }: { box?: BoxProps }) => {
  const { isAdmin } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <Box {...box}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          description: "",
          categoria: "",
          type: "",
          images: {} as FileList,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          errors,
          isValid,
          dirty,
          touched,
          isSubmitting,
        }) => (
          <Box
            component={"form"}
            sx={{ padding: "1em" }}
            onSubmit={handleSubmit}
          >
            <TextField
              fullWidth
              label="Nimi"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
              sx={{ marginBottom: "1em" }}
            />
            <TextField
              fullWidth
              label="Sähköposti"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{ marginBottom: "1em" }}
            />
            <TextField
              fullWidth
              label="Puhelinnumero"
              name="phone"
              type="tel"
              placeholder="0401234567"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && !!errors.phone}
              helperText={touched.phone && errors.phone}
              sx={{ marginBottom: "1em" }}
            />
            <TextField
              fullWidth
              label="Kuvaus"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description && !!errors.description}
              helperText={touched.description && errors.description}
              sx={{ marginBottom: "1em" }}
            />

            <TextField
              fullWidth
              label="Kategoria"
              name="categoria"
              value={values.categoria}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.categoria && !!errors.categoria}
              helperText={touched.categoria && errors.categoria}
              sx={{ marginBottom: "1em" }}
            />
            <TextField
              fullWidth
              label="Tyyppi"
              name="type"
              value={values.type}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.type && !!errors.type}
              helperText={touched.type && errors.type}
              sx={{ marginBottom: "1em" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1em",
              }}
            >
              <Grid container spacing={2}>
                {values.images.length > 0 &&
                  Array.from(values.images).map((image, index) => {
                    const url = URL.createObjectURL(image);
                    return (
                      <Grid item xs={3} key={index}>
                        <ImageComponent id={image.name} fileUrl={url} />
                        <Button
                          sx={{ marginTop: "1em" }}
                          variant="contained"
                          color="error"
                        >
                          Poista
                        </Button>
                      </Grid>
                    );
                  })}
              </Grid>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
                multiple
                type="file"
                name="images"
                onChange={(e) => {
                  if (e.currentTarget.files)
                    setFieldValue("images", e.currentTarget.files);
                }}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  color={errors.images ? "error" : "primary"}
                >
                  Upload
                </Button>
              </label>
            </Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting || !isValid || !dirty}
            >
              Submit
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default EvaluationForm;
