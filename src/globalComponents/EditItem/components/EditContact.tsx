import React from "react";
import { TextField, Grid } from "@mui/material";
import type { EditItemState } from "../types";
import { useAppDispatch } from "../../../app/hooks";
import { updateStoreAsync } from "../../../app/reducer/stores";

const EditContact = (props: EditItemState) => {
  const dispatch = useAppDispatch();
  const { contact, setStore, isAdmin } = props;
  const email = contact?.email;
  const phone = contact?.phone;
  const website = contact?.website;

  const handleUpdate = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(
      updateStoreAsync({
        id: props.id,
        isAdmin,
        name: "contact",
        value: {
          ...contact,
          [name]: value,
        },
      })
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStore((prevState) => {
      if (!prevState) return null;
      return {
        ...prevState,
        contact: {
          ...prevState.contact,
          [name]: value,
        },
      };
    });
  };

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
          onBlur={handleUpdate}
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
          onBlur={handleUpdate}
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
          onBlur={handleUpdate}
          helperText="Nettisivu"
        />
      </Grid>
    </>
  );
};

export default EditContact;
