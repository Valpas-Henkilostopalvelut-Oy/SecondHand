import React, { useEffect, useState } from "react";
import { Grid, Typography, TextField } from "@mui/material";
import type { NewStoreProps } from "../types";

const Iframe = (props: NewStoreProps) => {
  const { values, setValues } = props;
  const [iframe, setIframe] = useState("");

  /**
   * <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.818812125567!2d24.31921911330706!3d60.332584230210585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468de9960f21659d%3A0x904e842b3528c772!2sHiiden%20Kirppis!5e0!3m2!1sen!2sfi!4v1682528153617!5m2!1sen!2sfi" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   */

  useEffect(() => {
    // Get iframe src from iframe
    if (iframe) {
      const srcMatch = iframe.match(/src\s*=\s*"(.*?)"/i); // Use regular expression to match src attribute
      if (srcMatch && srcMatch[1]) {
        const url = srcMatch[1];

        console.log("url", url)
        setValues({
          ...values,
          location: { ...values.location, iframe: url },
        });
      } else {
        console.log("iframe", iframe)
        setValues({
          ...values,
          location: { ...values.location, iframe: iframe },
        });
      }
    }
  }, [iframe]);

  const handleChange = (e: any) => setIframe(e.target.value);

  return (
    <Grid item sm={6}>
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
    </Grid>
  );
};

export default Iframe;
