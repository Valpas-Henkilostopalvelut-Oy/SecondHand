import React from "react";
import { TextField, Grid } from "@mui/material";
import type { EditItemState } from "../types";
import { updateStoreAsync } from "../../../services/storeLib";
import { useAppDispatch } from "../../../app/hooks";

const getUrlFromIframe = (iframe: string) => {
  //can be url or iframe element
  if (!iframe) return null;
  if (iframe.startsWith("<iframe")) {
    const url = iframe.match(/src="([^"]*)/);
    if (!url) return null;
    return url[1];
  }
  return iframe;
};

const EditIframe = (props: EditItemState) => {
  const { location, setStore, isAdmin } = props;
  const dispatch = useAppDispatch();

  const handleUpdate = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const url = getUrlFromIframe(value);
    dispatch(
      updateStoreAsync({
        id: props.id,
        isAdmin,
        name: "location",
        value: {
          ...location,
          [name]: url,
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
        name="iframe"
        label="Iframe"
        variant="outlined"
        fullWidth
        value={location?.iframe || ""}
        onChange={handleChange}
        onBlur={handleUpdate}
        helperText="Iframe"
        multiline
        rows={4}
      />
    </Grid>
  );
};

export default EditIframe;
