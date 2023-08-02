import React, { useState } from "react";
import { TextField, Grid, Autocomplete } from "@mui/material";
import areas from "./fi.js";
import { useAppDispatch } from "../../../app/hooks";
import { updateStoreAsync } from "../../../services/storeLib";
import type { EditItemState } from "../types.js";

const Location = (props: EditItemState) => {
  const dispatch = useAppDispatch();
  const { location, setStore, isAdmin } = props;
  const address = location?.address;
  const zip = location?.zip;
  const admin_name = location?.admin_name;

  const uniqueArray = areas
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.admin_name === item.admin_name)
    )
    .map((item) => item.admin_name);
  //const filteredArray = areas.filter((item) => item.admin_name === admin_name);

  const uniqueFilteredArray = areas.filter(
    (item, index, self) => index === self.findIndex((t) => t.city === item.city)
  );

  const handleUpdate = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    dispatch(
      updateStoreAsync({
        id: props.id,
        isAdmin,
        name: "location",
        value: {
          ...location,
          [name]: value,
        },
      })
    );
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStore((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        location: {
          ...prev.location,
          [name]: value,
        },
      };
    });
  };

  const handleChangeAdminname = (e: any, newValue: string | null) => {
    if (newValue) {
      setStore((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          location: {
            ...prev.location,
            admin_name: newValue,
          },
        };
      });

      dispatch(
        updateStoreAsync({
          id: props.id,
          isAdmin,
          name: "location",
          value: {
            ...location,
            admin_name: newValue,
          },
        })
      );
    }
  };

  const handleChangeCity = (e: any, newValue: any) => {
    if (newValue) {
      setStore((prev) => {
        if (!prev) return;
        return {
          ...prev,
          location: {
            ...prev.location,
            ...newValue,
          },
        };
      });

      dispatch(
        updateStoreAsync({
          id: props.id,
          isAdmin,
          name: "location",
          value: {
            ...location,
            ...newValue,
          },
        })
      );
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
          onBlur={handleUpdate}
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
          onBlur={handleUpdate}
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
          value={null}
          disabled={!admin_name}
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
    </>
  );
};

export default Location;
