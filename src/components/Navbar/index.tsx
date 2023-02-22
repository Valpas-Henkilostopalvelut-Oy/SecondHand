import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  styled,
  Grid,
} from "@mui/material";

const NavbarButton = styled(Button)({
  color: "black",
  fontSize: 18,
  fontWeight: 400,
  textTransform: "none",
  "&:hover": {
    color: "black",
  },
});

export const Navbar = () => (
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
          <NavbarButton>Kirpputorit</NavbarButton>
          <NavbarButton>Liikkeet</NavbarButton>
          <NavbarButton>Huutokaupat</NavbarButton>
        </Box>

        <Box>
          <NavbarButton>Kirjaudu</NavbarButton>
          <NavbarButton>Rekisteröidy</NavbarButton>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);
