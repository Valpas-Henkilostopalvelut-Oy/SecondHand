import React from "react";
import { Box, Typography } from "@mui/material";
import { Search } from "../../components/Search";

export const Home = () => (
  <Box>
    <Typography>
      Kaikki Suomen kirpputorit, secondhand-kaupat ja alan tapahtumat yhdessä
      paikassa.
    </Typography>
    
    <Search />

    <Typography variant="h4">Koti siivu</Typography>

    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      tincidunt nisl, vitae aliquam nisl. Nulla facilisi. Nulla facilisi. Nulla
      facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
      Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
    </Typography>
  </Box>
);
