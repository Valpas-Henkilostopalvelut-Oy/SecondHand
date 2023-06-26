import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import LogoImage from "../../LogoImage";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { updateLogoAsync } from "../../../app/reducer/stores";
import type { LazyStore } from "../../../models";
import { Storage } from "aws-amplify";

const EditLogo = ({ logo, id }: LazyStore) => {
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector((state) => state.user);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const fid = Math.random().toString(36).substring(2);
    const ext = file.name.split(".").pop();
    const fileName = `${fid}.${ext}`;
    const { key } = await Storage.put(fileName, file, {
      contentType: file.type,
    });
    dispatch(updateLogoAsync({ id, logo: key, isAdmin }));
  };

  const handleRemove = async () => {
    if (!logo) return;
    await Storage.remove(logo);
    dispatch(updateLogoAsync({ id, logo: null, isAdmin }));
  };

  return (
    <Grid item xs={12}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Logo</Typography>
        <LogoImage isAdmin skey={logo} />
        {!logo && (
          <Button variant="outlined" component="label">
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleUpload}
            />
            Add
          </Button>
        )}
        {logo && (
          <Button variant="outlined" onClick={handleRemove}>
            Remove
          </Button>
        )}
      </Box>
    </Grid>
  );
};

export default EditLogo;
