import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import type { ValueSignInForm } from "./types";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

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

const handleSignin = async (
  email: string,
  password: string,
  navigate: any,
  setAuth: any,
  setMessages: any
) => {
  try {
    await Auth.signIn(email, password).then((user) => {
      if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        setAuth(true);
        navigate("/new-password");
      } else {
        setAuth(user);
        navigate("/");
      }
    });
  } catch (error: any) {
    // eslint-disable-next-line autofix/no-console
    console.warn("error signing in: ", error);
    setMessages(error.message);
  }
};

const SigninForm = (props: any) => {
  const navigate = useNavigate();
  const { setAuth, auth } = props;
  const [messages, setMessages] = useState("");

  const onSubmit = async (values: ValueSignInForm) => {
    const { email, password } = values;
    await handleSignin(email, password, navigate, setAuth, setMessages);
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
              label="Sähköposti"
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
              label="Salasana"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              margin="normal"
              fullWidth
            />
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="error">
                {messages}
              </Typography>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Kirjaudu sisään
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

const Signin = (props: any) => (
  <Box>
    <Typography variant="h4" component="h1" gutterBottom>
      Kirjaudu sisään
    </Typography>
    <SigninForm {...props} />
  </Box>
);

export default Signin;
