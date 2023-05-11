import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Navigation } from "./services/navigation";
import Navbar from "./globalComponents/Navbar";
import loadingApp from "./services/loadingApp";
import type { ErrorLoginProps } from "./types/application";
import { ErrorLogin } from "./services/errorLib";

const Component = (props: ErrorLoginProps) => {
  const { error, open, setOpen } = props;
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Navigation />
      </Container>
      <ErrorLogin error={error} open={open} setOpen={setOpen} />
    </Box>
  );
};

const App = loadingApp(Component);

export default App;
