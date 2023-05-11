import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { clearError, createNewStoreAsync } from "../redux/newstore";
import type { NewStoreProps } from "../types";

const NewStore = () => {
  const dispatch = useAppDispatch();
  const values = useAppSelector((state) => state.newstore);

  const handleSubmit = (
    values: NewStoreProps,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    dispatch(createNewStoreAsync(values));
    setSubmitting(false);
  };
  return (
    <Box>
      <Formik initialValues={values} onSubmit={handleSubmit}>
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          touched,
          isValid,
          errors,

          /* and other goodies */
        }) => (
          <Box onSubmit={handleSubmit} component={"form"} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Nimi"
              value={values.name || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Kuvaus"
              value={values.description || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
            />
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              Tallenna
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default NewStore;
