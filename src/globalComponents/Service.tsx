import React, { useState, useEffect } from "react";
import type { MouseEvent, Dispatch, SetStateAction } from "react";
import { Box, Menu, MenuItem } from "@mui/material";
import { MenuOpenButton, NavigationButton } from "./CustomButtons";
import { useLocation } from "react-router-dom";

interface Service {
  name: string;
  to?: string;
}

const services = [
  {
    name: "Kunnostus ja restaurointi",
    to: "/kunnostus-ja-restaurointi",
  },
  {
    name: "Kuolinpesien tyhjennys",
    to: "/kuolinpesien-tyhjennys",
  },
  {
    name: "Kuljetus- ja muuttopalvelut",
    to: "/kuljetus-ja-muuttopalvelut",
  },
  {
    name: "Siiivouspalvelut",
    to: "/siivouspalvelut",
  },
  {
    name: "Kehystyspalvelut",
    to: "/kehystyspalvelut",
  },
  {
    name: "Verhoilu ja varjastimet",
    to: "/verhoilu-ja-varjastimet",
  },
];

const Services = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const location = useLocation();

  return (
    <>
      <MenuOpenButton
        aria-controls="menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
      >
        Palvelut
      </MenuOpenButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {services.map((service: Service) => (
          <MenuItem
            key={service.name}
            onClick={handleClose}
            selected={location.pathname === service.to}
          >
            <NavigationButton to={service.to ? service.to : "/palvelut"}>
              {service.name}
            </NavigationButton>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Services;
