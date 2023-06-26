import React from "react";
import { TextField, Grid } from "@mui/material";
import type { EditItemState } from "../types";
import { updateStoreAsync } from "../../../app/reducer/stores";
import { useAppDispatch } from "../../../app/hooks";

const Basic = (props: EditItemState) => {
  const { name, description, setStore, isAdmin } = props;
  const dispatch = useAppDispatch();

  const handleUpdate = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(
      updateStoreAsync({
        id: props.id,
        isAdmin,
        name,
        value,
      })
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStore((prevState) => {
      if (!prevState) return null;
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          name="name"
          label="Nimi"
          variant="outlined"
          fullWidth
          value={name || ""}
          onChange={handleChange}
          onBlur={handleUpdate}
          helperText="Nimi"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="description"
          label="Kuvaus"
          variant="outlined"
          fullWidth
          value={description || ""}
          onChange={handleChange}
          onBlur={handleUpdate}
          helperText="Kuvaus"
          multiline
          rows={4}
        />
      </Grid>
    </>
  );
};

export default Basic;
