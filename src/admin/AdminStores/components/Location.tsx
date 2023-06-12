import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Autocomplete,
  Button,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { addLocation } from "../redux/newstore";
import areas from "./fi.js";
import Iframe from "./Iframe";
import Drivetourl from "./Drivetourl";

const Location = () => {
  const values = useAppSelector((state) => state.newstore).location;
  const dispatch = useAppDispatch();
  const { address, zip } = values;
  const uniqueArray = areas
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.admin_name === item.admin_name)
    )
    .map((item) => item.admin_name);
  const filteredArray = areas.filter(
    (item) => item.admin_name === values?.admin_name
  );

  const uniqueFilteredArray = filteredArray.filter(
    (item, index, self) => index === self.findIndex((t) => t.city === item.city)
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "address")
      dispatch(addLocation({ ...values, address: value }));
    if (name === "zip") dispatch(addLocation({ ...values, zip: value }));
  };
  const handleChangeArea = (e: any, newValue: string | null) => {
    dispatch(addLocation({ ...values, admin_name: newValue }));
  };
  const handleChangeCity = (e: any, newValue: any) => {
    dispatch(addLocation({ ...values, ...newValue }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <Typography variant="h6">Sijainti</Typography>
      </Grid>
      <Grid item sm={6} xs={12}>
        <TextField
          name="address"
          label="Toimipaikan sijainti"
          variant="outlined"
          fullWidth
          value={address || ""}
          onChange={handleChange}
          helperText="Toimipaikan sijainti"
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <TextField
          name="zip"
          label="Postinumero"
          variant="outlined"
          fullWidth
          value={zip || ""}
          onChange={handleChange}
          helperText="Postinumero"
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <Autocomplete
          id="area-select"
          fullWidth
          onChange={handleChangeArea}
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
          disabled={values?.admin_name === null}
          options={uniqueFilteredArray.sort((a, b) =>
            a.city.localeCompare(b.city)
          )}
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
      <Grid item sm={6} xs={12}>
        <Iframe />
      </Grid>
      <Grid item sm={6} xs={12}>
        <Drivetourl />
      </Grid>
    </Grid>
  );
};

export default Location;
