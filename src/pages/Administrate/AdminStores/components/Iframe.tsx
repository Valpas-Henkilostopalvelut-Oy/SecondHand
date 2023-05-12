import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import type { NewStoreProps } from "../types";
import { useAppDispatch } from "../../../../app/hooks";
import { addLocation } from "../redux/newstore";

const addHttpsToUrl = (url: string) => {
  if (!url) return null;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  return url;
};

const Iframe = () => {
  const [iframe, setIframe] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (iframe) {
      const srcMatch = iframe.match(/src\s*=\s*"(.*?)"/i);
      if (srcMatch && srcMatch[1]) {
        const url = srcMatch[1];
        dispatch(addLocation({ iframe: addHttpsToUrl(url) }));
      } else {
        dispatch(addLocation({ iframe: addHttpsToUrl(iframe) }));
      }
    }
  }, [iframe]);

  const handleChange = (e: any) => setIframe(e.target.value);

  return (
    <TextField
      label="Iframe"
      variant="outlined"
      fullWidth
      value={iframe}
      rows={4}
      multiline
      onChange={handleChange}
      helperText="Iframe"
    />
  );
};

export default Iframe;
