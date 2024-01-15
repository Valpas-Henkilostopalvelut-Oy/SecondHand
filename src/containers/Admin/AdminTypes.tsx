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
import ImageUpload from "../../components/ImageUpload";
import { uploadData } from "@aws-amplify/storage";

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
        key: `types/${file.name}`,
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
  const dispatch = useAppDispatch();
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
              <TableCell>Actions</TableCell>
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
                  <TableCell>
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
