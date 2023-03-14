import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DataStore } from "aws-amplify";
import { Categories } from "../../../../../models";

interface Category {
  name: string;
  id: string;
}

const Selectcategories = (props: any) => {
  const { values, setValues } = props;
  const [selected, setSelected] = useState([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      await DataStore.query(Categories).then((data: any) => {
        setCategories(data[0].categories);
      });
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const updateValues = () => {
      for (let i = 0; i < selected.length; i += 1) {
        const value = selected[i];
        const found = categories.find((category) => category.id === value);

        if (found)
          setValues({ ...values, categories: [...values.categories, found] });
      }
    };

    updateValues();
  }, [categories, selected]);

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
        {categories.map((category: Category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { Selectcategories };
