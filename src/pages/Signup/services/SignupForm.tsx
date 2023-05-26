import React from "react";
import { Box, type BoxProps, Button, TextField } from "@mui/material";
import { Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import type { ValueSignUpForm } from "../types";
import { useAppDispatch } from "../../../app/hooks";
import { signup } from "../../../app/reducer/user";

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

const SignupForm = (props: BoxProps) => {
  const dispatch = useAppDispatch();
  const onSubmit = (
    values: ValueSignUpForm,
    actions: FormikHelpers<ValueSignUpForm>
  ) => {
    const { email, password } = values;
    const { setSubmitting, resetForm } = actions;
    setTimeout(() => {
      dispatch(signup({ email, password }));
      setSubmitting(false);
      resetForm();
    }, 500);
  };

  return (
    <Box {...props}>
      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Sähköposti"
              margin="normal"
              name="email"
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
              onBlur={handleBlur}
              error={Boolean(errors.email && touched.email)}
              helperText={errors.email && touched.email && errors.email}
              disabled={isSubmitting}
            />
            <TextField
              fullWidth
              label="Salasana"
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
              disabled={isSubmitting}
            />
            <TextField
              fullWidth
              label="Vahvista salasana"
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
              disabled={isSubmitting}
            />
            <Box my={2}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                disabled={isSubmitting || !isValid || !dirty}
              >
                Rekisteröidy
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default SignupForm;
