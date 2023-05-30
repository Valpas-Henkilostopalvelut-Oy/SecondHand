import React, { useState } from "react";
import {
  Box,
  TextField,
  Grid,
  Button,
  Autocomplete,
  Checkbox,
  FormControlLabel,
  type GridProps,
} from "@mui/material";
import areas from "./fi";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useParams } from "react-router-dom";
import { fetchStoreFilter } from "../../app/reducer/stores";
import { type StoreType, storeTypes } from "../storeType";

interface SearchValues {
  type: StoreType | null;
  search: string;
  area: string | null;
  category: string[] | null;
  city: string | null;
  isConfirmed: boolean;
}

interface BlockProps {
  grid?: GridProps;
  search?: SearchValues;
  value: string | string[] | null | boolean | undefined | StoreType;
  handleChange: (event: any, newValue: any) => void;
}

const searchValues: SearchValues = {
  type: null,
  search: "",
  area: null,
  category: null,
  city: null,
  isConfirmed: true,
};

const AteaSelect = (props: BlockProps) => {
  const uniqueArray = areas
    .map((item) => item.admin_name)
    .sort((a, b) => a.localeCompare(b))
    .filter((item, index, self) => index === self.findIndex((t) => t === item));

  return (
    <Grid {...props.grid}>
      <Autocomplete
        id="area-select"
        options={uniqueArray}
        value={props.value}
        onChange={props.handleChange}
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

const CitySelect = (props: BlockProps) => {
  const uniqueArray = areas
    .filter((item) => item.admin_name === props.search?.area)
    .map((item) => item.city)
    .sort((a, b) => a.localeCompare(b));

  return (
    <Grid {...props.grid}>
      <Autocomplete
        id="city-select"
        value={props.value}
        options={uniqueArray}
        onChange={props.handleChange}
        disabled={!props.search?.area}
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

const CategorySelect = (props: BlockProps) => {
  const { data } = useAppSelector((state) => state.categories);
  const uniqueArray = data?.map((item) => item.name);

  return (
    <Grid {...props.grid}>
      <Autocomplete
        multiple
        id="category-select"
        options={uniqueArray || []}
        value={props.search?.category || []}
        onChange={props.handleChange}
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

const TitleSelect = (props: BlockProps) => (
  <Grid {...props.grid}>
    <TextField
      fullWidth
      id="search"
      label="Haku..."
      variant="standard"
      value={props.value}
      onChange={(e) => props.handleChange(e, e.target.value)}
    />
  </Grid>
);

const ConfirmedSelect = (props: BlockProps) => {
  const [values, setValues] = useState(false);
  return (
    <Grid {...props.grid}>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "6px",
          margin: "16px 0px 8px 0px",
        }}
        onClick={() => setValues(!values)}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={props.search?.isConfirmed}
              onChange={props.handleChange}
              name="isConfirmed"
            />
          }
          label="Vahvistettu vain"
        />
      </Box>
    </Grid>
  );
};

const TypeSelect = (props: BlockProps) => (
  <Grid {...props.grid}>
    <Autocomplete
      id="type-select"
      options={storeTypes}
      value={props.search?.type}
      onChange={props.handleChange}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Tyyppi"
          placeholder="Valitse tyyppi"
          margin="normal"
          variant="outlined"
        />
      )}
    />
  </Grid>
);

export const AdminSearch = () => {
  const [data, setData] = useState(searchValues);
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector((state) => state.user);
  if (!isAdmin) return null;
  const handleClick = () =>
    dispatch(
      fetchStoreFilter({
        title: data.search,
        type: data.type?.id,
        category: data.category,
        area: data.area,
        city: data.city,
        isConfirmed: data.isConfirmed,
      })
    );

  const handleChangeTitle = (event: any, newValue: any) => {
    setData({ ...data, search: newValue });
  };
  const handleChangeArea = (event: any, newValue: any) => {
    setData({ ...data, area: newValue });
  };
  const handleChangeCity = (event: any, newValue: any) => {
    setData({ ...data, city: newValue });
  };
  const handleChangeCategory = (event: any, newValue: any) => {
    setData({ ...data, category: newValue });
  };
  const handleChangeType = (event: any, newValue: any) => {
    setData({ ...data, type: newValue });
  };
  const handleChangeConfirmed = (event: any, newValue: any) => {
    setData({ ...data, isConfirmed: newValue });
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <TitleSelect
        value={data.search}
        handleChange={handleChangeTitle}
        grid={{ item: true, xs: 12, sm: 10 }}
      />
      <Grid item xs={12} sm={2}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleClick}
        >
          Hae
        </Button>
      </Grid>
      <TypeSelect
        value={data.type}
        handleChange={handleChangeType}
        grid={{ item: true, xs: 12, sm: 6 }}
      />
      <CategorySelect
        grid={{ item: true, xs: 12, sm: 6 }}
        search={data}
        value={data.category}
        handleChange={handleChangeCategory}
      />
      <AteaSelect
        grid={{ item: true, xs: 12, sm: 4 }}
        search={data}
        value={data.area}
        handleChange={handleChangeArea}
      />
      <CitySelect
        grid={{ item: true, xs: 12, sm: 4 }}
        search={data}
        value={data.city}
        handleChange={handleChangeCity}
      />
      <ConfirmedSelect
        grid={{ item: true, xs: 12, sm: 4 }}
        search={data}
        value={data.isConfirmed}
        handleChange={handleChangeConfirmed}
      />
    </Grid>
  );
};

export const Search = () => {
  const [data, setData] = useState(searchValues);
  const dispatch = useAppDispatch();
  const { category } = useParams();
  const handleClick = () =>
    dispatch(
      fetchStoreFilter({
        title: data.search,
        type: category,
        category: data.category,
        area: data.area,
        city: data.city,
        isConfirmed: true,
      })
    );

  const handleChangeTitle = (event: any, newValue: any) => {
    setData({ ...data, search: newValue });
  };
  const handleChangeArea = (event: any, newValue: any) => {
    setData({ ...data, area: newValue });
  };
  const handleChangeCity = (event: any, newValue: any) => {
    setData({ ...data, city: newValue });
  };
  const handleChangeCategory = (event: any, newValue: any) => {
    setData({ ...data, category: newValue });
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={1} alignItems="center">
        <TitleSelect
          grid={{ item: true, xs: 12, sm: 10 }}
          value={data.search}
          handleChange={handleChangeTitle}
          search={data}
        />
        <Grid item sm={2} xs={12}>
          <Button variant="contained" fullWidth onClick={handleClick}>
            Hae
          </Button>
        </Grid>
        <CategorySelect
          grid={{ item: true, xs: 12, sm: 4 }}
          value={data.category}
          handleChange={handleChangeCategory}
          search={data}
        />
        <AteaSelect
          grid={{ item: true, xs: 12, sm: 4 }}
          value={data.area}
          handleChange={handleChangeArea}
          search={data}
        />
        <CitySelect
          grid={{ item: true, xs: 12, sm: 4 }}
          value={data.city}
          handleChange={handleChangeCity}
          search={data}
        />
      </Grid>
    </Box>
  );
};
