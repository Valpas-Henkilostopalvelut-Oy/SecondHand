import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  styled,
  Grid,
  TextField,
  Button,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import img from "./homepage.jpg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { search } from "../../redux/reducer/searchSlice";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { SearchQuery } from "../../types/search";
import { onUpdate } from "../../redux/reducer/searchSlice";

const HomeMainImage = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${img})`,
  padding: "300px 0px",
}));

const HomeTypography = styled(Typography)(({ theme }) => ({
  color: "#fff",
}));

const HomeContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "50px",
}));

const SearchInput = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    search: "",
    type: null,
    adminName: null,
  });

  const {
    typeSlice: { businessTypes },
    locationSlice: { locations },
  } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(onUpdate(searchQuery));
  }, [searchQuery, dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <Box sx={{ width: "25%" }}>
        <TextField
          id="search-field"
          name="search"
          label="Hae..."
          variant="outlined"
          value={searchQuery.search}
          onChange={(e) => {
            setSearchQuery({ ...searchQuery, search: e.target.value });
          }}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box sx={{ width: "25%" }}>
        <Autocomplete
          id="type-select"
          fullWidth
          options={businessTypes ?? []}
          getOptionLabel={(option) => option.name}
          value={searchQuery.type}
          onChange={(e, value) => {
            setSearchQuery({ ...searchQuery, type: value });
          }}
          renderInput={(params) => (
            <TextField {...params} label="Tyyppi" variant="outlined" />
          )}
        />
      </Box>
      <Box sx={{ width: "25%" }}>
        <Autocomplete
          id="location-select"
          fullWidth
          options={locations ?? []}
          getOptionLabel={(option) => option.adminName}
          value={searchQuery.adminName}
          onChange={(e, value) => {
            setSearchQuery({ ...searchQuery, adminName: value });
          }}
          renderInput={(params) => (
            <TextField {...params} label="Sijainti" variant="outlined" />
          )}
        />
      </Box>
      <Box sx={{ width: "25%" }}>
        <Button
          fullWidth
          variant="contained"
          component={Link}
          to={`/businesses`}
          onClick={() => {
            search(searchQuery);
          }}
        >
          Hae
        </Button>
      </Box>
    </Box>
  );
};

export const Homepage = (): JSX.Element => {
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
        <SearchInput />
      </HomeContainer>
    </HomeMainImage>
  );
};
