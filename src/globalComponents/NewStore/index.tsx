import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  styled,
  TextField,
  type BoxProps,
  IconButton,
  Button,
  Autocomplete,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Formik } from "formik";
import * as yup from "yup";
import type StoreFormProps from "./types";
import { Add } from "@mui/icons-material";
import LogoImage from "../LogoImage";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { storeTypes } from "../storeType";
import areas from "../Search/fi";
import type { area } from "../Search/fi";
import ImageComponent from "../ImageComponent";

const uniqueAreas = (areas: area[]) =>
  areas
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.admin_name === item.admin_name)
    )
    .sort((a, b) => (a.admin_name > b.admin_name ? 1 : -1))
    .map((item) => item.admin_name);

const uniqueFilteredArray = (areas: area[], admin_name: string) =>
  areas
    .filter((item) => item.admin_name === admin_name)
    .sort((a, b) => (a.city > b.city ? 1 : -1))
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.city === item.city)
    );

const addHttpsToUrlOrGetSrc = (url: string) => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "https://" + url;
  }
  if (url.includes("src=")) {
    const srcMatch = url.match(/src\s*=\s*"(.*?)"/i);
    if (srcMatch && srcMatch[1]) {
      return srcMatch[1];
    }
  }
  return url;
};

const StoreBlock = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginBottom: theme.spacing(2),
}));

