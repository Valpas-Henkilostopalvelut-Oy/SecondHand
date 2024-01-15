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

const CategoriesCreateForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const initialValues: Category = {
    name: "",
    description: "",
    image: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      // Handle form submission, e.g., send to backend or state management
      dispatch(createCategory(values));
    },
  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) return;

    // Now you can upload the file using Amplify Storage
    uploadFile(file);
  };

  const uploadFile = async (file: File) => {
    // Save the file in public buisnesses folder
    try {
      const result = await uploadData({
        key: `categories/${file.name}`,
        data: file,
      });
      console.log("File uploaded successfully", result);
      formik.setFieldValue("image", (await result.result).key);
    } catch (error) {
      console.error("Error uploading file", error);
    }
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
        <ImageUpload onFileChange={handleFileChange} />
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
  const {
    categoriesSlice: { categories },
  } = useAppSelector((state) => state);

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
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledContainer>
  );
};
