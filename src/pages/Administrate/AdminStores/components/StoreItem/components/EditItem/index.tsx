import React, { useState } from "react";
import type { LazyStore } from "../../../../../../../models";
import {
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Basic from "./components/Basic";
import type { EditItemProps } from "./types";
import { updateStoreAsync } from "../../../../redux/adminStores";
import { useAppDispatch } from "../../../../../../../app/hooks";
import EditContact from "./components/EditContact";
import EditCategorie from "./components/EditCategorie";
import Location from "./components/EditLocation";

const EditItem = (props: EditItemProps) => {
  const { open, setOpen, ...rest } = props;
  const dispatch = useAppDispatch();
  const [newStore, setNewStore] = useState<LazyStore>({
    ...rest,
  });
  const onClose = () => setOpen(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewStore((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const haneleEditContact = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewStore((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [name]: value,
      },
    }));
  };
  const handleEditCategories = (event: any, newValue: any) => {
    setNewStore((prev) => ({
      ...prev,
      categories: newValue,
    }));
  };

  const handleSave = () => {
    dispatch(updateStoreAsync(newStore));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Muokkaa</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Basic {...newStore} handleChange={handleChange} />
          <EditContact {...newStore} handleChange={haneleEditContact} />
          <EditCategorie {...newStore} handleChange={handleEditCategories} />
          <Location {...newStore} setNewStore={setNewStore} />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSave}>
          Tallenna
        </Button>
        <Button onClick={onClose}>Sulje</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditItem;