const NewStore = ({ box }: { box?: BoxProps }) => {
  const [open, setOpen] = useState(false);
  const categories = useAppSelector((state) => state.categories.data);
  const initialValues: StoreFormProps = {
    type: "",
    name: "",
    contact: {
      phone: "",
      email: "",
      website: undefined,
    },
    location: {
      city: "",
      admin_name: "",
    },
    description: null,
    categories: null,
    imgs: null,
    social: null,
    settings: {
      isConfirmed: {
        status: false,
      },
    },
    logo: null,
    opentimes: null,
  };

  return (
    <Box {...box}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Uusi paikka</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Formik
            initialValues={initialValues}
            onSubmit={(e) => {
              console.log(e);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              errors,
              touched,
              isValid,
              isSubmitting,
            }) => (
              <Box component="form" onSubmit={handleSubmit}>
                <StoreBlock>
                  {/** Logo selection */}
                  <Typography variant="h6">Valitse logo</Typography>
                  <IconButton component="label">
                    <Add />
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const { files } = e.target;
                        if (!files) return;
                        if (files.length === 0) return;
                        const id = Math.random().toString(36).substr(2, 9);
                        const filename = files[0].name;
                        const key = id + "-" + filename;
                        const file = files[0];
                        const imgUrl = URL.createObjectURL(file);
                        const newImage = { id, key, filename, imgUrl };
                        setFieldValue("logo", newImage);
                      }}
                    />
                  </IconButton>
                  {values.logo && (
                    <Box display="flex" alignItems="center">
                      <LogoImage isAdmin url={values.logo} />
                      <Button
                        variant="outlined"
                        color="inherit"
                        onClick={() => setFieldValue("logo", null)}
                      >
                        Poista
                      </Button>
                    </Box>
                  )}
                </StoreBlock>
                <StoreBlock>
                  {/** Basic information */}
                  <Typography variant="h6">Perustiedot</Typography>
                  <TextField
                    label="Nimi"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.name && touched.name}
                    helperText={touched.name && errors.name}
                    fullWidth
                  />
                  <TextField
                    label="Kuvaus"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.description && touched.description}
                    helperText={touched.description && errors.description}
                    fullWidth
                  />
                </StoreBlock>
                <StoreBlock>
                  {/** Contact information */}
                  <Typography variant="h6">Yhteystiedot</Typography>
                  <TextField
                    label="Sähköposti"
                    name="contact.email"
                    value={values.contact.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.contact?.email && touched.contact?.email}
                    helperText={touched.contact?.email && errors.contact?.email}
                    fullWidth
                  />
                  <TextField
                    label="Puhelin"
                    name="contact.phone"
                    value={values.contact.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.contact?.phone && touched.contact?.phone}
                    helperText={touched.contact?.phone && errors.contact?.phone}
                    fullWidth
                  />
                  <TextField
                    label="Kotisivu"
                    name="contact.website"
                    value={values.contact.website}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      !!errors.contact?.website && touched.contact?.website
                    }
                    helperText={
                      touched.contact?.website && errors.contact?.website
                    }
                    fullWidth
                  />
                </StoreBlock>
                <StoreBlock>
                  {/** Categories */}
                  <Typography variant="h6">Kategoriat</Typography>
                  <Autocomplete
                    multiple
                    options={categories}
                    getOptionLabel={(option) => option.name}
                    onChange={(e, value) => setFieldValue("categories", value)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Kategoriat"
                        placeholder="Kategoriat"
                      />
                    )}
                  />
                </StoreBlock>
                <StoreBlock>
                  <Typography variant="h6">Kauppatyyppi</Typography>
                  <Autocomplete
                    options={storeTypes}
                    getOptionLabel={(option) => option.name}
                    onChange={(e, value) => setFieldValue("type", value)}
                    renderInput={(params) => (
                      <TextField {...params} label="Kauppatyyppi" />
                    )}
                  />
                </StoreBlock>
                <StoreBlock>
                  {/** Location */}
                  <Typography variant="h6">Sijainti</Typography>
                  <TextField
                    name="address"
                    label="Toimipaikan sijainti"
                    variant="outlined"
                    fullWidth
                    value={values.location.address}
                    onChange={handleChange}
                    helperText="Toimipaikan sijainti"
                  />
                  <TextField
                    name="zip"
                    label="Postinumero"
                    variant="outlined"
                    fullWidth
                    value={values.location.zip}
                    onChange={handleChange}
                    helperText="Postinumero"
                  />
                  <Autocomplete
                    options={uniqueAreas(areas)}
                    getOptionLabel={(option) => option}
                    onChange={(e, value) =>
                      setFieldValue(
                        "location.admin_name",
                        value as string | null
                      )
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="Alue" />
                    )}
                  />
                  <Autocomplete
                    options={uniqueFilteredArray(
                      areas,
                      values.location.admin_name
                    )}
                    getOptionLabel={(option) => option.city}
                    onChange={(e, value) =>
                      setFieldValue("location.city", value)
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="Kaupunki" />
                    )}
                  />
                  <TextField
                    name="location.address"
                    label="Osoite"
                    variant="outlined"
                    fullWidth
                    value={values.location.address}
                    onChange={(e) => {
                      const { value } = e.target;
                      const location = addHttpsToUrlOrGetSrc(value);
                      setFieldValue("location.address", location);
                    }}
                    helperText="Osoite"
                  />
                  <TextField
                    name="location.driveto"
                    label="Ajo-ohjeet"
                    variant="outlined"
                    fullWidth
                    value={values.location.driveto}
                    onChange={(e) => {
                      const { value } = e.target;
                      const driveto = addHttpsToUrlOrGetSrc(value);
                      setFieldValue("location.driveto", driveto);
                    }}
                    helperText="Ajo-ohjeet"
                  />
                </StoreBlock>
                <StoreBlock>
                  <Typography variant="h6">Kuvat</Typography>
                  <Box display="flex" alignItems="center">
                    <Typography variant="h6">Valitse kuva</Typography>
                    <IconButton component="label">
                      <Add />
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const { files } = e.target;
                          if (!files) return;
                          if (files.length === 0) return;
                          const file = files[0];
                          setFieldValue("imgs", file);
                        }}
                      />
                    </IconButton>
                  </Box>
                  {values.imgs &&
                    values.imgs.map((img) => (
                      <Box key={img.name}>
                        <ImageComponent
                          id={img.name}
                          fileUrl={URL.createObjectURL(img)}
                        />
                        <Button
                          variant="outlined"
                          onClick={() => {
                            const newImgs =
                              values.imgs?.filter(
                                (image) => image.name !== img.name
                              ) || null;
                            setFieldValue("imgs", newImgs);
                          }}
                          fullWidth
                        >
                          Poista
                        </Button>
                      </Box>
                    ))}
                </StoreBlock>

                <StoreBlock>
                  <Typography variant="h6">Sosiaalinen media</Typography>
                  <TextField
                    fullWidth
                    label="Facebook"
                    variant="outlined"
                    name="facebook"
                    placeholder="https://www.facebook.com/"
                    value={values.social?.facebook || ""}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    label="Instagram"
                    variant="outlined"
                    name="instagram"
                    placeholder="https://www.instagram.com/"
                    value={values.social?.instagram || ""}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    label="Twitter"
                    variant="outlined"
                    name="twitter"
                    placeholder="https://twitter.com/"
                    value={values.social?.twitter || ""}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    label="YouTube"
                    variant="outlined"
                    name="youtube"
                    placeholder="https://www.youtube.com/"
                    value={values.social?.youtube || ""}
                    onChange={handleChange}
                  />
                </StoreBlock>

                <StoreBlock>
                  <Typography variant="h6">Aukioloajat</Typography>
                  <Typography variant="body2">
                    Voit lisätä aukioloajat myös myöhemmin.
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => setFieldValue("opentimes", null)}
                  >
                    Poista aukioloajat
                  </Button>
                </StoreBlock>
              </Box>
            )}
          </Formik>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default NewStore;
