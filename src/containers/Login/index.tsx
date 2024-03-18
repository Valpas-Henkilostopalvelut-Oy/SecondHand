import React from "react";
import { Button, TextField, Box, Container } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { signInUser, confirmSignUpUser } from "../../redux/reducer/application";
import { useFormik } from "formik";

const SignInForm = () => {
  const dispatch = useAppDispatch();
  const { signInStep } = useAppSelector((state) => state.application);
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => dispatch(signInUser(values)),
  });

  const confirmationForm = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: async (values) => {
      dispatch(
        confirmSignUpUser({ code: values.code, email: loginForm.values.email })
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
        {signInStep !== "CONFIRM_SIGN_UP" ? (
          <form onSubmit={loginForm.handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Sähköposti"
              name="email"
              autoComplete="email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Salasana"
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
              Kirjaudu
            </Button>
          </form>
        ) : (
          <form onSubmit={confirmationForm.handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="code"
              label="Vahvistuskoodi"
              name="code"
              autoComplete="code"
              value={confirmationForm.values.code}
              onChange={confirmationForm.handleChange}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type="submit"
            >
              Vahvista
            </Button>
          </form>
        )}
      </Box>
    </Container>
  );
};

export default SignInForm;
