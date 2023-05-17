import React, { useState } from "react";
import { TextField, Grid, Autocomplete } from "@mui/material";
import areas from "./fi.js";

const Location = (props: any) => {
  const { location, setNewStore } = props;
  const address = location?.address;
  const zip = location?.zip;
  const admin_name = location.admin_name;

  const uniqueArray = areas
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.admin_name === item.admin_name)
    )
    .map((item) => item.admin_name);
  const filteredArray = areas.filter((item) => item.admin_name === admin_name);

  const uniqueFilteredArray = areas.filter(
    (item, index, self) => index === self.findIndex((t) => t.city === item.city)
  );

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStore((prev: any) => ({
      ...prev,
      location: {
        ...prev.location,
        [name]: value,
      },
    }));
  };

  const handleChangeAdminname = (e: any, newValue: any) => {
    if (newValue) {
      setNewStore((prev: any) => ({
        ...prev,
        location: {
          ...prev.location,
          admin_name: newValue,
        },
      }));
    }
  };

  const handleChangeCity = (e: any, newValue: any) => {
    if (newValue) {
      setNewStore((prev: any) => ({
        ...prev,
        location: {
          ...prev.location,
          ...newValue,
        },
      }));
    }
  };

  return (
    <>
      <Grid item sm={6} xs={12}>
        <TextField
          name="address"
          label="Osoite"
          variant="outlined"
          fullWidth
          value={address}
          onChange={handleChangeText}
          helperText="Osoite"
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <TextField
          name="zip"
          label="Postinumero"
          variant="outlined"
          fullWidth
          value={zip || ""}
          onChange={handleChangeText}
          helperText="Postinumero"
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <Autocomplete
          id="area-select"
          fullWidth
          value={admin_name}
          onChange={handleChangeAdminname}
          options={uniqueArray.sort((a, b) => a.localeCompare(b))}
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
      <Grid item sm={6} xs={12}>
        <Autocomplete
          id="city-select"
          value={location}
          disabled={!admin_name}
          options={uniqueFilteredArray.sort((a, b) =>
            a.city.localeCompare(b.city)
          )}
          isOptionEqualToValue={(option, value) =>
            option.admin_name === admin_name
          }
          fullWidth
          getOptionLabel={(option) => option.city}
          onChange={handleChangeCity}
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
    </>
  );
};

export default Location;
