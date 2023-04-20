import React, { useState } from "react";
import { Grid, Typography, IconButton, Button, Box } from "@mui/material";
import type { valuesProps } from "../types";
import type { LazyImage } from "../../../../../models";
import Add from "@mui/icons-material/Add";
import Clear from "@mui/icons-material/Clear";

type ImageTypes = {
  identify: LazyImage;
  imgUrl: string;
  file: File;
};

type ImageSectionProps = {
  values: valuesProps;
  setValues: (values: valuesProps) => void;
};

const ImageSection = (props: ImageSectionProps) => {
  const { values, setValues } = props;
  const [images, setImages] = useState<ImageTypes[]>([]);

  const handleImage = (e: any) => {
    const id = Math.random().toString(36).substr(2, 9);
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    const identify: LazyImage = {
      id: id,
      key: file.name,
    };

    setImages([...images, { identify, imgUrl, file }]);
  };

  const handleDelete = (index: number) => {
    const newImages = images.filter((image, i) => i !== index);
    setImages(newImages);
  };

  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <Typography variant="h6">Kuvat</Typography>

        <Button variant="contained" startIcon={<Add />} component="label">
          Lisää kuva
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImage}
          />
        </Button>
      </Grid>

      {images.map((image: ImageTypes, index) => (
        <Grid item sm={3} key={image.identify.id}>
          {/** show image to 1:1 */}
          {image.imgUrl ? (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingBottom: "100%",
                overflow: "hidden",
                "&:hover": {
                  "& > button": {
                    opacity: 1,
                  },
                },
              }}
            >
              <img
                src={image.imgUrl}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  opacity: 0,
                  transition: "all 0.3s ease",
                }}
                onClick={() => handleDelete(index)}
              >
                <Clear />
              </IconButton>
            </Box>
          ) : null}
        </Grid>
      ))}

      <Grid item sm={12}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => console.log(images)}
        >
          Log
        </Button>
      </Grid>
    </Grid>
  );
};

export default ImageSection;
