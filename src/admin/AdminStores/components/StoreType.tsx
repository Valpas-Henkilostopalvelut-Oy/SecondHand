import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useAppDispatch } from "../../../app/hooks";
import { setType } from "../redux/newstore";
import { storeTypes } from "../../../globalComponents/storeType";

const StoreType = () => {
  const dispatch = useAppDispatch();
  const handleChange = (e: any, newValues: any) => {
    dispatch(setType(newValues.id));
  };

  return (
    <Autocomplete
      id="store-type-select"
      options={storeTypes}
      getOptionLabel={(option) => option.name}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Kauppatyyppi"
          placeholder="Kauppatyyppi"
        />
      )}
    />
  );
};

export default StoreType;
