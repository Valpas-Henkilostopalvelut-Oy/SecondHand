import React from "react";
import { Button, TextField, Box, Container } from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import { signInUser } from "../../redux/reducer/application";
import { useFormik } from "formik";

const SignInForm = () => {
  const dispatch = useAppDispatch();
  const loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => dispatch(signInUser(values)),
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
