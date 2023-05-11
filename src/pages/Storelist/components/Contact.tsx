import React from "react";

import { Box, Link, Typography } from "@mui/material";
import type { LazyContact } from "../../../models";

const Contact = (props: LazyContact) => (
  <Box>
    <Typography variant="h6">Yhteystiedot</Typography>
    <Typography>{props.phone}</Typography>
    <Typography>{props.email}</Typography>
    {props.website && (
      <Link href={props.website} underline="hover">
        Nettisiivu
      </Link>
    )}
  </Box>
);

export default Contact;
