import React, { useState } from "react";
import type { LazyStore } from "../../../../../models";
import {
  Typography,
  Box,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import OpenTime from "./components/Opentime";
import CustomBox from "./components/CustomBox";
import { DataStore } from "aws-amplify";
import { Store } from "../../../../../models";

const StoreItem = (props: LazyStore) => {
  const { isConfirmed, name } = props;
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const handleDelete = async () => {
    const store: any = await DataStore.query(Store, props.id);
    await DataStore.delete(store);
  };
  if (!isConfirmed) return null;
  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <Accordion
        expanded={open}
        onChange={handleClick}
        sx={{ width: "100%", border: "none" }}
      >
        <AccordionSummary>
          <Typography>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StoreDetails {...props} />
        </AccordionDetails>
        <AccordionActions>
          <Button variant="contained" color="primary">
            Muokkaa
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Poista
          </Button>
        </AccordionActions>
      </Accordion>
    </Box>
  );
};

const StoreDetails = (props: LazyStore) => {
  const { name, opentimes, description } = props;

  return (
    <Box>
      <CustomBox>
        <Typography>{name}</Typography>
      </CustomBox>
      <CustomBox hidden={!description}>
        <Typography>
          <b>Kuvaus</b>
        </Typography>
        <Typography>{description}</Typography>
      </CustomBox>
      <CustomBox hidden={!opentimes || opentimes.length === 0}>
        <Typography>
          <b>Aukioloajat</b>
        </Typography>
        <OpenTime {...props} />
      </CustomBox>
    </Box>
  );
};

export default StoreItem;
