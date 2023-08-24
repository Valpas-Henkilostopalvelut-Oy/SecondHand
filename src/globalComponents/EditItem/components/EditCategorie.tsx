import React, { useState, useEffect } from "react";
import {
  TextField,
  Grid,
  Autocomplete,
  Box,
  Button,
  List,
  ListItemText,
  IconButton,
  ListItem,
} from "@mui/material";
import { useAppSelector } from "../../../app/hooks";
import type { EditItemState } from "../types";
import { useAppDispatch } from "../../../app/hooks";
import {
  deleteCategoryFromStore,
  addCategoryToStore,
  fetchCategoriesByStore,
} from "../../../services/categoriesLib";
import { Clear, Add } from "@mui/icons-material";
import type { LazyCategories } from "../../../models";

const EditCategorie = (props: EditItemState) => {
  const { data } = useAppSelector((state) => state.categories);
  const [category, setCategory] = useState<LazyCategories | null>(null);
  const [categories, setCategories] = useState<LazyCategories[] | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      if (props.id) {
        await fetchCategoriesByStore(props.id).then((res) => {
          setCategories(res);
        });
      }
    };

    fetchCategories();
  }, [data]);

  const handleAdd = async () => {
    if (category) {
      await addCategoryToStore(props.id, category.id);
      setCategories((prev) => [...(prev || []), category]);
      setCategory(null);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteCategoryFromStore(props.id, id);
  };

  return (
    <Grid item xs={12}>
      <Box sx={{ display: "flex" }}>
        <Autocomplete
          fullWidth
          id="category-select"
          value={category}
          options={data || []}
          isOptionEqualToValue={(option, value) => option?.id === value?.id}
          getOptionLabel={(option) => option.name}
          onChange={(e, value) => setCategory(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Kategoriat"
              placeholder="Kategoriat"
            />
          )}
        />
        <IconButton
          onClick={handleAdd}
          disabled={!category}
          color="primary"
          aria-label="add"
        >
          <Add />
        </IconButton>
      </Box>
      <List>
        {categories?.map((category) => (
          <ListItem
            key={category.id}
            secondaryAction={
              <IconButton
                onClick={() => handleDelete(category.id)}
                color="error"
                aria-label="delete"
              >
                <Clear />
              </IconButton>
            }
          >
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default EditCategorie;
