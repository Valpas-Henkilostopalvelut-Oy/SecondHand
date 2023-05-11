import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import type { NewStoreProps } from "../types";

const Basic = (props: NewStoreProps) => {
  const { values, setValues } = props;

  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <Typography variant="h6">Lisää toimipiste</Typography>
      </Grid>

      <Grid item sm={6}>
        <TextField
          label="Nimi"
          variant="outlined"
          fullWidth
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          helperText="Tämä on toimipisten nimi"
        />
      </Grid>

      <Grid item sm={6}>
        <TextField
          label="Kuvaus"
          variant="outlined"
          fullWidth
          value={values.description}
          multiline
          rows={3}
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
        />
      </Grid>
    </Grid>
  );
};

export default Basic;