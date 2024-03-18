import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  styled,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Category } from "../../types/categories";
import {
  createCategory,
  deleteCategory,
} from "../../redux/reducer/categoriesSlice";
import ImageUpload from "../../components/ImageUpload";
import { uploadData } from "@aws-amplify/storage";

interface Categories extends Category {
  imageFile?: File | null;
}

const CategoriesCreateForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const initialValues: Categories = {
    name: "",
    description: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      if (!values.imageFile) {
        dispatch(createCategory(values));
        return;
      }
      try {
        const result = uploadData({
          key: `categories/${values.name}/${values.imageFile?.name}`,
          data: values.imageFile,
        });
        console.log("File uploaded successfully", result); 
        dispatch(
          createCategory({
            name: values.name,
            description: values.description,
            image: (await result.result).key,
          })
        );
      } catch (error) {
        console.error("Error uploading file", error);
      }
    },
  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) return;

    // Now you can upload the file using Amplify Storage
    formik.setFieldValue("imageFile", file);
  };
  const handleFileDelete = () => {
    formik.setFieldValue("imageFile", null);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mb={2}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description"
          multiline
          rows={4}
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
      </Box>
      <Box mb={2}>
        <ImageUpload
          onFileChange={handleFileChange}
          onDelete={handleFileDelete}
          imageFile={formik.values.imageFile}
        />
      </Box>
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </form>
  );
};

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const AdminCategories = (): JSX.Element => {
  const { categories } = useAppSelector((state) => state.categoriesSlice);
  const dispatch = useAppDispatch();

  return (
    <StyledContainer>
      <HeaderBox>
        <Typography variant="h2">Admin Categories</Typography>
        <CategoriesCreateForm />
      </HeaderBox>

      <TableContainer component={Paper}>
        <Table aria-label="categories table">
          <TableHead>
            <TableRow>
              <TableCell>Category Name</TableCell>
              {/* Add more table headers if you have more attributes to display */}
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories &&
              categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell component="th" scope="row">
                    {category.name}
                  </TableCell>
                  {/* Add more table cells if you have more attributes to display */}
                  <TableCell align="right">
                    <Button
                      onClick={() => dispatch(deleteCategory(category.id))}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledContainer>
  );
};
