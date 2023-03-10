import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Grid, Button } from "@mui/material";
import { DataStore, Auth } from "aws-amplify";
import { Categories } from "../../../../models";

const handleAddCategory = async (categoryName: string) => {
  const user = await Auth.currentAuthenticatedUser();
  const id = Date.now().toString();
  const newCategory = new Categories({
    createdBy: user.username,
    categories: {
      name: categoryName,
      id: id,
    },
  });
  await DataStore.save(newCategory);
};

const Category = (props: any) => {
  const { auth, isAdmin } = props;
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      await DataStore.query(Categories).then((data: any) => {
        setCategories(data);

        // eslint-disable-next-line autofix/no-console
        console.log(data);
      });
    };

    fetchCategories();
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
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
    </Box>
  );
};

export default Category;
