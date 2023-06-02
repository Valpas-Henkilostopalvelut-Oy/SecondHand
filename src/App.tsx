import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Navigation } from "./services/navigation";
import Navbar from "./globalComponents/Navbar";
import loadingApp from "./services/loadingApp";
import type { ErrorLoginProps } from "./types/application";
import { ErrorLogin } from "./services/errorLib";
import awsmobile from "./aws-exports";
import { Amplify } from "aws-amplify";

Amplify.configure(awsmobile);

const Component = () => (
  <Box>
    <CssBaseline />
    <Navbar />
    <Container sx={{ mt: 4 }}>
      <Navigation />
    </Container>
    <ErrorLogin />
  </Box>
);

const App = loadingApp(Component);

export default App;
