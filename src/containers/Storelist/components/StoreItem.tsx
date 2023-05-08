import React from "react";

import {
  AccordionDetails,
  AccordionSummary,
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

const StoreItem = (props: LazyStore) => {
  const {
    name,
    description,
    categories,
    services,
    sellplaces,
    opentimes,
    contact,
    location,
    imgs,
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
              <Grid item xs={4}>
                <Typography variant="h6">Aukioloajat</Typography>
                <OpenTime times={opentimes} />
              </Grid>

              <Grid item xs={4}>
                <Contact {...contact} />
              </Grid>

              <Grid item xs={4}>
                <Location {...location} />
              </Grid>
            </Grid>
          </CustomBox>

          <CustomBox>
            <Grid container spacing={2}>
              {services && (
                <Grid item xs={4}>
                  <Typography variant="h6">Palvelut</Typography>
                  <Typography>{services.join(", ")}</Typography>
                </Grid>
              )}
              {sellplaces && (
                <Grid item xs={4}>
                  <Typography variant="h6">Myyntipaikat</Typography>
                  <Typography>{sellplaces.all}</Typography>
                </Grid>
              )}
            </Grid>
          </CustomBox>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default StoreItem;
