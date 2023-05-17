import React, { useEffect, useState } from "react";
import { TextField, Grid, Autocomplete } from "@mui/material";
import { DataStore } from "aws-amplify";
import type { EditItemState } from "../types";
import { Categories } from "../../../../../../../../models";
import type {
  LazyCategory,
  LazyCategories,
} from "../../../../../../../../models";

const EditCategorie = (props: any) => {
  const { categories, handleChange } = props;
  const [catego, setCategory] = useState<LazyCategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = (await DataStore.query(Categories)).map(
        (category: LazyCategories) => ({
          id: category.id,
          name: category.name,
        })
      );

      setCategory(data);
    };

    fetchCategories();
  }, []);

  return (
    <Grid item xs={12}>
      <Autocomplete
        multiple
        id="categori-select"
        options={catego}
        getOptionLabel={(option: any) => option.name}
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
