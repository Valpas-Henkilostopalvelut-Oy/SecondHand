import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import type { LazyContact } from "../../../../../../models";

const Contact = (props: LazyContact) => {
  const { email, phone, website } = props;
  return (
    <Grid item xs={4}>
      <Typography>
        <b>Yhteystiedot</b>
      </Typography>
      <Box>
        <Typography>sähköposti: {email ? email : "Ei saatavilla"}</Typography>
        <Typography>
          puhelinnumero: {phone ? phone : "Ei saatavilla"}
        </Typography>
        <Typography>
          nettisivu: {website ? website : "Ei saatavilla"}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Contact;