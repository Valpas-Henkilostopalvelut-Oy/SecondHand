import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Autocomplete,
  Checkbox,
  Collapse,
  styled,
  Typography,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik, FormikProps } from "formik";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createBusiness } from "../../redux/reducer/businessSlice";
import {
  Business,
  OpenHours,
  Periods,
  TimeOfDay,
} from "../../types/businesses";
import ImageUpload from "../../components/ImageUpload";
import { uploadData } from "@aws-amplify/storage";
import { DateTime } from "luxon";
import { TimePicker } from "@mui/x-date-pickers";

const days = [
  "Maanantai",
  "Tiistai",
  "Keskiviikko",
  "Torstai",
  "Perjantai",
  "Lauantai",
  "Sunnuntai",
];

const initialValues: Business = {
  name: "",
  address: "",
  description: null,
  websiteUrl: null,
  logo: null,
  typesID: "",
  locationsID: "",
  citiesID: "",

  openHours: null,
  contacts: null,
  social: null,
  images: null,
};

const dateToTimeOfDate = (
  date: DateTime<boolean> | null,
  day: number | null
): TimeOfDay => {
  if (!date || day === null)
    return { day: 0, hours: 0, minute: 0, date: { year: 0, month: 0, day: 0 } };
  return {
    day: day,
    hours: date.hour,
    minute: date.minute,
    date: {
      year: date.year,
      month: date.month,
      day: date.day,
    },
  };
};

const timeOfDateToDate = (timeOfDay: TimeOfDay): DateTime => {
  return DateTime.fromObject({
    year: timeOfDay.date.year,
    month: timeOfDay.date.month,
    day: timeOfDay.date.day,
    hour: timeOfDay.hours,
    minute: timeOfDay.minute,
  });
};

