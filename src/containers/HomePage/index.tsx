import React from "react";
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
import { search } from "../../redux/reducer/searchSlice";
import { regions } from "../Businesses";
import { Link } from "react-router-dom";
import businessTypes from "../../testdata/businessType";
import { BusinessType } from "../../types/businessType";

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

  const {
    search: { searchQuery: values },
  } = useAppSelector((state) => state.business);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(search({ ...values, [name]: value }));
  };

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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                name="search"
                type="text"
                label="Hae"
                onChange={handleChange}
                value={values.search}
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Autocomplete
                disablePortal
                id="Types-Autocomplete"
                options={businessTypes}
                fullWidth
                onChange={(event, value) => {
                  dispatch(search({ ...values, type: value }));
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Typpi" variant="standard" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Autocomplete
                disablePortal
                id="Area-Autocomplete"
                options={regions}
                onChange={(event, value) => {
                  dispatch(search({ ...values, adminName: value }));
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Alue" variant="standard" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link to="/businesses">Hae</Link>
            </Grid>
          </Grid>
        </HomeBox>
      </HomeContainer>
    </HomeMainImage>
  );
};
