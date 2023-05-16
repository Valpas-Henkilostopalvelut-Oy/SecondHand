import React from "react";
import { TextField, Grid } from "@mui/material";
import type { EditItemState } from "./types";

const EditDescription = (props: EditItemState) => {
  const { description, handleChange, grid } = props;

  return (
    <Grid {...grid}>
      <TextField
        name="description"
        label="Kuvaus"
        variant="outlined"
        fullWidth
        value={description}
        onChange={handleChange}
        helperText="Kuvaus"
        multiline
        rows={4}
      />
    </Grid>
  );
};

export default EditDescription;
