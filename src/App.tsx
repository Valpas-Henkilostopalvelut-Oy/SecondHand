import React, { useState, useEffect } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Navigation } from "./services/navigation";
import { Navbar } from "./globalComponents/Navbar";
import { Auth, DataStore } from "aws-amplify";

const App = () => {
  const [auth, setAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setAuth(true);
        const user = await Auth.currentAuthenticatedUser();
        const groups =
          user.signInUserSession.accessToken.payload["cognito:groups"];
        if (groups && groups.includes("admin")) {
          setIsAdmin(true);
        }

        await DataStore.start();
      } catch (err) {
        setAuth(false);
      }
    };

    checkAuth();
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
