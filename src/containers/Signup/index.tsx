import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import type { ValueSignUpForm } from "./types";

const values = {
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

const handleSignup = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:2882/signup", {
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

const SignupForm = () => {
  const onSubmit = (
    values: ValueSignUpForm,
    actions: FormikHelpers<ValueSignUpForm>
  ) => {
    const { email, password } = values;
    handleSignup(email, password);
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
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              onChange={handleChange}
              type="text"
              value={values.email}
              variant="outlined"
              onBlur={handleBlur}
              error={Boolean(errors.email && touched.email)}
              helperText={errors.email && touched.email && errors.email}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
              onBlur={handleBlur}
              error={Boolean(errors.password && touched.password)}
              helperText={
                errors.password && touched.password && errors.password
              }
            />
            <TextField
              fullWidth
              label="Confirm Password"
              margin="normal"
              name="confirmPassword"
              onChange={handleChange}
              type="password"
              value={values.confirmPassword}
              variant="outlined"
              onBlur={handleBlur}
              error={Boolean(errors.confirmPassword && touched.confirmPassword)}
              helperText={
                errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword
              }
            />
            <Box my={2}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                disabled={isSubmitting}
              >
                Sign up now
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

const Signup = () => (
  <Box>
    <Typography variant="h4" component="h1" gutterBottom>
      Sign up
    </Typography>
    <SignupForm />
  </Box>
);

export default Signup;
