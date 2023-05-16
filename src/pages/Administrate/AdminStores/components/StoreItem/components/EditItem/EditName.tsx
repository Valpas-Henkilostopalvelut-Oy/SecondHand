import React from "react";
import { TextField, Grid } from "@mui/material";
import type { EditItemState } from "./types";

const EditName = (props: EditItemState) => {
  const { name, handleChange, grid } = props;

  return (
    <Grid {...grid}>
      <TextField
        name="name"
        label="Nimi"
        variant="outlined"
        fullWidth
        value={name}
        onChange={handleChange}
        helperText="Nimi"
      />
    </Grid>
  );
};

export default EditName;
