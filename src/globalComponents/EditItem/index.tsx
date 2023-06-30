import React, { useState, useEffect } from "react";
import type { LazyStore } from "../../models";
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
import { unconfirmStoreAsync } from "../../app/reducer/stores";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import EditContact from "./components/EditContact";
import EditCategorie from "./components/EditCategorie";
import Location from "./components/EditLocation";
import EditSocialMedia from "./components/EditSocialMedia";
import EditType from "./components/EditType";
import EditLogo from "./components/EditLogo";
import EditImages from "./components/EditImages";
import EditIframe from "./components/EditIframe";
import EditDriveto from "./components/EditDriveto";
import { fetchStore } from "../../services/restFunctions";
import EditSettings from "./components/EditSettings";

const EditItem = (props: EditItemProps) => {
  const { isAdmin } = useAppSelector((state) => state.user);
  const { data } = useAppSelector((state) => state.stores);
  const { open, setOpen, dataId } = props;
  const dispatch = useAppDispatch();
  const [store, setStore] = useState<LazyStore | undefined | null>(null);

  useEffect(() => {
    if (dataId) {
      fetchStore(dataId).then((res) => setStore(res));
    }
  }, [data]);

  if (!store) return null;

  const onClose = () => setOpen(false);

  const handleUnconfirm = () => {
    dispatch(unconfirmStoreAsync({ id: store.id, isAdmin }));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Muokkaa</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ padding: "1em" }}>
          <Basic {...store} setStore={setStore} isAdmin={isAdmin} />
          <EditLogo {...store} />
          <EditImages {...store} />
          <EditContact {...store} setStore={setStore} isAdmin={isAdmin} />
          <EditCategorie {...store} setStore={setStore} isAdmin={isAdmin} />
          <EditType {...store} setStore={setStore} isAdmin={isAdmin} />
          <Location {...store} setStore={setStore} isAdmin={isAdmin} />
          <EditSocialMedia {...store} setStore={setStore} />
          <EditIframe {...store} setStore={setStore} isAdmin={isAdmin} />
          <EditDriveto {...store} setStore={setStore} isAdmin={isAdmin} />
          <EditSettings {...store} setStore={setStore} isAdmin={isAdmin} />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={handleUnconfirm}
          color="error"
          sx={{
            display: isAdmin ? "block" : "none",
          }}
        >
          Poista vahvistus
        </Button>
        <Button onClick={onClose}>Sulje</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditItem;
