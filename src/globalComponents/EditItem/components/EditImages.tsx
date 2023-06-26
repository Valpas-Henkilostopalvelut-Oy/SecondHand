import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import {
  uploadImageAsync,
  deleteImageAsync,
} from "../../../app/reducer/stores";
import Carousel from "react-material-ui-carousel";
import type { LazyStore, LazyImage } from "../../../models";
import ImageComponent from "../../ImageComponent";

const ImageItem = ({
  storeId,
  img,
  isAdmin,
}: {
  storeId: string;
  img?: LazyImage | null;
  isAdmin?: boolean | null;
}) => {
  const dispatch = useAppDispatch();

  if (!img) return null;
  const { id, key } = img;
  if (!key) return null;

  const handleDelete = () => {
    dispatch(deleteImageAsync({ id: storeId, key, isAdmin }));
  };

  return (
    <Box>
      <ImageComponent id={id} fileKey={key} />
      <Button
        variant="outlined"
        onClick={handleDelete}
        sx={{ mt: 1 }}
        fullWidth
      >
        Remove
      </Button>
    </Box>
  );
};

const EditImages = ({ imgs, id }: LazyStore) => {
  const { isAdmin } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    if (files.length === 0) return;
    const fid = Math.random().toString(36).substr(2, 9);
    const filename = files[0].name;
    const key = fid + "-" + filename;
    const file = files[0];
    dispatch(
      uploadImageAsync({ id, file, fileName: key, isAdmin, fileId: fid })
    );
  };

  return (
    <Grid item xs={12}>
      <Box>
        <Typography variant="h6">Images</Typography>
        <Carousel autoPlay={false} animation="slide" navButtonsAlwaysVisible>
          {imgs?.map((img) => (
            <ImageItem key={img?.id} storeId={id} img={img} isAdmin={isAdmin} />
          ))}
        </Carousel>
        <Button variant="outlined" component="label">
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleUpload}
          />
          Add
        </Button>
      </Box>
    </Grid>
  );
};

export default EditImages;
