import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Grid,
  Button,
  Autocomplete,
  type GridProps,
} from "@mui/material";
import areas from "./fi";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setCategory, setArea, setCity, setSearch } from "./redux/search";
import { useParams } from "react-router-dom";

const AteaSelect = (props: GridProps) => {
  const { area } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const uniqueArray = areas
    .map((item) => item.admin_name)
    .sort((a, b) => a.localeCompare(b))
    .filter((item, index, self) => index === self.findIndex((t) => t === item));

  const handleChange = (e: any, newValue: string | null) =>
    dispatch(setArea(newValue));

  return (
    <Grid {...props}>
      <Autocomplete
        id="area-select"
        options={uniqueArray}
        value={area}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Alue"
            placeholder="Valitse alue"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </Grid>
  );
};

const CitySelect = (props: GridProps) => {
  const { area, city } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const uniqueArray = areas
    .filter((item) => item.admin_name === area)
    .map((item) => item.city)
    .sort((a, b) => a.localeCompare(b));

  const handleChange = (e: any, newValue: string | null) =>
    dispatch(setCity(newValue));

  return (
    <Grid {...props}>
      <Autocomplete
        id="city-select"
        value={city}
        options={uniqueArray}
        onChange={handleChange}
        disabled={!area}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Kaupunki"
            placeholder="Valitse kaupunki"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </Grid>
  );
};

const CategorySelect = (props: GridProps) => {
  const { data } = useAppSelector((state) => state.categories);
  const { category } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const uniqueArray = data?.map((item) => item.name);
  const handleChange = (e: any, newValue: any) =>
    dispatch(setCategory(newValue));

  return (
    <Grid {...props}>
      <Autocomplete
        multiple
        id="category-select"
        options={uniqueArray || []}
        value={category || []}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Kategoria"
            placeholder="Valitse kategoria"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </Grid>
  );
};

const TitleSelect = (props: GridProps) => {
  const { search } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearch(e.target.value));

  return (
    <Grid {...props}>
      <TextField
        fullWidth
        id="search"
        label="Haku..."
        variant="outlined"
        value={search}
        onChange={handleChange}
      />
    </Grid>
  );
};

export const Search = () => {
  const data = useAppSelector((state) => state.search);
  const { category } = useParams();
  const handleClick = () => console.log(data, category);
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={1}>
        <TitleSelect item sm={4} xs={12} />
        <CategorySelect item sm={4} xs={12} />
        <AteaSelect item sm={4} xs={12} />
        <CitySelect item sm={4} xs={12} />
        <Grid item sm={4} xs={12}>
          <Button variant="contained" fullWidth onClick={handleClick}>
            Hae
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
