import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Collapse,
  styled,
} from "@mui/material";

import Contact from "./Contact";
import Location from "./Location";
import CategoriesSelect from "./CategoriesSelect";
import ImageSection from "./ImageSection";
import Opentimes from "./Opentimes";
import Create from "./Create";
import Basic from "./Basic";

const StoreBlock = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginBottom: theme.spacing(2),
}));

const NewStore = () => {
  const [open, setOpen] = useState(false);

  return (
    <Grid item container xs={12} spacing={2}>
      <Grid item sm={10} xs={12} />
      <Grid item sm={2} xs={12}>
        <Button variant="contained" onClick={() => setOpen(!open)} fullWidth>
          Lisää kirppis
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Collapse in={open}>
          <StoreBlock>
            <Basic />
          </StoreBlock>

          <StoreBlock>
            <Contact />
          </StoreBlock>

          <StoreBlock>
            <CategoriesSelect />
          </StoreBlock>

          <StoreBlock>
            <Opentimes />
          </StoreBlock>

          <StoreBlock>
            <Location />
          </StoreBlock>

          <StoreBlock>
            <ImageSection />
          </StoreBlock>

          <StoreBlock>
            <Create />
          </StoreBlock>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default NewStore;
