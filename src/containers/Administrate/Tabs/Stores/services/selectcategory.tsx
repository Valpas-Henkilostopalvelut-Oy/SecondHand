import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DataStore } from "aws-amplify";
import { Categories } from "../../../../../models";
import type { LazyCategories } from "../../../../../models";

const Selectcategories = (props: any) => {
  const { values, setValues } = props;
  const [selected, setSelected] = useState([]);
  const [categories, setCategories] = useState<LazyCategories[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await DataStore.query(Categories);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const updateValues = () => {
      for (let i = 0; i < selected.length; i += 1) {
        const category = categories.find(
          (category) => category.id === selected[i]
        );
        if (category) {
          setValues({
            ...values,
            categories: [
              ...values.categories,
              { id: category.id, name: category.name },
            ],
          });
        }
      }
    };

    updateValues();
  }, [selected]);

  const handleChange = (event: any) => setSelected(event.target.value);

  return (
    <FormControl fullWidth>
      <InputLabel id="category-selection">Kategoriat</InputLabel>
      <Select
        labelId="category-selection"
        label="Kategoriat"
        id="demo-simple-select"
        value={selected}
        onChange={handleChange}
        multiple
      >
        {categories.map((category: LazyCategories) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { Selectcategories };
