import React from "react";
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
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from "@mui/material/Select";
import { categories } from "./categories";
import type { SearchProps } from "./types";

export const Search = (props: SearchProps) => {
  const { search, setSearch, category, setCategory } = props;

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch({ ...search, search: event.target.value });

  const handleChangeArea = (event: SelectChangeEvent<typeof search.area>) =>
    setSearch({ ...search, area: event.target.value as string });

  const handleChangeCity = (event: SelectChangeEvent<typeof search.city>) =>
    setSearch({ ...search, city: event.target.value as string });

  const handleChangeCategory = (event: SelectChangeEvent<typeof category>) => {
    const { value } = event.target;
    setCategory(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={1}>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            id="search"
            label="Haku..."
            variant="outlined"
            value={search.search}
            onChange={handleChangeSearch}
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel id="category-label">Kategoria</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              label="Kategoria"
              multiple
              value={category}
              onChange={handleChangeCategory}
              input={<OutlinedInput label="Kategoria" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {categories.map((category) => (
                <MenuItem
                  key={category.id}
                  value={category.name}
                  hidden={category.hidden}
                >
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              id="area"
              label="Alue"
              value={search.area}
              onChange={handleChangeArea}
              input={<InputBase />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  <Chip key={selected} label={selected} />
                </Box>
              )}
            >
              <MenuItem value="Valitse alue">Valitse alue</MenuItem>
              <MenuItem value="Varsinais-suomi">Varsinais-suomi</MenuItem>
              <MenuItem value="Satakunta">Satakunta</MenuItem>
              <MenuItem value="Keski-suomi">Keski-suomi</MenuItem>
              <MenuItem value="Pirkanmaa">Pirkanmaa</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              id="city"
              label="Kaupunki"
              value={search.city}
              onChange={handleChangeCity}
              input={<InputBase />}
              disabled={search.area === "Valitse alue"}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  <Chip key={selected} label={selected} />
                </Box>
              )}
            >
              <MenuItem value="Valitse kaupunki">Valitse kaupunki</MenuItem>
              <MenuItem value="Helsinki">Helsinki</MenuItem>
              <MenuItem value="Espoo">Espoo</MenuItem>
              <MenuItem value="Vantaa">Vantaa</MenuItem>
              <MenuItem value="Tampere">Tampere</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};
