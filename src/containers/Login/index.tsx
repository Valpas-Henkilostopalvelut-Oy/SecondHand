import React, { useState } from "react";
import { Button, TextField, Box, Container } from "@mui/material";
import { signIn } from "aws-amplify/auth";
import { useFormik } from "formik";

const SignInForm = () => {
  const loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const signInResponse = await signIn({
          username: values.username,
          password: values.password,
        });
        console.log(signInResponse);
        // Handle navigation or state update after successful sign-in
      } catch (error) {
        console.error("Error signing in:", error);
      }
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
        component="form"
        onSubmit={loginForm.handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={loginForm.values.username}
          onChange={loginForm.handleChange}
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
          value={loginForm.values.password}
          onChange={loginForm.handleChange}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          type="submit"
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default SignInForm;
