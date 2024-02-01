import React, { useState } from "react";
import { Button, TextField, Box, Container } from "@mui/material";
import { useFormik } from "formik";
import { signUpUser, confirmSignUpUser } from "../../redux/reducer/application";
import { useAppDispatch } from "../../redux/hooks";

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const [isConfirmation, setIsConfirmation] = useState(false);
  const signUpForm = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: async (values) => dispatch(signUpUser(values)),
  });

  const confirmationForm = useFormik({
    initialValues: {
      confirmationCode: "",
    },
    onSubmit: async (values) => {
      dispatch(
        confirmSignUpUser({
          email: signUpForm.values.email,
          code: values.confirmationCode,
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
        {!isConfirmation ? (
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
              id="confirmationCode"
              label="Confirmation Code"
              name="confirmationCode"
              autoComplete="confirmationCode"
              autoFocus
              value={confirmationForm.values.confirmationCode}
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
