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
import EditName from "./EditName";
import EditDescription from "./EditDescription";
import type { EditItemProps } from "./types";
import { updateStoreAsync } from "../../../../redux/adminStores";
import { useAppDispatch } from "../../../../../../../app/hooks";

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
  const handleSave = () => {
    dispatch(updateStoreAsync(newStore));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Muokkaa</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <EditName
            {...newStore}
            handleChange={handleChange}
            grid={{ xs: 12, sm: 6, item: true }}
          />
          <EditDescription
            {...newStore}
            handleChange={handleChange}
            grid={{ xs: 12, sm: 6, item: true }}
          />
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
