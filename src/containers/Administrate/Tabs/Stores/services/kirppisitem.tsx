import React, { useState, useEffect } from "react";
import { Grid, Collapse, Box } from "@mui/material";
import type { LazyCategories } from "../../../../../models";

const KirppisItem = (props: LazyCategories) => {
  const { name } = props;
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ border: "1px solid #ccc", borderRadius: "4px" }}>
      <Grid container xs={12} onClick={() => setOpen(!open)}>
        {name}
      </Grid>

      <Collapse in={open} timeout="auto" unmountOnExit>
        s
      </Collapse>
    </Box>
  );
};

export default KirppisItem;
