import React from "react";
import { Box, AppBar, Toolbar, Typography, Container } from "@mui/material";
import { Auth, DataStore } from "aws-amplify";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavigationButton } from "./CustomButtons";
import Services from "./Service";

const onLogout = async (navigate: any) => {
  try {
    await Auth.signOut();
  } catch (error: any) {
    // eslint-disable-next-line autofix/no-console
    console.warn("error signing out: ", error);
  }
};

const Navbar = (props: any) => {
  const navigate = useNavigate();
  const handleLogout = () => onLogout(navigate);
  const auth = useSelector((state: any) => state.application.isAuth);

  return (
    <AppBar position="static" color="transparent">
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ p: "8px 6px", fontSize: 36 }}>
            Secondhand Suomi
          </Typography>
        </Toolbar>
      </Container>

      <Box sx={{ bgcolor: "#f5f5f5" }}>
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box>
              <NavigationButton to="/">Etusivu</NavigationButton>
              <NavigationButton to="/stores">Kirpputorit</NavigationButton>
              <NavigationButton to="/companies">Liikkeet</NavigationButton>
              <Services />
            </Box>

            <Box hidden={auth}>
              <NavigationButton to="/signin">Kirjaudu</NavigationButton>
              <NavigationButton to="/signup">Rekisteröidy</NavigationButton>
            </Box>

            <Box hidden={!auth}>
              <NavigationButton to="/admin">Hallinta</NavigationButton>
              <NavigationButton to="/" onClick={handleLogout}>
                Kirjaudu ulos
              </NavigationButton>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};

export default Navbar;
