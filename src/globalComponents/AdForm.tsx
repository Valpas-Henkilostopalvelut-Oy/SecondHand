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
  type GridProps,
  type BoxProps,
} from "@mui/material";
//import * as Yup from "yup";
import type { Ad, Side, AdButton } from "../types/ad";
import { addAd } from "../app/reducer/ads";
import { useAppDispatch } from "../app/hooks";
import ImageComponent from "../globalComponents/ImageComponent";

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
  isHidden: true,
  left: AdSide,
  right: null,
};

const OneSide = ({
  side,
  values,
  handleChange,
  grid,
  image,
  deleteImage,
  addImage,
}: {
  image?: File | null;
  deleteImage?: () => void;
  addImage?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  side: "left" | "right";
  grid?: GridProps;
  values: Ad;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const imageComponent = image ? (
    <ImageComponent
      fileUrl={URL.createObjectURL(image)}
      id="ad"
      boxProps={{ onClick: deleteImage }}
    />
  ) : (
    <Button variant="outlined" color="primary" fullWidth component="label">
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        hidden
        onChange={addImage}
      />
      Add
    </Button>
  );

  return (
    <Grid item container spacing={2} {...grid}>
      <Grid item xs={12}>
        <Typography variant="h6">
          {side === "left" ? "Vasen" : "Oikea"} puoli
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          name={side + ".title"}
          label="Otsikko"
          variant="outlined"
          fullWidth
          value={values[side]?.title}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name={side + ".button.text"}
          label="Nappulan teksti"
          variant="outlined"
          fullWidth
          value={values[side]?.button?.text}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name={side + ".button.link"}
          label="Nappulan linkki"
          variant="outlined"
          fullWidth
          value={values[side]?.button?.link}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name={side + ".button.color"}
          label="Nappulan väri"
          variant="outlined"
          fullWidth
          value={values[side]?.button?.color}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name={side + ".button.background"}
          label="Nappulan taustaväri"
          variant="outlined"
          fullWidth
          value={values[side]?.button?.background}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">Kuva</Typography>
        {imageComponent}
      </Grid>
    </Grid>
  );
};

const AdForm = ({ boxProps }: { boxProps?: BoxProps }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState<Ad>(initialValues);
  const [right, setRight] = useState<boolean>(false);
  const [leftImage, setLeftImage] = useState<File | null>(null);
  const [rightImage, setRightImage] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const onSubmit = (values: Ad) => {
    dispatch(
      addAd({
        ad: values,
        leftImage: leftImage,
        rightImage: rightImage,
      })
    );
    setValues(initialValues);
    setLeftImage(null);
    setRightImage(null);
  };
  const setRightSide = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked) setValues({ ...values, right: null });
    else setValues({ ...values, right: AdSide });
    setRight(event.target.checked);
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
      const [side, key, button] = name.split(".");
      if (side === "left") {
        if (button) {
          if (values.left.button) {
            setValues({
              ...values,
              left: {
                ...values.left,
                button: { ...values.left.button, [button]: value },
              },
            });
          }
        } else {
          setValues({
            ...values,
            left: { ...values.left, [key]: value },
          });
        }
      } else if (side === "right") {
        if (button) {
          if (values.right?.button) {
            setValues({
              ...values,
              right: {
                ...values.right,
                button: { ...values.right.button, [button]: value },
              },
            });
          }
        } else {
          if (values.right) {
            setValues({
              ...values,
              right: { ...values.right, [key]: value },
            });
          }
        }
      }
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  return (
    <Box {...boxProps}>
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
                  />
                }
                label="Oikea puoli"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <OneSide
              side="left"
              values={values}
              handleChange={handleChange}
              grid={right ? { xs: 12, sm: 6 } : { xs: 12 }}
              image={leftImage}
              addImage={handleLeftImage}
              deleteImage={handleLeftImageDelete}
            />
            {right && (
              <OneSide
                side={"right"}
                values={values}
                handleChange={handleChange}
                grid={{ xs: 12, sm: 6 }}
                image={rightImage}
                addImage={handleRightImage}
                deleteImage={handleRightImageDelete}
              />
            )}
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
