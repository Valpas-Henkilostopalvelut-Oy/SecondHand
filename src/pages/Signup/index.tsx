import React from "react";
import { Container, Typography } from "@mui/material";
import SignupForm from "./services/SignupForm";
import ConfirmForm from "./services/ConfirmForm";
import { useAppSelector } from "../../app/hooks";

const Signup = () => {
  const { isConfirming } = useAppSelector((state) => state.user);
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" sx={{ mt: 4, mb: 4 }}>
        Signup
      </Typography>
      <ConfirmForm hidden={!isConfirming} />
      <SignupForm hidden={isConfirming} />
    </Container>
  );
};

export default Signup;
