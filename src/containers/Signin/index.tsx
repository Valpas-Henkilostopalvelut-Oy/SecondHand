import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import type { ValueSignInForm } from "./types";

const values = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const handleSignin = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:2882/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    // eslint-disable-next-line autofix/no-console
    console.log(data);
  } catch (error) {
    // eslint-disable-next-line autofix/no-console
    console.warn(error);
  }
};

const SigninForm = () => {
  const onSubmit = async (
    values: ValueSignInForm,
    { setSubmitting }: FormikHelpers<ValueSignInForm>
  ) => {
    const { email, password } = values;
    
    await handleSignin(email, password)
      .then(() => setSubmitting(false))
      .catch(() => setSubmitting(false));
  };

  return (
    <Box>
      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              id="email"
              name="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              margin="normal"
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              margin="normal"
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Sign in
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

const Signin = () => (
  <Box>
    <Typography variant="h4" component="h1" gutterBottom>
      Sign in
    </Typography>
    <SigninForm />
  </Box>
);

export default Signin;
