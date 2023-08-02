import React from "react";
import { TextField, Grid, Autocomplete } from "@mui/material";
import { useAppSelector } from "../../../app/hooks";
import type { EditItemState } from "../types";
import type { LazyCategories } from "../../../models";
import { useAppDispatch } from "../../../app/hooks";
import { updateStoreAsync } from "../../../services/storeLib";

const EditCategorie = (props: EditItemState) => {
  const dispatch = useAppDispatch();
  const { categories, setStore, isAdmin } = props;
  const { data } = useAppSelector((state) => state.categories);
  const category = data.map(({ id, name }) => ({
    id,
    name,
  })) as (LazyCategories | null)[];

  const handleChange = (event: any, value: (LazyCategories | null)[]) => {
    dispatch(
      updateStoreAsync({
        id: props.id,
        isAdmin,
        name: "categories",
        value,
      })
    );
  };

  if (!category) return null;

  return (
    <Grid item xs={12}>
      <Autocomplete
        multiple
        id="categori-select"
        value={[]}
        options={category}
        isOptionEqualToValue={(option, value) => option?.id === value?.id}
        getOptionLabel={(option) => option?.name || ""}
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
