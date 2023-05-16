import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { DataStore } from "aws-amplify";
import { Categories } from "../../../../models";
import { useAppDispatch } from "../../../../app/hooks";
import { setCategories } from "../redux/newstore";
import type { LazyCategory } from "../../../../models";

const CategoriesSelect = () => {
  const [categories, setCategory] = useState<LazyCategory[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await DataStore.query(Categories).then((res) =>
        res.map((category) => ({
          id: category.id,
          name: category.name,
        }))
      );
      setCategory(data);
    };

    fetchCategories();
  }, []);
  const dispatch = useAppDispatch();

  const handleChange = (e: any, newValues: any) => {
    dispatch(setCategories([...newValues]));
  };

  return (
    <Autocomplete
      multiple
      id="categori-select"
      options={categories}
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
  );
};

export default CategoriesSelect;
