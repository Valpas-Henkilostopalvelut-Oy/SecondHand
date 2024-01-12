import React from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Autocomplete,
  styled,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createBusiness } from "../../redux/reducer/businessSlice";
import { Business } from "../../types/businesses";

export const BusinessCreateForm = () => {
  const {
    typeSlice: { businessTypes },
    locationSlice: { cities, locations },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const initialValues: Business = {
    name: "",
    address: "",
    description: null,
    websiteUrl: null,
    logo: null,
    typesID: "",
    locationsID: "",
    citiesID: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      // Handle form submission, e.g., save to DataStore
      dispatch(createBusiness(values));
    },
  });

  return (
    <Container>
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
            helperText={formik.touched.description && formik.errors.description}
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
          <TextField
            fullWidth
            id="logo"
            name="logo"
            label="Logo URL"
            value={formik.values.logo ?? ""}
            onChange={formik.handleChange}
            error={formik.touched.logo && Boolean(formik.errors.logo)}
            helperText={formik.touched.logo && formik.errors.logo}
          />
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
              <TextField {...params} label="Locations ID" variant="standard" />
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
    </Container>
  );
};
