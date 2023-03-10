import React, { useState, useEffect } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Navigation } from "./services/navigation";
import { Navbar } from "./components/Navbar";
import { AppContext } from "./services/customhooks";
import { Auth } from "aws-amplify";

const App = () => {
  const [auth, setAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const onLoad = async () => {
      try {
        await Auth.currentSession();
        setAuth(true);
        const user = await Auth.currentAuthenticatedUser();
        const groups =
          user.signInUserSession.accessToken.payload["cognito:groups"];
        if (groups && groups.includes("admin")) {
          setIsAdmin(true);
        }
      } catch (error) {
        if (error !== "No current user") {
          // eslint-disable-next-line autofix/no-console
          console.warn("error loading App: ", error);
        }
      }
    };

    onLoad();
  }, []);

  return (
    <Box>
      <CssBaseline />
      <Navbar auth={auth} isAdmin={isAdmin} />
      <Container sx={{ mt: 4 }}>
        <Navigation auth={auth} setAuth={setAuth} isAdmin={isAdmin} />
      </Container>
    </Box>
  );
};

export default App;
