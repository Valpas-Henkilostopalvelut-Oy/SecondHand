import React, { useState } from "react";
import { Box, Menu, MenuItem, IconButton } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { NavigationButton } from "./CustomButtons";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import LoginIcon from "@mui/icons-material/Login";
import { logout } from "../app/reducer/user";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const links = [
  {
    title: "Paikat",
    path: "/admin/stores",
  },
  {
    title: "Kategoriat",
    path: "/admin/categories",
  },
  {
    title: "Mainokset",
    path: "/admin/ads",
  },
  {
    title: "Arviot",
    path: "/admin/evaluation",
  },
];

const Profile = (props: BoxProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { isAuth } = useAppSelector((state) => state.user);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

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
          <MenuItem
            key={link.title}
            onClick={handleClose}
            component={NavigationButton}
            to={link.path}
          >
            {link.title}
          </MenuItem>
        ))}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;
