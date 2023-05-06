import React, { useState, useEffect } from "react";
import { Grid, Typography, TextField } from "@mui/material";
import type { NewStoreProps } from "../types";

const Driveto = (props: NewStoreProps) => {
  const { values, setValues } = props;
  const [driveto, setDriveto] = useState("");

  useEffect(() => {
    const driveToStart = driveto.startsWith("https://");

    if (driveToStart) {
      setValues({
        ...values,
        location: { ...values.location, driveto: driveto },
      });
    } else {
      setValues({
        ...values,
        location: { ...values.location, driveto: `https://${driveto}` },
      });
    }
  }, [driveto]);

  const handleChange = (e: any) => setDriveto(e.target.value);

  return (
    <Grid item sm={6}>
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
    </Grid>
  );
};

export default Driveto;
