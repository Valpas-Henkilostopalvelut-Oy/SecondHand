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
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import type { AccordionProps, BoxProps } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import type { LazyStore, LazyOpentime } from "../../models";
import { OpentimesType } from "../../models";
import { useFormik } from "formik";
import * as yup from "yup";
import { getCurrentDay, getDays } from "../../services/days";
import {
  fetchOpenTimesAsync,
  deleteOpenTimeAsync,
  createOpenTimeAsync,
  getSortedByTypes,
  getSorted,
} from "../../services/openTimeLib";
import { Clear } from "@mui/icons-material";
import type { SortedTimes } from "../../types/opentimes";
import {
  TimeField,
  LocalizationProvider,
  MobileDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import fi from "date-fns/locale/fi";

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

const OpenTimeForm = ({
  box,
  store,
  accordion,
}: {
  box?: BoxProps;
  store: LazyStore | null;
  accordion?: AccordionProps;
}) => {
  const days = getDays("fi", true);
  const formik = useFormik({
    initialValues: {
      store: store?.id || "",
      type: OpentimesType.CUSTOM,
      day: 0,
      date: null,
      start: null,
      end: null,
      isClosed: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box {...box}>
      <Accordion {...accordion}>
        <AccordionSummary>Uusi aukioloaika</AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                options={Object.values(OpentimesType)}
                value={formik.values.type}
                onChange={(event, newValue) => {
                  if (!newValue) return;
                  formik.setFieldValue("type", newValue);
                }}
                onBlur={formik.handleBlur}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Tyyppi"
                    variant="outlined"
                    error={formik.touched.type && Boolean(formik.errors.type)}
                    helperText={formik.touched.type && formik.errors.type}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                options={days}
                value={days[formik.values.day]}
                onChange={(event, newValue) => {
                  if (!newValue) return;
                  formik.setFieldValue("day", days.indexOf(newValue));
                }}
                onBlur={formik.handleBlur}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Päivä"
                    variant="outlined"
                    error={formik.touched.day && Boolean(formik.errors.day)}
                    helperText={formik.touched.day && formik.errors.day}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={fi}
              >
                <MobileDatePicker
                  label="Päivämäärä"
                  value={formik.values.start}
                  onChange={(value) => formik.setFieldValue("start", value)}
                />
              </LocalizationProvider>
              {formik.values.isClosed ||
                formik.values.type === OpentimesType.DEFAULT ||
                (formik.errors.start && formik.touched.start && (
                  <Typography color="red">{formik.errors.start}</Typography>
                ))}
            </Grid>
            <Grid item xs={12} sm={3}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={fi}
              >
                <TimeField
                  label="Avataan"
                  value={formik.values.start}
                  onChange={(value) => formik.setFieldValue("start", value)}
                  disabled={formik.values.isClosed}
                />
              </LocalizationProvider>
              {formik.errors.start &&
                formik.touched.end &&
                !formik.values.isClosed && (
                  <Typography color="red">{formik.errors.start}</Typography>
                )}
            </Grid>
            <Grid item xs={12} sm={3}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={fi}
              >
                <TimeField
                  label="Suljetaan"
                  value={formik.values.end}
                  onChange={(value) => formik.setFieldValue("end", value)}
                  disabled={formik.values.isClosed}
                />
              </LocalizationProvider>
              {formik.errors.end &&
                formik.touched.end &&
                !formik.values.isClosed && (
                  <Typography color="red">{formik.errors.end}</Typography>
                )}
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formik.values.isClosed}
                    onChange={(event) => {
                      formik.setFieldValue("isClosed", event.target.checked);
                    }}
                  />
                }
                label="Suljettu"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={formik.submitForm}>
                Tallenna
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const OpentimeItem = ({ item }: { box?: BoxProps; item: SortedTimes }) => {
  const day = getCurrentDay("fi", item.day_first, true);
  const start = new Date(item.start || "").toLocaleTimeString("fi");
  const end = new Date(item.end || "").toLocaleTimeString("fi");
  const isClosed = item?.isClosed ? "Suljettu" : `${start} - ${end}`;
  const handleDelete = () => {
    console.log(item);
  };

  return (
    <TableRow>
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

const OpentTimeTypeTable = ({
  box,
  type,
  days,
}: {
  box?: BoxProps;
  type: string;
  days: SortedTimes[];
}) => (
  <Box {...box}>
    <Typography variant="h6">
      {type === OpentimesType.DEFAULT ? "Aukioloajat" : "Poikkeusaukioloajat"}
    </Typography>
    <TableContainer>
      <Table>
        <TableBody>
          {days?.map((item) => (
            <OpentimeItem key={item.day_first} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

const Opentimes = ({ box }: { box?: BoxProps }) => {
  const [store, setStore] = useState<LazyStore | null>(null);
  const { opentimes } = useAppSelector((state) => state.opentimes);
  const sorted = getSortedByTypes({
    times: opentimes || [],
    func: getSorted,
  });
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

      <OpenTimeForm box={{ mb: 2 }} store={store} />

      {store &&
        sorted?.map((item) => (
          <OpentTimeTypeTable
            key={item.type}
            type={item.type}
            days={item.days}
          />
        ))}
    </Box>
  );
};

export default Opentimes;
