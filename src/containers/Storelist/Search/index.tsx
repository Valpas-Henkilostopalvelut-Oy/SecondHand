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
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from "@mui/material/Select";

import type { SearchProps } from "../types";
import type { LazyCategories } from "../../../models";
import { Categories } from "../../../models";
import { DataStore } from "aws-amplify";

export const Search = (props: SearchProps) => {
  const { search, setSearch, onClick } = props;
  const [categories, setCategories] = useState<LazyCategories[]>([]);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch({ ...search, search: event.target.value });

  const handleChangeArea = (event: SelectChangeEvent<typeof search.area>) =>
    setSearch({ ...search, area: event.target.value as string });

  const handleChangeCity = (event: SelectChangeEvent<typeof search.city>) =>
    setSearch({ ...search, city: event.target.value as string });

  const handleChangeCategory = (
    event: SelectChangeEvent<typeof search.category>
  ) => {
    const { value } = event.target;
    setSearch({ ...search, category: value as LazyCategories[] });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await DataStore.query(Categories);
      setCategories(categories);
    };

    fetchCategories();
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
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

      <Box>
        <FormControl sx={{ m: "0.5em 0em", minWidth: 120 }}>
          <InputLabel id="category-label">Kategoria</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            label="Kategoria"
            multiple
            value={search.category}
            onChange={handleChangeCategory}
            input={<OutlinedInput label="Kategoria" />}
            defaultValue={[]}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value: any) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {categories.map((category: any) => {
              if (!category) return null;
              return (
                <MenuItem key={category.id} value={category.name}>
                  {category.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl sx={{ m: "0.5em 0.75em", minWidth: 120 }}>
          <InputLabel id="area-label">Alue</InputLabel>
          <Select
            id="area"
            label="Alue"
            value={search.area}
            onChange={handleChangeArea}
            placeholder="Valitse alue"
            defaultValue=""
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                <Chip key={selected} label={selected} />
              </Box>
            )}
          >
            <MenuItem value="">Valitse alue</MenuItem>
            <MenuItem value="Varsinais-suomi">Varsinais-suomi</MenuItem>
            <MenuItem value="Satakunta">Satakunta</MenuItem>
            <MenuItem value="Keski-suomi">Keski-suomi</MenuItem>
            <MenuItem value="Pirkanmaa">Pirkanmaa</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: "0.5em 0em", minWidth: 120 }}>
          <InputLabel id="city-label">Kaupunki</InputLabel>
          <Select
            id="city"
            label="Kaupunki"
            value={search.city}
            onChange={handleChangeCity}
            placeholder="Valitse kaupunki"
            disabled={search.area === ""}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                <Chip key={selected} label={selected} />
              </Box>
            )}
          >
            <MenuItem value="">Valitse kaupunki</MenuItem>
            <MenuItem value="Helsinki">Helsinki</MenuItem>
            <MenuItem value="Espoo">Espoo</MenuItem>
            <MenuItem value="Vantaa">Vantaa</MenuItem>
            <MenuItem value="Tampere">Tampere</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
