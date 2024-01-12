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
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useFormik } from "formik";
import { BusinessType } from "../../types/businessType";
import { createBusinessType } from "../../redux/reducer/typeSlice";

const TypesCreateForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const initialValues: BusinessType = {
    name: "",
    description: "",
    image: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      // Handle form submission, e.g., send to backend or state management
      dispatch(createBusinessType(values));
    },
  });

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
        <TextField
          fullWidth
          id="image"
          name="image"
          label="Image"
          value={formik.values.image}
          onChange={formik.handleChange}
          error={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
        />
      </Box>
      <Button color="primary" variant="contained" fullWidth type="submit">
        Create
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

export const AdminTypes = (): JSX.Element => {
  const {
    typeSlice: { businessTypes },
  } = useAppSelector((state) => state);

  return (
    <StyledContainer>
      <HeaderBox>
        <Typography variant="h2">Admin Types</Typography>
        <TypesCreateForm />
      </HeaderBox>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Type Name</TableCell>
              {/* Add more table headers if you have more attributes to display */}
            </TableRow>
          </TableHead>
          <TableBody>
            {businessTypes &&
              businessTypes.map((type) => (
                <TableRow key={type.id}>
                  <TableCell component="th" scope="row">
                    {type.name}
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
