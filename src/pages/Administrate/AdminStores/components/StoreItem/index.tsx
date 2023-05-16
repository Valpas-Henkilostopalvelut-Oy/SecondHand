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
import Categories from "./components/Categories";
import Images from "./components/Images";
import StoreIframe from "./components/StoreIframe";
import Contact from "./components/Contact";
import Location from "./components/Location";

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
        padding: "1em",
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log(props)}
          >
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
  const { opentimes, description, categories, imgs, location, contact } = props;
  const iframe = location?.iframe;

  return (
    <Box>
      <CustomBox hidden={!description}>
        <Typography>
          <b>Kuvaus</b>
        </Typography>
        <Typography>{description}</Typography>
      </CustomBox>
      <CustomBox hidden={!categories || categories.length === 0}>
        <Categories {...props} />
      </CustomBox>
      <CustomBox hidden={!opentimes || opentimes.length === 0}>
        <Typography>
          <b>Aukioloajat</b>
        </Typography>
        <OpenTime {...props} />
      </CustomBox>
      <CustomBox hidden={!contact}>
        <Typography>
          <b>Yhteystiedot</b>
        </Typography>
        <Contact {...props} />
      </CustomBox>
      <CustomBox hidden={!location}>
        <Typography>
          <b>Sijainti</b>
        </Typography>
        <Location {...props} />
      </CustomBox>
      <CustomBox hidden={!imgs || imgs.length === 0}>
        <Images {...props} />
      </CustomBox>
      <CustomBox hidden={!iframe}>
        <StoreIframe {...props} />
      </CustomBox>
    </Box>
  );
};

export default StoreItem;
