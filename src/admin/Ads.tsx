import React, { useState } from "react";
import {
  Button,
  Grid,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  TextField,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
//import * as Yup from "yup";
import type { Ad, Side, AdButton } from "../types/ad";
import { addAd } from "../app/reducer/ads";
import { useAppDispatch } from "../app/hooks";

const sideButton: AdButton = {
  text: "",
  link: "",
  color: "",
  background: "",
};

const AdSide: Side = {
  image: "",
  title: "",
  button: sideButton,
};

const initialValues: Ad = {
  firm: "",
  site: "",
  backgroundColor: "",
  left: AdSide,
  right: null,
};

const AdForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState<Ad>(initialValues);
  const [right, setRight] = useState<boolean>(false);
  const [leftImage, setLeftImage] = useState<File | null>(null);
  const [rightImage, setRightImage] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const onSubmit = (values: Ad) => {
    console.log(values);
  };
  const setRightSide = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRight(event.target.checked);
    if (!event.target.checked) setValues({ ...values, right: null });
    else setValues({ ...values, right: AdSide });
  };
  const handleLeftImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setLeftImage(event.target.files[0]);
  };
  const handleRightImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setRightImage(event.target.files[0]);
  };
  const handleLeftImageDelete = () => setLeftImage(null);
  const handleRightImageDelete = () => setRightImage(null);
  const openForm = () => setOpen((prev) => !prev);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name.includes(".")) {
      const [side, key] = name.split(".");
      setValues({ ...values, [side]: { [key]: value } });
    } else setValues({ ...values, [name]: value });
  };

  return (
    <Box>
      <Accordion expanded={open} onChange={openForm}>
        <AccordionSummary>
          <Typography variant="h6">Lisää mainos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="firm"
                label="Firma"
                variant="outlined"
                fullWidth
                value={values.firm}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="site"
                label="Sivusto"
                variant="outlined"
                fullWidth
                value={values.site}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="backgroundColor"
                label="Taustaväri"
                variant="outlined"
                fullWidth
                value={values.backgroundColor}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={right}
                    onChange={setRightSide}
                    name="right"
                    color="primary"
                  />
                }
                label="Oikea puoli"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Vasen puoli</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="left.title"
                label="Otsikko"
                variant="outlined"
                fullWidth
                value={values.left.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="left.button.text"
                label="Nappulan teksti"
                variant="outlined"
                fullWidth
                value={values.left.button?.text || ""}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="left.button.link"
                label="Nappulan linkki"
                variant="outlined"
                fullWidth
                value={values.left.button?.link || ""}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="left.button.color"
                label="Nappulan väri"
                variant="outlined"
                fullWidth
                value={values.left.button?.color || ""}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="left.button.background"
                label="Nappulan taustaväri"
                variant="outlined"
                fullWidth
                value={values.left.button?.background || ""}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
        <AccordionActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSubmit(values)}
          >
            Lisää
          </Button>
        </AccordionActions>
      </Accordion>
    </Box>
  );
};

export default AdForm;
