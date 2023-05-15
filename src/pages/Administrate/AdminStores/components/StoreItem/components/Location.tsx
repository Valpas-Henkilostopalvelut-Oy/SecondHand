import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import type { LazyLocation } from "../../../../../../models";

const Location = (props: LazyLocation) => {
  const { address, city, zip, admin_name } = props;

  return (
    <Grid item xs={4}>
      <Typography>
        <b>Sijainti</b>
      </Typography>
      <Box>
        <Typography>osoite: {address ? address : "Ei saatavilla"}</Typography>
        <Typography>postinumero: {zip ? zip : "Ei saatavilla"}</Typography>
        <Typography>kaupunki: {city ? city : "Ei saatavilla"}</Typography>
        <Typography>
          alue: {admin_name ? admin_name : "Ei saatavilla"}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Location;
