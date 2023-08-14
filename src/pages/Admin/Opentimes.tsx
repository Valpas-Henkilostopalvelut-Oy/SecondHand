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
  IconButton,
} from "@mui/material";
import type { BoxProps } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import type { LazyStore, LazyOpentime } from "../../models";
import { OpentimesType } from "../../models";
import { useFormik } from "formik";
import * as yup from "yup";
import { getDays, getCurrentDay, getOpenTimeType } from "../../services/days";
import {
  fetchOpenTimesAsync,
  deleteOpenTimeAsync,
  createOpenTimeAsync,
} from "../../services/openTimeLib";
import { Clear } from "@mui/icons-material";
import { AddOpenTime } from "../../globalComponents/OpenTimes";

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
  const type = item.type;
  const dispatch = useAppDispatch();
  const day = getCurrentDay("fi", item.day, true);
  const start = new Date(item.start || "").toLocaleTimeString("fi");
  const end = new Date(item.end || "").toLocaleTimeString("fi");
  const isClosed = item?.isClosed ? "Suljettu" : `${start} - ${end}`;
  const handleDelete = () => {
    dispatch(deleteOpenTimeAsync(item.id));
  };

  return (
    <TableRow>
      <TableCell>{type}</TableCell>
      <TableCell>{day}</TableCell>
      <TableCell>{isClosed}</TableCell>
      <TableCell>
        <IconButton onClick={handleDelete}>
          <Clear />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const Opentimes = ({ box }: { box?: BoxProps }) => {
  const [store, setStore] = useState<LazyStore | null>(null);
  const [type, setType] = useState<OpentimesType | null>(OpentimesType.CUSTOM);
  const { opentimes } = useAppSelector((state) => state.opentimes);
  const dispatch = useAppDispatch();

  const getOpentimes = () => {
    if (!store) return null;
    dispatch(fetchOpenTimesAsync(store.id));
  };

  const handleLog = () => {
    console.log(opentimes);
  };

  return (
    <Box {...box}>
      <Box>
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
      <AddOpenTime
        onAdd={(opentime) => {
          if (!store) return null;
          if (
            opentimes?.find(
              (item) => item.day === opentime.day && item.type === type
            )
          )
            return null;
          dispatch(
            createOpenTimeAsync({
              openTime: opentime,
              store: store,
              type: type || OpentimesType.CUSTOM,
            })
          );
        }}
      >
        <Autocomplete
          options={getOpenTimeType()}
          renderInput={(params) => <TextField {...params} />}
          onChange={(event, value) => setType(value)}
          value={type}
        />
      </AddOpenTime>
      <TableContainer>
        <Table>
          <TableBody>
            {store &&
              opentimes?.map((item) => {
                if (item.storeID !== store.id) return null;
                return <OpentimeItem key={item.id} item={item} />;
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Opentimes;
