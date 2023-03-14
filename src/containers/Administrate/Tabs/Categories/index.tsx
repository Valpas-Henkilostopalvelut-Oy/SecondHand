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

const deleteItem = async (
  category: { name: string; id: string },
  mainCategoryId: string
) => {
  await DataStore.query(Categories, mainCategoryId).then(async (data: any) => {
    await DataStore.save(
      Categories.copyOf(data, (updated: any) => {
        updated.categories = updated.categories.filter(
          (item: { name: string; id: string }) => item.id !== category.id
        );
      })
    );
  });
};

interface Category {
  name: string;
  id: string;
}

const handleAddCategory = async (categoryName: string) => {
  const user = await Auth.currentAuthenticatedUser();
  const id = Date.now().toString();
  const newCategory = new Categories({
    createdBy: user.username,
    categories: [{ name: categoryName, id }],
  });

  await DataStore.query(Categories).then(async (data: any) => {
    if (data.length > 0) {
      const main = data[0];
      const newCat = { name: categoryName, id };
      await DataStore.save(
        Categories.copyOf(main, (updated: any) => {
          updated.categories.push(newCat);
        })
      );
    } else await DataStore.save(newCategory);
  });
};

const Categoryitem = (props: any) => {
  const { category, mainCategoryId } = props;
  return (
    <Grid item container spacing={2} xs={12}>
      <Grid item xs={10}>
        <Typography>{category.name}</Typography>
      </Grid>

      <Grid item xs={2}>
        <Button
          variant="contained"
          onClick={() => deleteItem(category, mainCategoryId)}
          fullWidth
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
  const [mainCategoryId, setMainCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      await DataStore.query(Categories).then((data: any) => {
        if (data.length > 0) {
          const main = data[0];
          setCategories(main.categories);
          setMainCategoryId(main.id);
        }
      });
    };

    fetchCategories();
  }, []);

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
            >
              Lisää kategoria
            </Button>
          </Grid>
        </Grid>

        {categories.map((category) => (
          <Categoryitem
            key={category.id}
            category={category}
            mainCategoryId={mainCategoryId}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
