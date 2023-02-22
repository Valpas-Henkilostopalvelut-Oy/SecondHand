import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Navigation } from "./services/navigation";
import { Navbar } from "./components/Navbar";

const App = () => (
  <Box>
    <CssBaseline />
    <Navbar />
    <Container sx={{ mt: 4 }}>
      <Navigation />
    </Container>
  </Box>
);

export default App;
