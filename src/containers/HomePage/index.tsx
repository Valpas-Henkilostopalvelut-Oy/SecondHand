import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import {
  Container,
  Box,
  Typography,
  styled,
  Grid,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import img from "./homepage.jpg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { onUpdate, initialState } from "../../redux/reducer/searchSlice";
import { categories, regions } from "../Businesses";
import { Link } from "react-router-dom";

const HomeMainImage = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${img})`,
  padding: "300px 0px",
}));

const HomeTypography = styled(Typography)(({ theme }) => ({
  color: "#fff",
}));

const HomeBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "3px",
}));

const HomeContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "50px",
}));

export const Homepage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <HomeMainImage>
      <HomeContainer>
        <Box>
          <HomeTypography variant="h4">Löydä etsimäsi</HomeTypography>
          <HomeTypography variant="body1">
            Suomen parhaat design- ja antiikkiliikkeet sekä tapahtumat yhdessä
            paikassa
          </HomeTypography>
        </Box>
        <HomeBox>
          <Formik
            initialValues={initialState}
            onSubmit={(values) => {
              dispatch(onUpdate(values));
            }}
          >
            {({ handleChange, handleBlur, values, setFieldValue }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      name="search"
                      type="text"
                      label="Hae"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.search}
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Autocomplete
                      disablePortal
                      id="Category-Autocomplete"
                      options={categories}
                      fullWidth
                      onChange={(event, value) => {
                        setFieldValue("category", value);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Kategoria"
                          variant="standard"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Autocomplete
                      disablePortal
                      id="Area-Autocomplete"
                      options={regions}
                      onChange={(event, value) => {
                        setFieldValue("region", value);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Alue"
                          variant="standard"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Button type="submit" variant="contained" fullWidth>
                      Etsi
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </HomeBox>
      </HomeContainer>
    </HomeMainImage>
  );
};
