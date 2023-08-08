import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  IconButton,
  TableHead,
} from "@mui/material";
import { addCategory, deleteCategory } from "../../../services/categoriesLib";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import loadingCategories from "./loadingCategories";
import { Formik } from "formik";
import * as yup from "yup";
import DeleteIcon from "@mui/icons-material/Delete";
import type { LazyCategories } from "../../../models";

interface FormValues {
  name: string;
}

const validationSchema = yup.object({
  name: yup.string().required("Nimi on pakollinen"),
});

const initialValues: FormValues = {
  name: "",
};

const CategoryForm = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (values: FormValues) => {
    dispatch(addCategory(values.name));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
      }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Nimi"
            variant="outlined"
            fullWidth
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <Button type="submit">Lisää</Button>
        </Box>
      )}
    </Formik>
  );
};

const CategoryItem = (props: LazyCategories) => {
  const { name, createdAt, id } = props;
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteCategory(id));
  };
  const created = new Date(createdAt || "").toLocaleDateString("fi-FI");
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{created}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const CategoriesWithLoading = () => {
  const { data } = useAppSelector((state) => state.categories);

  return (
    <Box>
      <Typography variant="h6">Kategoriat</Typography>
      <CategoryForm />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nimi</TableCell>
              <TableCell>Luotu</TableCell>
              <TableCell align="right">Poista</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((category) => (
              <CategoryItem key={category.id} {...category} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const Categories = loadingCategories(CategoriesWithLoading);

export default Categories;
