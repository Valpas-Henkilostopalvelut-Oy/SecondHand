import React from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { login } from "../app/reducer/user";
import { useAppDispatch } from "../app/hooks";
import { NavigationButton } from "../globalComponents/CustomButtons";

interface FormValues {
  email: string;
  password: string;
}

const values: FormValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SigninForm = () => {
  const dispatch = useAppDispatch();
  const onSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    const { email, password } = values;
    dispatch(login({ email, password }));
    setSubmitting(false);
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
          isValid,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              id="email"
              name="email"
              label="Sähköposti"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              margin="normal"
              fullWidth
              disabled={isSubmitting}
            />
            <TextField
              id="password"
              name="password"
              label="Salasana"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              margin="normal"
              fullWidth
              disabled={isSubmitting}
            />
            <Box mt={2} />
            <Typography variant="body2" gutterBottom>
              Eikö sinulla ole tunnuksia? Luo tunnukset{" "}
              <NavigationButton to="/signup" sx={{ color: "primary.main" }}>
                tästä
              </NavigationButton>
            </Typography>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting || !isValid || !dirty}
              fullWidth
            >
              Kirjaudu sisään
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

const Signin = () => (
  <Container maxWidth="xs">
    <Typography variant="h4" component="h1" gutterBottom>
      Kirjaudu sisään
    </Typography>
    <SigninForm />
  </Container>
);

export default Signin;
