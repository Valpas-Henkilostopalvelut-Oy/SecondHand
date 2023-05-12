import React, { useEffect, useState } from "react";
/**import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Autocomplete,
} from "@mui/material";

import type { NewStoreProps } from "../types.js";
import type { LazyLocation } from "../../../../models";

export const AreaSelect = (props: NewStoreProps) => {
  const { values, setValues } = props;
  const [area, setArea] = useState(null);

 

  const uniqueArray = areas
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.admin_name === item.admin_name)
    )
    .map((item) => item.admin_name);

  const handleChange = (e: any, newValue: any) => {
    setArea(newValue);
  };

  useEffect(() => {
    setValues({
      ...values,
      location: { ...values.location, admin_name: area },
    });
  }, [area]);

  return (
    <Grid item sm={4}>
      <Autocomplete
        id="area-select"
        options={uniqueArray}
        getOptionLabel={(option) => option}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Alue"
            variant="outlined"
            helperText="Kirppiksen alue"
          />
        )}
      />
    </Grid>
  );
};

export const CitySelect = (props: NewStoreProps) => {
  const { values, setValues } = props;
  const [city, setCity] = useState<LazyLocation | null>(null);

  areas.sort((a, b) => a.city.localeCompare(b.city));

  const filteredArray = areas.filter(
    (item) => item.admin_name === values?.location?.admin_name
  );

  const uniqueFilteredArray = filteredArray.filter(
    (item, index, self) => index === self.findIndex((t) => t.city === item.city)
  );

  useEffect(() => {
    if (city !== null) {
      setValues({
        ...values,
        location: { ...values.location, ...city },
      });
    }
  }, [city]);

  useEffect(() => {
    setCity(null);
  }, [values?.location?.admin_name]);

  return (
    <Grid item sm={4}>
      <Autocomplete
        id="city-select"
        disabled={values?.location?.admin_name === null}
        options={uniqueFilteredArray}
        getOptionLabel={(option) => option.city}
        onChange={(e: any, newValue: any) => {
          setCity(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Kaupunki"
            variant="outlined"
            helperText="Kirppiksen kaupunki"
          />
        )}
      />
    </Grid>
  );
};
*/
