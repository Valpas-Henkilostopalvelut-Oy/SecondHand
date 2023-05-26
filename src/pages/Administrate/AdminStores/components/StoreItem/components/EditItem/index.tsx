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
import { updateStoreAsync } from "../../../../../../../app/reducer/adminStores";
import { useAppDispatch } from "../../../../../../../app/hooks";
import EditContact from "./components/EditContact";
import EditCategorie from "./components/EditCategorie";
import Location from "./components/EditLocation";
import EditSocialMedia from "./components/EditSocialMedia";

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
  const handleEditSocialMedia = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setNewStore((prev) => {
      if (!prev.social) {
        return {
          ...prev,
          social: {
            [name]: value,
          },
        };
      }
      return {
        ...prev,
        social: {
          ...prev.social,
          [name]: value,
        },
      };
    });
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
          <EditSocialMedia {...newStore} handleChange={handleEditSocialMedia} />
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
