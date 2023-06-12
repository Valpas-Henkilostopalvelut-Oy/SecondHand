import React from "react";
import { TextField, Grid, Autocomplete } from "@mui/material";
import { useAppSelector } from "../../../../../../../app/hooks";

const EditCategorie = (props: any) => {
  const { categories, handleChange } = props;
  const { data } = useAppSelector((state) => state.categories);
  const category = data?.map((item) => ({
    id: item.id,
    name: item.name,
  }));

  return (
    <Grid item xs={12}>
      <Autocomplete
        multiple
        id="categori-select"
        value={categories}
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