const BusinessOpenHours = ({
  formik,
}: {
  formik: FormikProps<Business>;
}): JSX.Element => {
  const enable =
    formik.values.openHours !== null && formik.values.openHours !== undefined;

  const handleEnable = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (enable) {
      formik.setFieldValue("openHours", null);
    } else {
      formik.setFieldValue("openHours", {
        openNow: false,
      });
    }
  };
  const handleAddNewTime = (period: Periods) => {
    const prevPeriod = formik.values.openHours?.period ?? [];
    // Sort per day
    prevPeriod.push(period);
    prevPeriod.sort((a, b) => a.open.day - b.open.day);
    formik.setFieldValue("openHours", {
      ...formik.values.openHours,
      period: prevPeriod,
    });
  };
  const handleDeleteTime = (index: number) => {
    const prevPeriod = formik.values.openHours?.period ?? [];
    prevPeriod.splice(index, 1);
    formik.setFieldValue("openHours", {
      ...formik.values.openHours,
      period: prevPeriod,
    });
  };
  const initialDate: Periods = {
    open: {
      day: 0,
      hours: 0,
      minute: 0,
      date: {
        year: 0,
        month: 0,
        day: 0,
      },
    },
    close: {
      day: 0,
      hours: 0,
      minute: 0,
      date: {
        year: 0,
        month: 0,
        day: 0,
      },
    },
  };
  const dateFormik = useFormik({
    initialValues: initialDate,
    onSubmit: (values) => handleAddNewTime(values),
  });

  // Day, open time, close time selectors

  return (
    <Box mt={2}>
      <Accordion>
        <AccordionSummary>
          <Typography>Open Hours</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            display="flex"
            flexDirection="column"
            component={"form"}
            onSubmit={dateFormik.handleSubmit}
          >
            <Box mb={2}>
              <Typography>Enable</Typography>
              <Checkbox
                checked={enable}
                onChange={handleEnable}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
            <Collapse in={enable}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Typography>Open day selector</Typography>
                  <Autocomplete
                    disablePortal
                    id="day"
                    options={days}
                    getOptionLabel={(option) => option}
                    onChange={(event, value) => {
                      dateFormik.setFieldValue(
                        "open.day",
                        value ? days.indexOf(value) : 0
                      );
                      dateFormik.setFieldValue(
                        "close.day",
                        value ? days.indexOf(value) : 0
                      );
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Day" variant="standard" />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography>Open time selector</Typography>
                  <TimePicker
                    label="Open time"
                    value={timeOfDateToDate(dateFormik.values.open)}
                    sx={{ width: "100%", marginTop: 2 }}
                    onChange={(date) => {
                      dateFormik.setFieldValue(
                        "open",
                        dateToTimeOfDate(date, dateFormik.values.open.day)
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography>Close time selector</Typography>
                  <TimePicker
                    label="Close time"
                    value={timeOfDateToDate(dateFormik.values.close)}
                    sx={{ width: "100%", marginTop: 2 }}
                    onChange={(date) => {
                      dateFormik.setFieldValue(
                        "close",
                        dateToTimeOfDate(date, dateFormik.values.close.day)
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Button type="submit">Add new time</Button>
                </Grid>
              </Grid>
            </Collapse>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export const BusinessCreateForm = () => {
  const {
    typeSlice: { businessTypes },
    locationSlice: { cities, locations },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      // Handle form submission, e.g., save to DataStore
      dispatch(createBusiness(values));
    },
  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) return;

    // Now you can upload the file using Amplify Storage
    uploadFile(file);
  };

  const uploadFile = async (file: File) => {
    // Save the file in public buisnesses folder
    try {
      const result = await uploadData({
        key: `businesses/${file.name}`,
        data: file,
      });
      console.log("File uploaded successfully", await result.result);
      formik.setFieldValue("logo", (await result.result).key);
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  return (
    <Container>
      <Box margin={"20px 0"}>
        <form onSubmit={formik.handleSubmit}>
          {/* Create TextFields for simple fields */}
          <Box mb={2}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Business Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>
          {/* Add other fields in a similar manner */}
          {/* For complex fields like categories, notes, openHours, contacts, social, etc., 
                you might need custom components or more complex form controls. */}
          <Box mb={2}>
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              multiline
              rows={4}
              value={formik.values.description ?? ""}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="websiteUrl"
              name="websiteUrl"
              label="Website URL"
              value={formik.values.websiteUrl ?? ""}
              onChange={formik.handleChange}
              error={
                formik.touched.websiteUrl && Boolean(formik.errors.websiteUrl)
              }
              helperText={formik.touched.websiteUrl && formik.errors.websiteUrl}
            />
          </Box>
          <Box mb={2}>
            <ImageUpload onFileChange={handleFileChange} />
          </Box>
          <Box mb={2}>
            <Autocomplete
              disablePortal
              id="typesID"
              options={businessTypes ?? []}
              getOptionLabel={(option) => option.name}
              onChange={(event, value) => {
                formik.setFieldValue("typesID", value?.id);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Types ID" variant="standard" />
              )}
            />
          </Box>
          <Box mb={2}>
            <Autocomplete
              disablePortal
              id="locationsID"
              options={locations ?? []}
              getOptionLabel={(option) => option.adminName}
              onChange={(event, value) => {
                formik.setFieldValue("locationsID", value?.id);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Locations ID"
                  variant="standard"
                />
              )}
            />
          </Box>
          <Box mb={2}>
            <Autocomplete
              disablePortal
              id="cityID"
              options={cities ?? []}
              getOptionLabel={(option) => option.name}
              onChange={(event, value) => {
                formik.setFieldValue("citiesID", value?.id);
              }}
              renderInput={(params) => (
                <TextField {...params} label="City ID" variant="standard" />
              )}
            />
          </Box>

          <Button color="primary" variant="contained" fullWidth type="submit">
            Create Business
          </Button>
        </form>
        <BusinessOpenHours formik={formik} />
      </Box>
    </Container>
  );
};
