import React, { useState } from "react";

import {
  Box,
  Button,
  Grid,
  Collapse,
  styled,
  Tooltip,
  IconButton,
} from "@mui/material";
import Contact from "./Contact";
import Location from "./Location";
import CategoriesSelect from "./CategoriesSelect";
import ImageSection from "./ImageSection";
import Opentimes from "./Opentimes";
import Create from "./Create";
import Basic from "./Basic";
import SocialMedia from "./SocialMedia";
import StoreType from "./StoreType";
import AddIcon from "@mui/icons-material/Add";

const StoreBlock = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginBottom: theme.spacing(2),
}));

const NewStore = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Box textAlign={"right"} marginBottom={2}>
        <Tooltip title="Lisää uusi kauppa">
          <IconButton onClick={() => setOpen(!open)}>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Box>
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
          <StoreType />
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
          <SocialMedia />
        </StoreBlock>

        <StoreBlock>
          <Create />
        </StoreBlock>
      </Collapse>
    </Box>
  );
};

export default NewStore;
