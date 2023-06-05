import React from "react";

import {
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  Box,
  Grid,
  Typography,
  Accordion,
} from "@mui/material";

import CustomBox from "./CustomBox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { LazyStore, LazyCategory } from "../../../models";
import OpenTime from "./OpenTime";
import Contact from "./Contact";
import Location from "./Location";
import ImgsIframe from "./ImgsIframe";
import SocialMedia from "./SocialMedia";

const StoreItem = (props: LazyStore) => {
  const {
    name,
    description,
    categories,
    opentimes,
    contact,
    location,
    imgs,
    social,
  } = props;

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginBottom: "1rem",
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#f5f5f5",
            borderBottom: "1px solid #ccc",
            borderRadius: "0px",
            padding: "10px 40px",
          }}
        >
          {name}
        </AccordionSummary>
        <AccordionDetails>
          <CustomBox hidden={!description}>
            <Typography>{description}</Typography>
          </CustomBox>

          <CustomBox hidden={!categories}>
            <Typography variant="h6">Kategoriat</Typography>
            {categories &&
              categories.map((item: LazyCategory | null) => {
                if (item)
                  return <Typography key={item.id}>{item.name}</Typography>;
              })}
          </CustomBox>

          <CustomBox>
            <Grid container spacing={2}>
              <ImgsIframe imgs={imgs} location={location} />
            </Grid>
          </CustomBox>

          <CustomBox>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6">Aukioloajat</Typography>
                <OpenTime times={opentimes} />
              </Grid>

              <Grid item xs={12} sm={4}>
                <Contact {...contact} />
              </Grid>

              <Grid item xs={12} sm={4}>
                <Location {...location} />
              </Grid>
            </Grid>
          </CustomBox>
        </AccordionDetails>
        <AccordionActions>
          <SocialMedia {...social} />
        </AccordionActions>
      </Accordion>
    </Box>
  );
};

export default StoreItem;
