import React from "react";
import { TextField, Grid } from "@mui/material";
import type { EditItemState } from "../types";
import { updateStoreAsync } from "../../../app/reducer/stores";
import { useAppDispatch } from "../../../app/hooks";

const addHttpsToUrl = (url: string) => {
  if (!url) return null;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  return url;
};

const EditDriveto = (props: EditItemState) => {
  const { location, setStore, isAdmin } = props;
  const dispatch = useAppDispatch();

  const handleUpdate = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(
      updateStoreAsync({
        id: props.id,
        isAdmin,
        name: "location",
        value: {
          ...location,
          [name]: addHttpsToUrl(value),
        },
      })
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setStore((prevState) => {
      if (!prevState) return null;
      return {
        ...prevState,
        location: {
          ...prevState.location,
          [name]: value,
        },
      };
    });
  };

  return (
    <Grid item xs={12} sm={6}>
      <TextField
        name="driveto"
        label="Ajo-ohje"
        variant="outlined"
        fullWidth
        value={location?.driveto || ""}
        onChange={handleChange}
        onBlur={handleUpdate}
        helperText="Ajo-ohje"
        multiline
        rows={4}
      />
    </Grid>
  );
};

export default EditDriveto;
