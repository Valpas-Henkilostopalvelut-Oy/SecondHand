import React, { useEffect, useState } from "react";
import type { LazyStore } from "../../../../../models";
import { Grid, Box } from "@mui/material";
import { Storage } from "aws-amplify";

const Images = (props: LazyStore) => {
  const { imgs } = props;
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    const getImagesUrl = async () => {
      const images = await Promise.all(
        imgs?.map(async (img) => {
          const image = await Storage.get(img?.key ?? "");
          return image;
        }) ?? []
      );
      setImages(images);
    };

    imgs && getImagesUrl();
  }, [imgs]);
  return (
    <Grid container spacing={2}>
      {images.map((url, index) => (
        <OneImage key={index} url={url} />
      ))}
    </Grid>
  );
};

const OneImage = (props: { url: string }) => {
  const { url } = props;
  return (
    <Grid item xs={4}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingBottom: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={url ?? ""}
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
  );
};

export default Images;
