import React from "react";
import { Typography, Box } from "@mui/material";
import type { LazyStore } from "../../../../../models";

const Contact = (props: LazyStore) => {
  const { contact } = props;
  const email = contact?.email;
  const phone = contact?.phone;
  const website = contact?.website;
  return (
    <Box>
      <Typography>sähköposti: {email ? email : "Ei saatavilla"}</Typography>
      <Typography>puhelinnumero: {phone ? phone : "Ei saatavilla"}</Typography>
      <Typography>nettisivu: {website ? website : "Ei saatavilla"}</Typography>
    </Box>
  );
};

export default Contact;
