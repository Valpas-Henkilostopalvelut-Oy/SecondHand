import React from "react";
import { Grid, Typography, Button, IconButton, Box } from "@mui/material";
import type { ImageTypes } from "../types";
import Add from "@mui/icons-material/Add";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { addFile, removeFile, setLogo } from "../redux/newstore";
import ImageComponent from "../../../globalComponents/ImageComponent";
import LogoImage from "../../../globalComponents/LogoImage";

export const SelectLogo = () => {
  const { logo } = useAppSelector((state) => state.newstore);
  const dispatch = useAppDispatch();

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    if (files.length === 0) return;
    const id = Math.random().toString(36).substr(2, 9);
    const filename = files[0].name;
    const key = id + "-" + filename;
    const file = files[0];
    const imgUrl = URL.createObjectURL(file);
    const newImage = { id, key, filename, imgUrl };
    dispatch(setLogo(newImage));
  };

  const handleDelete = () => {
    dispatch(setLogo(null));
  };

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h6">Valitse logo</Typography>
      <IconButton component="label">
        <Add />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImage}
        />
      </IconButton>
      {logo && (
        <Box display="flex" alignItems="center">
          <LogoImage isAdmin url={logo.imgUrl} />
          <Button variant="outlined" color="inherit" onClick={handleDelete}>
            Poista
          </Button>
        </Box>
      )}
    </Box>
  );
};

const ImageSection = () => {
  const values = useAppSelector((state) => state.newstore).files;
  const dispatch = useAppDispatch();

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    if (files.length === 0) return;
    const id = Math.random().toString(36).substr(2, 9);
    const filename = files[0].name;
    const key = id + "-" + filename;
    const file = files[0];
    const imgUrl = URL.createObjectURL(file);
    const newImage = { id, key, filename, imgUrl };
    dispatch(addFile(newImage));
  };

  const handleDelete = (file: ImageTypes) => {
    dispatch(removeFile(file));
  };

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} container>
        <Grid item xs={8}>
          <Typography variant="h6">Kuvat</Typography>
        </Grid>
        <Grid item xs={4} textAlign="right">
          <IconButton component="label">
            <Add />
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImage}
            />
          </IconButton>
        </Grid>
      </Grid>

      {values.map((image: ImageTypes) => (
        <Grid item sm={3} key={image.key}>
          <ImageComponent fileUrl={image.imgUrl} id={image.key} poping />
          <Button
            fullWidth
            variant="outlined"
            onClick={() => handleDelete(image)}
            sx={{ mt: 1 }}
          >
            Poista
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageSection;
