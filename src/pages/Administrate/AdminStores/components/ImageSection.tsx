import React from "react";
import { Grid, Typography, IconButton, Button, Box } from "@mui/material";
import type { ImageTypes } from "../types";
import Add from "@mui/icons-material/Add";
import Clear from "@mui/icons-material/Clear";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { addFile, removeFile } from "../redux/newstore";

const Image = (props: {
  image: ImageTypes;
  handleDelete: (file: ImageTypes) => void;
}) => {
  const { image, handleDelete } = props;
  const { filename, imgUrl } = image;

  const handleImageError = () => {
    // Handle image loading error, e.g., display a placeholder image or error message
    console.log("Error loading image:", filename);
  };

  return (
    <Grid item sm={3}>
      <Box
        sx={{
          position: "relative",
          height: 0,
          paddingBottom: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <img
          alt={filename}
          src={imgUrl || ""}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          onError={handleImageError}
        />
        <IconButton
          onClick={() => handleDelete(image)}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "white",
            opacity: 0,
            transition: "opacity 0.3s",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <Clear />
        </IconButton>
      </Box>
    </Grid>
  );
};

const ImageSection = () => {
  const values = useAppSelector((state) => state.newstore).files;
  const dispatch = useAppDispatch();

  const handleImage = (e: any) => {
    const id = Math.random().toString(36).substr(2, 9);
    const filename = e.target.files[0].name;
    const key = id + "-" + filename;
    const file = e.target.files[0];
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
        <Grid item xs={4}>
          <Button
            variant="contained"
            startIcon={<Add />}
            component="label"
            fullWidth
          >
            Lisää kuva
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImage}
            />
          </Button>
        </Grid>
      </Grid>

      {values.map((image: ImageTypes) => (
        <Image image={image} key={image.id} handleDelete={handleDelete} />
      ))}
    </Grid>
  );
};

export default ImageSection;
