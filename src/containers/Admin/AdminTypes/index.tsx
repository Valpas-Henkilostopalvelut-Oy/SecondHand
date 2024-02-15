import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Collapse,
  Avatar,
  Typography,
  styled,
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { useFormik } from "formik";
import { BusinessType } from "../../../types/businessType";
import {
  createBusinessType,
  deleteBusinessType,
  updateBusinessType,
} from "../../../redux/reducer/typeSlice";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Link } from "react-router-dom";
import ImageUpload from "../../../components/ImageUpload";
import { Types } from "../../../models";
import { getUrl, uploadData } from "aws-amplify/storage";

interface TypesCreateFormProps {
  name: string;
  imageFile?: File | null;
}

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const TypesCreateForm = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const initialValues: TypesCreateFormProps = {
    name: "",
    imageFile: null,
  };

  const handleCreateType = async (values: TypesCreateFormProps) => {
    if (!values.imageFile) {
      return dispatch(createBusinessType({ name: values.name }));
    }
    try {
      const file = values.imageFile;
      const result = uploadData({
        data: file,
        key: `types/${values.name}/${file.name}`,
      });
      return dispatch(
        createBusinessType({
          name: values.name,
          image: (await result.result).key,
        })
      );
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      await handleCreateType(values);
    },
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      formik.setFieldValue("imageFile", file);
    }
  };

  const handleFileDelete = () => {
    formik.setFieldValue("imageFile", null);
  };

  return (
    <div>
      <Box mb={2}>
        <Button onClick={() => setOpen(!open)}>Create Type</Button>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <Box p={2}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  required
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={formik.isSubmitting}
                  sx={{ height: "100%" }}
                >
                  Create
                </Button>
              </Grid>
            </Grid>
            <Box mt={2}>
              <ImageUpload
                onFileChange={handleFileSelect}
                onDelete={handleFileDelete}
                imageFile={formik.values.imageFile}
              />
            </Box>
          </form>
        </Box>
      </Collapse>
      <Divider />
    </div>
  );
};

const AdminType = ({
  type,
  handleDelete,
}: {
  type: Types;
  handleDelete: (id: string) => void;
}) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const formik = useFormik({
    initialValues: {
      name: type.name,
      imageUrl: imageUrl,
      imageFile: null,
    },
    onSubmit: async (values) => {
      await handleTypeUpdate(values);
    },
  });

  useEffect(() => {
    const getUrlImage = async () => {
      if (!type?.image) return;
      const { url } = await getUrl({ key: type?.image });
      formik.setFieldValue("imageUrl", url);
      setImageUrl(url.toString());
    };
    getUrlImage();
  }, [type?.image]);

  const handleTypeUpdate = async (values: TypesCreateFormProps) => {
    if (!values.imageFile) {
      return dispatch(updateBusinessType({ id: type.id, newData: values }));
    }
    try {
      const file = values.imageFile;
      const result = uploadData({
        data: file,
        key: `types/${values.name}/${file.name}`,
      });
      return dispatch(
        updateBusinessType({
          id: type.id,
          newData: {
            name: values.name,
            image: (await result.result).key,
          },
        })
      );
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
  };

  const handleSelectImage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        formik.setFieldValue("imageFile", file);
      }
    },
    [formik]
  );

  const handleUnSelectImage = useCallback(() => {
    formik.setFieldValue("imageFile", null);
  }, [formik]);

  return (
    <div key={type.id}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={type.name} src={imageUrl}>
            <TaskAltIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={type.name} />
        <Button onClick={() => setOpen(!open)}>Edit</Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete(type.id)}
        >
          Delete
        </Button>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <Box p={2}>
          <form onSubmit={formik.handleSubmit}>
            <Box mb={2}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                required
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Box>
            <Box mb={2} style={{ textAlign: "center" }}>
              {formik.values.imageFile || formik.values.imageUrl ? (
                <img
                  src={
                    formik.values.imageFile
                      ? URL.createObjectURL(formik.values.imageFile)
                      : formik.values.imageUrl
                  }
                  alt="preview"
                  style={{
                    maxWidth: "100%", // Ограничивает ширину изображения до 100%
                    maxHeight: "400px", // Ограничивает высоту изображения до 400 пикселей
                    objectFit: "contain", // Убедитесь, что изображение полностью помещается в заданные границы, сохраняя пропорции
                    display: "block", // Гарантирует, что элемент блочный (для центрирования)
                    margin: "0 auto 20px", // Центрирует изображение и добавляет отступ снизу
                  }}
                />
              ) : null}
              {formik.values.imageFile && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleUnSelectImage}
                  style={{ marginRight: "10px", marginBottom: "20px" }}
                >
                  Delete
                </Button>
              )}
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleSelectImage}
                style={{ display: "block", margin: "0 auto" }} // Для центрирования кнопки выбора файла, если необходимо
              />
            </Box>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Save
            </Button>
          </form>
        </Box>
      </Collapse>

      <Divider />
    </div>
  );
};

export const AdminTypes = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { businessTypes } = useAppSelector((state) => state.typeSlice);

  const handleDelete = (id: string) => {
    dispatch(deleteBusinessType(id));
  };

  return (
    <StyledContainer>
      <HeaderBox>
        <Typography variant="h3">Admin Types</Typography>
        <TypesCreateForm />
      </HeaderBox>

      <List>
        {businessTypes &&
          businessTypes.map((type) => (
            <AdminType type={type} handleDelete={handleDelete} key={type.id} />
          ))}
      </List>
    </StyledContainer>
  );
};
