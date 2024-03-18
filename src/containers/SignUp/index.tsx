import React, { useState } from "react";
import { Button, TextField, Box, Container } from "@mui/material";
import { useFormik } from "formik";
import { signUpUser, confirmSignUpUser } from "../../redux/reducer/application";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const { signUpStep } = useAppSelector((state) => state.application);
  const signUpForm = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: async (values) => dispatch(signUpUser(values)),
  });

  const confirmationForm = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: async (values) => {
      dispatch(
        confirmSignUpUser({
          email: signUpForm.values.email,
          code: values.code,
        })
      );
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {signUpStep !== "CONFIRM_SIGN_UP" ? (
          <form onSubmit={signUpForm.handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="email"
              value={signUpForm.values.email}
              onChange={signUpForm.handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={signUpForm.values.password}
              onChange={signUpForm.handleChange}
            />
            <Button type="submit" fullWidth variant="contained">
              Sign Up
            </Button>
          </form>
        ) : (
          <form onSubmit={confirmationForm.handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="code"
              label="Confirmation Code"
              name="code"
              autoComplete="code"
              autoFocus
              value={confirmationForm.values.code}
              onChange={confirmationForm.handleChange}
            />
            <Button type="submit" fullWidth variant="contained">
              Confirm
            </Button>
          </form>
        )}
      </Box>
    </Container>
  );
};

export default SignUpForm;
