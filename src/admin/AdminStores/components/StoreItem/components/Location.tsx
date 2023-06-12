import React from "react";
import { Typography, Box } from "@mui/material";
import type { LazyStore } from "../../../../../models";

const Location = (props: LazyStore) => {
  const { location } = props;
  const address = location?.address;
  const zip = location?.zip;
  const city = location?.city;
  const admin_name = location?.admin_name;
  return (
    <Box>
      <Typography>osoite: {address ? address : "Ei saatavilla"}</Typography>
      <Typography>postinumero: {zip ? zip : "Ei saatavilla"}</Typography>
      <Typography>kaupunki: {city ? city : "Ei saatavilla"}</Typography>
      <Typography>alue: {admin_name ? admin_name : "Ei saatavilla"}</Typography>
    </Box>
  );
};

export default Location;
