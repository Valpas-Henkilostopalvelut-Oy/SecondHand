import React from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import EvaluationForm from "../globalComponents/EvaluationForm";

const Evaluation = () => {
  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h4">Arviointi</Typography>
        <EvaluationForm />
      </Box>
    </Container>
  );
};

export default Evaluation;
