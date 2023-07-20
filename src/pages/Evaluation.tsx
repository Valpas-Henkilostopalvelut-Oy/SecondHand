import React from "react";
import { Box, Typography, Container } from "@mui/material";
import EvaluationForm from "../globalComponents/EvaluationForm";

const Evaluation = () => (
  <Container maxWidth="md">
    <Box>
      <Typography variant="h4">Arviointi</Typography>
      <EvaluationForm />
    </Box>
  </Container>
);

export default Evaluation;
