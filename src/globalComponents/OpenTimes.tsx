import React from "react";
import {
  Box,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Autocomplete,
  TextField,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import type {
  TableRowProps,
  BoxProps,
  AutocompleteRenderInputParams,
  AccordionProps,
} from "@mui/material";
import { TimeField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import fi from "date-fns/locale/fi";
import getCurrentDay, { getDays } from "../services/days";
import { useFormik } from "formik";
import * as yup from "yup";
import { Delete, Add } from "@mui/icons-material";
import type { OpenTimesProps } from "../types/opentimes";

const OpenTimeItem = ({
  openTime,
  tablerow,
  onDelete,
}: {
  openTime: OpenTimesProps;
  tablerow?: TableRowProps;
  onDelete?: (id: string) => void;
}) => {
  const { day, start, end, isClosed } = openTime;
  const dayName = getCurrentDay("fi", day, true);
  const open = new Date(start ? start : "").toLocaleTimeString("fi-FI", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const close = new Date(end ? end : "").toLocaleTimeString("fi-FI", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const closed = isClosed ? "Suljettu" : null;
  return (
    <TableRow {...tablerow}>
      <TableCell>{dayName}</TableCell>
      <TableCell>{open}</TableCell>
      <TableCell>{close}</TableCell>
      <TableCell>{closed}</TableCell>
      <TableCell>
        <IconButton
          onClick={() => {
            if (onDelete && openTime.id) onDelete(openTime.id);
          }}
        >
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export const AddOpenTime = ({
  accordion,
  onAdd,
  children,
}: {
  accordion?: AccordionProps;
  onAdd?: (opentime: OpenTimesProps) => void;
  children?: JSX.Element;
}) => {
  const days = getDays("fi", true);
  const formik = useFormik({
    initialValues: {
      day: 0,
      start: null,
      end: null,
      isClosed: false,
    },
    onSubmit: (values) => {
      if (onAdd) onAdd(values);
    },
    validationSchema: yup.object({
      day: yup.number().required("Päivä on pakollinen"),
      start: yup.string().required("Auki on pakollinen"),
      end: yup.string().required("Sulkeutuu on pakollinen"),
      isClosed: yup.boolean(),
    }),
  });
  return (
    <Accordion {...accordion}>
      <AccordionSummary>Uusi aukioloaika</AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} hidden={!children}>
            {children}
          </Grid>
          <Grid item xs={12} sm={2.5}>
            <Autocomplete
              options={days}
              value={days[formik.values.day || 0]}
              onChange={(event, newValue) => {
                if (!newValue) return;
                formik.setFieldValue("day", days.indexOf(newValue));
              }}
              onBlur={formik.handleBlur}
              renderInput={(params: AutocompleteRenderInputParams) => (
                <TextField
                  {...params}
                  label="Päivä"
                  variant="outlined"
                  fullWidth
                  error={formik.touched.day && !!formik.errors.day}
                  helperText={formik.touched.day && formik.errors.day}
                />
              )}
            />
          </Grid>
          <Grid item xs={6} sm={2.5}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={fi}
            >
              <TimeField
                label="Auki"
                value={formik.values.start}
                name="start"
                onChange={(value) => formik.setFieldValue("start", value)}
                onBlur={formik.handleBlur}
                helperText={formik.touched.start && formik.errors.start}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} sm={3}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={fi}
            >
              <TimeField
                label="Sulkeutuu"
                value={formik.values.end}
                name="end"
                onChange={(value) => formik.setFieldValue("end", value)}
                onBlur={formik.handleBlur}
                helperText={formik.touched.end && formik.errors.end}
              />
            </LocalizationProvider>
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
          <Grid item xs={12} sm={1}>
            <IconButton onClick={formik.submitForm}>
              <Add />
            </IconButton>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

const OpenTimes = ({
  box,
  opentimes,
  onAdd,
  onDelete,
}: {
  box?: BoxProps;
  opentimes: OpenTimesProps[];
  onAdd?: (opentime: OpenTimesProps) => void;
  onDelete?: (id: string) => void;
  isInNew?: boolean;
}) => (
  <Box {...box}>
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell colSpan={5}>
              <AddOpenTime onAdd={onAdd} />
            </TableCell>
          </TableRow>
          {opentimes
            .sort((a, b) => a.day - b.day)
            .map((opentime, index) => (
              <OpenTimeItem
                key={index}
                openTime={opentime}
                onDelete={onDelete}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default OpenTimes;
