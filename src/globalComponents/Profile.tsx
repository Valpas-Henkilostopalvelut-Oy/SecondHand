import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, IconButton } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { NavigationButton } from "./CustomButtons";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import LoginIcon from "@mui/icons-material/Login";
import { logout } from "../app/application";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const links = [
  {
    title: "Hallinta",
    path: "/admin",
  },
  {
    title: "Kategoriat",
    path: "/categories",
  },
];

const Profile = (props: BoxProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { isAuth, isAdmin } = useAppSelector((state) => state.application);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  console.log("isAdmin", isAdmin);

  if (!isAuth) {
    return (
      <Box {...props}>
        <NavigationButton to="/signin">
          <LoginIcon />
        </NavigationButton>
      </Box>
    );
  }

  return (
    <Box {...props}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {links.map((link) => (
          <MenuItem key={link.title} onClick={handleClose}>
            <NavigationButton to={link.path}>{link.title}</NavigationButton>
          </MenuItem>
        ))}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;
