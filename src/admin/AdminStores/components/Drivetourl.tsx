import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addLocation } from "../redux/newstore";

const addHttpsToUrl = (url: string) => {
  if (!url) return null;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  return url;
};

const Drivetourl = () => {
  const [driveto, setDriveto] = useState(null || "");
  const dispatch = useAppDispatch();
  const values = useAppSelector((state) => state.newstore.location);

  useEffect(() => {
    dispatch(addLocation({ ...values, driveto: addHttpsToUrl(driveto) }));
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

export default Drivetourl;
