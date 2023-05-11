import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Grid, Button } from "@mui/material";
import { DataStore, Auth } from "aws-amplify";
import { Categories } from "../../../../models";

/*{
    "createdBy": "6c5b3079-16b2-4928-a660-7ea2d9bafb52",
    "categories": {
        "name": "Cat",
        "id": "1678451390333"
    },
    "id": "48b111f8-bdfd-45a9-921d-c4b176f46be8",
    "createdAt": null,
    "updatedAt": null
}'*/

interface Category {
  name: string;
  id: string;
}

const handleAddCategory = async (categoryName: string) => {
  const user = await Auth.currentAuthenticatedUser();

  const newCategory = new Categories({
    createdBy: user.username,
    name: categoryName,
  });

  await DataStore.save(newCategory);
};

const handleDeleteCategory = async (id: string) => {
  await DataStore.delete(Categories, id);
};

const Categoryitem = (props: any) => {
  const { category } = props;
  return (
    <Grid item container spacing={2} xs={12}>
      <Grid item xs={10}>
        <Typography>{category.name}</Typography>
      </Grid>

      <Grid item xs={2}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => handleDeleteCategory(category.id)}
        >
          Poista
        </Button>
      </Grid>
    </Grid>
  );
};

const Category = (props: any) => {
  const { auth, isAdmin, isEmpty } = props;
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await DataStore.query(Categories);
      const categories = data.map((category) => ({
        ...category,
        name: category.name || "",
      }));

      setCategories(categories);
    };

    fetchCategories();
  }, [isEmpty]);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid container spacing={2} item>
          <Grid item xs={12}>
            <Typography variant="h6">Kategoriat</Typography>
          </Grid>
          <Grid item xs={7}>
            <TextField
              id="categoryName"
              label="Kategorian nimi"
              variant="outlined"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <Button
              variant="contained"
              onClick={() => handleAddCategory(categoryName)}
              fullWidth
              disabled={!(categoryName.length > 3)}
              sx={{ height: "100%" }}
            >
              Lisää kategoria
            </Button>
          </Grid>
        </Grid>

        {categories.map((category) => (
          <Categoryitem key={category.id} category={category} />
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
