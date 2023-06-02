import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Search } from "../../globalComponents/Search";

export const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <Box>
      <Typography variant="h3">Etusivu</Typography>
      <Search />
    </Box>
  );
};
