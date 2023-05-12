import React, { useState, useEffect } from "react";
import { Grid, Typography, TextField } from "@mui/material";
import type { NewStoreProps } from "../types";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { addLocation } from "../redux/newstore";

const addHttpsToUrl = (url: string) => {
  if (!url) return null;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  return url;
};

const Driveto = () => {
  const [driveto, setDriveto] = useState(null || "");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addLocation({ driveto: addHttpsToUrl(driveto) }));
  }, [driveto]);

  const handleChange = (e: any) => setDriveto(e.target.value);

  return (
    <TextField
      label="Ajo-ohjeet"
      variant="outlined"
      fullWidth
      value={driveto}
      rows={4}
      multiline
      onChange={handleChange}
      helperText="Ajo-ohjeet"
    />
  );
};

export default Driveto;
