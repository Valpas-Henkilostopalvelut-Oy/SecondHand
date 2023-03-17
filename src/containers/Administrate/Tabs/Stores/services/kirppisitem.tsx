import React, { useState, useEffect } from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Button,
} from "@mui/material";
import type {
  LazyStore,
  LazyCategory,
  LazyContact,
  LazyLocation,
} from "../../../../../models";
import { Store } from "../../../../../models";
import { DataStore } from "aws-amplify";

const Location = (props: LazyLocation) => {
  const { address, city, zip, area } = props;

  return (
    <Grid item xs={4}>
      <Typography>
        <b>Sijainti</b>
      </Typography>
      <Box>
        <Typography>osoite: {address ? address : "Ei saatavilla"}</Typography>
        <Typography>postinumero: {zip ? zip : "Ei saatavilla"}</Typography>
        <Typography>kaupunki: {city ? city : "Ei saatavilla"}</Typography>
        <Typography>alue: {area ? area : "Ei saatavilla"}</Typography>
      </Box>
    </Grid>
  );
};

const Contact = (props: LazyContact) => {
  const { email, phone, website } = props;
  return (
    <Grid item xs={4}>
      <Typography>
        <b>Yhteystiedot</b>
      </Typography>
      <Box>
        <Typography>sähköposti: {email ? email : "Ei saatavilla"}</Typography>
        <Typography>
          puhelinnumero: {phone ? phone : "Ei saatavilla"}
        </Typography>
        <Typography>
          nettisivu: {website ? website : "Ei saatavilla"}
        </Typography>
      </Box>
    </Grid>
  );
};

const Category = (props: LazyCategory) => {
  const { name } = props;

  return <Typography>{name}</Typography>;
};

const onDelete = async (id: string) => {
  await DataStore.delete(Store, id);
};

const KirppisItem = (props: LazyStore) => {
  const { name, description, id, isConfirmed, categories, contact, location } =
    props;

  const handleDelete = () => onDelete(id);

  return (
    <Box sx={{ border: "1px solid #ccc", marginBottom: "1rem" }}>
      <Accordion elevation={0}>
        <AccordionSummary
          aria-controls="admin-panel"
          id="admin-panel-header"
          sx={{ backgroundColor: "#E5BF93" }}
        >
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography>{name}</Typography>
            <Typography hidden={!!isConfirmed}>Unconfirmed</Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <Box hidden={!!isConfirmed}>
            <Typography>{description}</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Typography>ID: {id}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" fullWidth onClick={handleDelete}>
                Poista
              </Button>
            </Grid>
          </Grid>

          <Box>
            <Typography>Kategoriat</Typography>
            {categories &&
              categories.map((category: LazyCategory | null) => {
                if (!category) return null;
                return <Category {...category} key={category.id} />;
              })}
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={4} />
            <Contact {...contact} />
            <Location {...location} />
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default KirppisItem;
