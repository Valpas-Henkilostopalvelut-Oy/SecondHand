import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  InputBase,
  FormControl,
  Chip,
  MenuItem,
  Grid,
  OutlinedInput,
  InputLabel,
  Button,
  Autocomplete,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from "@mui/material/Select";

import type { SearchProps, SearchState } from "../../pages/Storelist/types";
import type { LazyCategories } from "../../models";
import { Categories } from "../../models";
import { DataStore } from "aws-amplify";
import areas from "./fi.js";

const AteaSelect = (props: SearchProps) => {
  const { search, setSearch } = props;
  const [area, setArea] = useState("");

  useEffect(() => setSearch({ ...search, area: area }), [area]);

  areas.sort((a, b) => a.admin_name.localeCompare(b.admin_name));

  const uniqueArray = areas
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.admin_name === item.admin_name)
    )
    .map((item) => item.admin_name);

  const handleChange = (e: any, newValue: any) => setArea(newValue);

  return (
    <Grid item sm={2}>
      <Autocomplete
        id="area-select"
        options={uniqueArray}
        getOptionLabel={(option) => option}
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

const CitySelect = (props: SearchProps) => {
  const { search, setSearch } = props;
  const [city, setCity] = useState("");

  useEffect(() => setSearch({ ...search, city: city }), [city]);

  areas.sort((a, b) => a.city.localeCompare(b.city));

  const filteredArray = areas.filter((item) => item.admin_name === search.area);

  const uniqueFilteredArray = filteredArray.filter(
    (item, index, self) => index === self.findIndex((t) => t.city === item.city)
  );

  const handleChange = (e: any, newValue: any) => setCity(newValue);

  return (
    <Grid item sm={2}>
      <Autocomplete
        id="city-select"
        options={uniqueFilteredArray}
        getOptionLabel={(option) => option.city}
        onChange={handleChange}
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

const CategorySelect = (props: SearchProps) => {
  const { search, setSearch } = props;
  const [categories, setCategories] = useState<LazyCategories[]>([]);

  const handleChange = (event: unknown, newValue: any) => {
    setSearch({
      ...search,
      category: newValue.map((item: LazyCategories) => item.name),
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await DataStore.query(Categories);
      setCategories(categories);
    };

    fetchCategories();
  }, []);

  return (
    <Grid item sm={4}>
      <Autocomplete
        multiple
        id="category-select"
        options={categories}
        getOptionLabel={(option) => option.name || ""}
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

export const Search = (props: SearchProps) => {
  const { search, setSearch, onClick } = props;

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch({ ...search, search: event.target.value });

  return (
    <Box sx={{ mt: 4 }}>
      <Box>
        <Grid container spacing={1}>
          <Grid item sm={10} xs={12}>
            <TextField
              fullWidth
              id="search"
              label="Haku..."
              variant="outlined"
              value={search.search}
              onChange={handleChangeSearch}
            />
          </Grid>

          <Grid item sm={2} xs={12}>
            <Button
              fullWidth
              variant="contained"
              onClick={onClick}
              sx={{ mt: 2, mb: 2 }}
            >
              Hae
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container spacing={1}>
          <CategorySelect {...props} />
          <AteaSelect {...props} />
          <CitySelect {...props} />
        </Grid>
      </Box>
    </Box>
  );
};
