import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataStore } from "aws-amplify";
import { Store } from "../../../../models";

const Kirppis = (props: any) => {
  return;
};

const KirppuksetPanel = (props: any) => {
  const { auth, isAdmin } = props;
  const [kirppukset, setKirppukset] = useState([]);

  return (
    <Box>
      <Typography>Kirppukset</Typography>
    </Box>
  );
};

export default KirppuksetPanel;
