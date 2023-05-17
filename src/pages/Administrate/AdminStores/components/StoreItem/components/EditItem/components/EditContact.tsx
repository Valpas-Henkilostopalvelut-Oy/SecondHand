import React from "react";
import { TextField, Grid } from "@mui/material";
import type { EditItemState } from "../types";

const EditContact = (props: EditItemState) => {
  const { contact, handleChange } = props;
  const email = contact?.email;
  const phone = contact?.phone;
  const website = contact?.website;

  return (
    <>
      <Grid item sm={4} xs={12}>
        <TextField
          name="email"
          label="Sähköposti"
          variant="outlined"
          fullWidth
          type="email"
          value={email || ""}
          onChange={handleChange}
          helperText="Sähköposti"
        />
      </Grid>
      <Grid item sm={4} xs={12}>
        <TextField
          name="phone"
          label="Puhelinnumero"
          variant="outlined"
          fullWidth
          type="tel"
          value={phone || ""}
          onChange={handleChange}
          helperText="Puhelinnumero"
        />
      </Grid>
      <Grid item sm={4} xs={12}>
        <TextField
          name="website"
          label="Nettisivu"
          variant="outlined"
          fullWidth
          value={website || ""}
          onChange={handleChange}
          helperText="Nettisivu"
        />
      </Grid>
    </>
  );
};

export default EditContact;
