import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Search } from "../../globalComponents/Search";
import Ad from "./Ads/ad";

export const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <Box>
      <Ad />
      <Typography variant="h3">Etusivu</Typography>
      <Search />
    </Box>
  );
};
