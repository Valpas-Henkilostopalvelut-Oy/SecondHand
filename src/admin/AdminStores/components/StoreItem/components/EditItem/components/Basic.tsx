import React from "react";
import { TextField, Grid } from "@mui/material";
import type { EditItemState } from "../types";

const Basic = (props: EditItemState) => {
  const { name, description, handleChange } = props;

  return (
    <>
      <Grid item xs={6}>
        <TextField
          name="name"
          label="Nimi"
          variant="outlined"
          fullWidth
          value={name || ""}
          onChange={handleChange}
          helperText="Nimi"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="description"
          label="Kuvaus"
          variant="outlined"
          fullWidth
          value={description || ""}
          onChange={handleChange}
          helperText="Kuvaus"
          multiline
          rows={4}
        />
      </Grid>
    </>
  );
};

export default Basic;
