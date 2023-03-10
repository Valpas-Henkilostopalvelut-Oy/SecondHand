import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  styled,
} from "@mui/material";
import { Auth } from "aws-amplify";

const handleLogout = async () => {
  try {
    await Auth.signOut();
    window.location.reload();
  } catch (error: any) {
    // eslint-disable-next-line autofix/no-console
    console.warn("error signing out: ", error);
  }
};

const NavbarButton = styled(Button)(({ theme }) => ({
  color: "#000000",
  fontSize: 18,
  fontWeight: 600,
  textTransform: "none",
  "&:hover": {
    color: "#000000",
  },
}));

export const Navbar = (props: any) => {
  const { auth, isAdmin } = props;

  return (
    <AppBar position="static" color="transparent">
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ p: "8px 6px", fontSize: 36 }}>
            Secondhand Suomi
          </Typography>
        </Toolbar>

        <Toolbar
          sx={{ justifyContent: "space-between", backgroundColor: "#FBFBFB" }}
        >
          <Box>
            <NavbarButton href="/">Etusivu</NavbarButton>
            <NavbarButton>Kirpputorit</NavbarButton>
            <NavbarButton>Liikkeet</NavbarButton>
            <NavbarButton>Huutokaupat</NavbarButton>
          </Box>

          <Box hidden={auth}>
            <NavbarButton href="/signin">Kirjaudu</NavbarButton>
            <NavbarButton href="/signup">Rekisteröidy</NavbarButton>
          </Box>

          <Box hidden={!auth}>
            <NavbarButton href="/admin">Hallinta</NavbarButton>
            <NavbarButton onClick={handleLogout}>Kirjaudu ulos</NavbarButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
