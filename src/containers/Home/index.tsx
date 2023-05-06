import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export const Home = () => {
  const [search, setSearch] = useState({
    search: "",
    area: "",
    city: "",
  });
  const [category, setCategory] = useState<string[]>([]);

  return (
    <Box>
      <Typography>
        Kaikki Suomen kirpputorit, secondhand-kaupat ja alan tapahtumat yhdessä
        paikassa.
      </Typography>

      <Typography variant="h4">Koti siivu</Typography>

      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        tincidunt nisl, vitae aliquam nisl. Nulla facilisi. Nulla facilisi.
        Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla
      </Typography>
    </Box>
  );
};
