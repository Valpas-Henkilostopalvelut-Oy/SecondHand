import React from "react";

import { Box, Typography, Link } from "@mui/material";
import type { LazyLocation } from "../../../models";

const Location = (props: LazyLocation) => (
  <Box>
    <Typography variant="h6">Sijainti</Typography>
    <Typography>{props.address + ", " + props.city}</Typography>
    <Typography>{props.zip}</Typography>
    <Typography>{props.admin_name}</Typography>
    {props.driveto && (
      <Link href={props.driveto} underline="hover">
        ajo-ohjeet
      </Link>
    )}
  </Box>
);

export default Location;
