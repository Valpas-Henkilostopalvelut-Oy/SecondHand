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
import { updateStoreAsync } from "../../../../../../../app/reducer/stores";
import { useAppDispatch, useAppSelector } from "../../../../../../../app/hooks";
import EditContact from "./components/EditContact";
import EditCategorie from "./components/EditCategorie";
import Location from "./components/EditLocation";
import EditSocialMedia from "./components/EditSocialMedia";
import EditType from "./components/EditType";

const EditItem = (props: EditItemProps) => {
  const isAdmin = useAppSelector((state) => state.user.isAdmin);
  const { open, setOpen, ...rest } = props;
  const dispatch = useAppDispatch();
  const [newStore, setNewStore] = useState<LazyStore>({
    ...rest,
  });
  const { id } = rest;
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
    dispatch(updateStoreAsync({ id, data: newStore, isAdmin: isAdmin }));
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

  const handleEditType = (value: string) => {
    setNewStore((prev) => ({
      ...prev,
      type: value,
    }));
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Muokkaa</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ padding: "1em" }}>
          <Basic {...newStore} handleChange={handleChange} />
          <EditContact {...newStore} handleChange={haneleEditContact} />
          <EditCategorie {...newStore} handleChange={handleEditCategories} />
          <EditType {...newStore} handleChange={handleEditType} />
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
