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
import {
  createBusinessType,
  deleteBusinessType,
} from "../../redux/reducer/typeSlice";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Link } from "react-router-dom";

const TypesCreateForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const initialValues: BusinessType = {
    name: "",
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
        <Typography>{formik.values.image ?? "No image selected"}</Typography>
        <TaskAltIcon color={formik.values.image ? "success" : "error"} />
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
  const dispatch = useAppDispatch();
  const { businessTypes } = useAppSelector((state) => state.typeSlice);

  const handleDelete = (id: string) => {
    dispatch(deleteBusinessType(id));
  };

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
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {businessTypes &&
              businessTypes.map((type) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {type.name}
                  </TableCell>
                  {/* Add more table cells if you have more attributes to display */}
                  <TableCell align="right">
                    <Link to={`/admin/types/${type.id}/edit`}>Edit</Link>
                    <Button onClick={() => handleDelete(type.id)}>
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
