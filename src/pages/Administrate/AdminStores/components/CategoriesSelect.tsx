import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DataStore } from "aws-amplify";
import { Categories } from "../../../../models";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { addCategory, removeCategory } from "../redux/newstore";

interface CategoriesProps {
  id: string;
  name: string | undefined | null;
}

const CategoriesSelect = () => {
  const [categories, setCategories] = useState<CategoriesProps[]>([]);
  const values = useAppSelector((state) => state.newstore).categories;
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await DataStore.query(Categories).then((res) =>
        res.map((category) => ({
          id: category.id,
          name: category.name,
        }))
      );
      setCategories(data);
    };

    fetchCategories();
  }, []);
  const handleAdd = (category: CategoriesProps) => {
    dispatch(addCategory(category));
  };

  const handleRemove = (category: CategoriesProps) =>
    dispatch(removeCategory(category.id));

  const handleChange = (e: any) => {
    const { value } = e.target; // value is array ['426ae966-d2c1-4ccb-b4bf-0b2e0d5dfb5e']

    const category = categories.find((category) => category.id === value[0]);
    console.log(category, value);

    if (category) {
      if (values.includes(category)) {
        handleRemove(category);
      } else {
        handleAdd(category);
      }
    }
  };

  return (
    <FormControl fullWidth disabled={true}>
      <InputLabel id="category-selection">Kategoriat</InputLabel>
      <Select
        labelId="category-selection"
        label="Kategoriat"
        id="demo-simple-select"
        value={values}
        onChange={handleChange}
        multiple
      >
        {categories.map((category: CategoriesProps) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoriesSelect;
