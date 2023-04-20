import React, { useState, useEffect } from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Button,
  styled,
} from "@mui/material";
import type {
  LazyStore,
  LazyCategory,
  LazyContact,
  LazyLocation,
  LazyOpentime,
  LazyImage,
} from "../../../../../models";
import { Store } from "../../../../../models";
import { DataStore, Storage } from "aws-amplify";
import type { ImgsTypes } from "../types";

const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

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

const Opentime = (props: LazyOpentime) => {
  const { day, start, end } = props;
  if (!start || !end) return null;

  const o = new Date(start);
  const c = new Date(end);
  const opentime =
    o.getHours() + ":" + o.getMinutes().toString().padStart(2, "0");
  const closetime =
    c.getHours() + ":" + c.getMinutes().toString().padStart(2, "0");

  return (
    <Box>
      <Typography>
        <b>{day}:</b> {opentime} - {closetime}
      </Typography>
    </Box>
  );
};

const KirppisItem = (props: LazyStore) => {
  const [images, setImages] = useState<ImgsTypes[]>([]);
  const {
    name,
    description,
    id,
    isConfirmed,
    categories,
    contact,
    location,
    opentimes,
    imgs,
  } = props;

  const handleDelete = () => onDelete(id);

  useEffect(() => {
    const handleLoadimages = async () => {
      if (!imgs) return;
      const imgData = await Promise.all(
        imgs.map(async (img: LazyImage | null) => {
          const url = img ? await Storage.get(img.key ?? "") : null;
          return { url, identify: img };
        })
      );

      setImages(imgData);
    };

    handleLoadimages();
  }, [props]);

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
          <CustomBox hidden={!!isConfirmed}>
            <Typography>{description}</Typography>
          </CustomBox>

          <CustomBox>
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
          </CustomBox>

          <CustomBox>
            <Typography>
              <b>Kategoriat</b>
            </Typography>
            {categories &&
              categories.map((category: LazyCategory | null) => {
                if (!category) return null;
                return <Category {...category} key={category.id} />;
              })}
          </CustomBox>

          <CustomBox>
            <Grid container spacing={2}>
              {images.map((image, key) => (
                <Grid item xs={4} key={image.identify?.id}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={image.url ?? ""}
                      alt={image.identify?.key ?? ""}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CustomBox>

          <CustomBox>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                {opentimes &&
                  opentimes.map((opentime: LazyOpentime | null, key) => (
                    <Opentime key={key} {...opentime} />
                  ))}
              </Grid>
              <Contact {...contact} />
              <Location {...location} />
            </Grid>
          </CustomBox>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default KirppisItem;
