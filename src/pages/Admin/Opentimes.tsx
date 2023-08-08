import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Autocomplete,
  TextField,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import type { BoxProps } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import type { LazyStore, LazyOpentime } from "../../models";
import { Formik } from "formik";
import * as yup from "yup";
import { getDays, getCurrentDay } from "../../services/days";
import { fetchOpenTimesAsync } from "../../services/openTimeLib";

const StoreSelect = ({
  box,
  store,
  setStore,
}: {
  box?: BoxProps;
  store: LazyStore | null;
  setStore: React.Dispatch<React.SetStateAction<LazyStore | null>>;
}) => {
  const { data } = useAppSelector((state) => state.stores);

  return (
    <Box {...box}>
      <Autocomplete
        id="store-select"
        value={store}
        options={data || []}
        isOptionEqualToValue={(option, value) => option?.id === value?.id}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => setStore(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Valitse kauppa"
            placeholder="Kauppa"
          />
        )}
      />
    </Box>
  );
};

const OpentimeItem = ({
  box,
  item,
}: {
  box?: BoxProps;
  item: LazyOpentime;
}) => {
  const day = getCurrentDay("fi", item.day, true);
  const start = new Date(item.start || "").toLocaleTimeString("fi");
  const end = new Date(item.end || "").toLocaleTimeString("fi");
  const isClosed = item?.isClosed ? "Suljettu" : `${start} - ${end}`;

  return (
    <TableRow>
      <TableCell>{day}</TableCell>
      <TableCell>{isClosed}</TableCell>
    </TableRow>
  );
};

const Opentimes = ({ box }: { box?: BoxProps }) => {
  const [store, setStore] = useState<LazyStore | null>(null);
  const { opentimes } = useAppSelector((state) => state.opentimes);
  const dispatch = useAppDispatch();

  const getOpentimes = () => {
    if (!store) return null;
    dispatch(fetchOpenTimesAsync(store));
  };

  const handleLog = () => {
    console.log(opentimes);
  };

  return (
    <Box {...box}>
      <StoreSelect box={{ mb: 2 }} store={store} setStore={setStore} />
      <Button
        variant="contained"
        onClick={getOpentimes}
        disabled={!store}
        sx={{ mb: 2 }}
      >
        Hae aukioloajat
      </Button>
      <Button variant="contained" onClick={handleLog} sx={{ mb: 2 }}>
        Tallenna
      </Button>
    </Box>
  );
};

export default Opentimes;
