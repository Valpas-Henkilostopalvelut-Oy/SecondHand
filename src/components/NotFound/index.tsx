import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const NotFound = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <Typography variant="h1" sx={{ fontSize: 100 }}>
      404
    </Typography>
    <Typography variant="h2" sx={{ fontSize: 36 }}>
      Sivua ei löytynyt
    </Typography>
    <Button
      variant="contained"
      sx={{ mt: 4 }}
      component={Link}
      to="/"
      color="primary"
    >
      Takaisin etusivulle
    </Button>
  </Box>
);

export default NotFound;
