import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setCategories } from "../redux/newstore";

const CategoriesSelect = () => {
  const { data } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  const handleChange = (e: any, newValues: any) => {
    dispatch(
      setCategories(
        newValues.map((item: any) => ({ id: item.id, name: item.name }))
      )
    );
  };

  return (
    <Autocomplete
      multiple
      id="categori-select"
      options={data || []}
      getOptionLabel={(option) => option.name || ""}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Kategoriat"
          placeholder="Kategoriat"
        />
      )}
    />
  );
};

export default CategoriesSelect;
