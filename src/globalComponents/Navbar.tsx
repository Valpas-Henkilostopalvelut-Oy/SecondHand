import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import type { BoxProps } from "@mui/material";
import { Link } from "react-router-dom";
import { NavigationButton } from "./CustomButtons";
import Services from "./Service";
import MenuIcon from "@mui/icons-material/Menu";
import Profile from "./Profile";

const links = [
  {
    title: "Etusivu",
    path: "/",
  },
  {
    title: "Kirpputorit",
    path: "/stores",
  },
  {
    title: "Kaupat",
    path: "/stores/Kaupat",
  },
  {
    title: "Galleriat",
    path: "/stores/galleries",
  },
  {
    title: "Huutokaupat",
    path: "/stores/auctions",
  },
  {
    title: "Taphtumat",
    path: "/stores/tapahtumat",
  },
];

const MobileMenu = (props: BoxProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box {...props}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: 2 }}
      >
        {links.map((link) => (
          <MenuItem key={link.title} onClick={handleClose}>
            <Link to={link.path}>{link.title}</Link>
          </MenuItem>
        ))}
        <MenuItem>
          <Services />
        </MenuItem>
      </Menu>
    </Box>
  );
};

const DesktopMenu = (props: BoxProps) => (
  <Box {...props}>
    {links.map((link) => (
      <NavigationButton key={link.title} to={link.path}>
        {link.title}
      </NavigationButton>
    ))}
    <Services />
  </Box>
);

const Navbar = () => (
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
          <MobileMenu sx={{ display: { xs: "block", md: "none" } }} />
          <DesktopMenu sx={{ display: { xs: "none", md: "flex" } }} />
          <Profile />
        </Toolbar>
      </Container>
    </Box>
  </AppBar>
);

export default Navbar;
