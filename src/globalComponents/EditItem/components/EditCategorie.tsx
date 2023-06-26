import React from "react";
import { TextField, Grid, Autocomplete } from "@mui/material";
import { useAppSelector } from "../../../app/hooks";
import type { EditItemState } from "../types";
import type { LazyCategory } from "../../../models";
import { useAppDispatch } from "../../../app/hooks";
import { updateStoreAsync } from "../../../app/reducer/stores";

const EditCategorie = (props: EditItemState) => {
  const dispatch = useAppDispatch();
  const { categories, setStore, isAdmin } = props;
  const { data } = useAppSelector((state) => state.categories);
  const category = data?.map((item) => ({
    id: item.id,
    name: item.name,
  }));

  const handleChange = (event: any, value: (LazyCategory | null)[]) => {
    setStore((prevState) => {
      if (!prevState) return null;
      return {
        ...prevState,
        categories: value,
      };
    });
    dispatch(
      updateStoreAsync({
        id: props.id,
        isAdmin,
        name: "categories",
        value,
      })
    );
  };

  return (
    <Grid item xs={12}>
      <Autocomplete
        multiple
        id="categori-select"
        options={category || []}
        getOptionLabel={(option) => option?.name || ""}
        isOptionEqualToValue={(option, value) => option.id === value.id}
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
    </Grid>
  );
};

export default EditCategorie;
