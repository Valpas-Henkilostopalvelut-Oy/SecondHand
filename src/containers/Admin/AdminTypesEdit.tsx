import React, { useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  styled,
  TextField,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Types } from "../../models";
import { useFormik } from "formik";
import { getUrl, uploadData } from "aws-amplify/storage";
import { updateBusinessType } from "../../redux/reducer/typeSlice";

const TypeImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

const AdminTypeEdit = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { businessTypes } = useAppSelector((state) => state.typeSlice);
  const type = businessTypes?.find((type: Types) => type.id === id);

  const formik = useFormik({
    initialValues: {
      name: type?.name,
      imageFile: null,
      imageKey: type?.image,
      imageUrl: "",
    },
    onSubmit: async (values) => {
      if (values.imageFile !== null) {
        await handleUploadImage(values.imageKey, values.imageFile).then(
          (result) => {
            dispatch(
              updateBusinessType({
                id: id,
                newData: {
                  name: values.name || "",
                  image: result,
                },
              })
            );
          }
        );
      }
    },
  });

  const handleUploadImage = async (key?: string | null, file?: File | null) => {
    if (!file) return;
    if (key) {
      const { result } = uploadData({
        key: `types/${key}`,
        data: file,
      });
      return (await result).key;
    } else {
      const { result } = uploadData({
        key: `types/${file.name}`,
        data: file,
      });
      return (await result).key;
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Устанавливаем выбранный файл
      formik.setFieldValue("imageFile", file);

      // Создаём превью
      const reader = new FileReader();
      reader.onload = (e) => {
        formik.setFieldValue("imageUrl", e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    const getUrlImage = async () => {
      if (!type?.image) return;
      const { url } = await getUrl({ key: type?.image });
      formik.setFieldValue("imageUrl", url);
    };
    getUrlImage();
  }, [formik.values.imageKey]);

  return (
    <Container>
      <Box>
        <Typography variant="h2" gutterBottom>
          Edit Type
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Box>
          <Box mb={2}>
            {formik.values.imageUrl && (
              <TypeImage src={formik.values.imageUrl} alt="type image" />
            )}
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Box>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={formik.isSubmitting}
          >
            Save
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AdminTypeEdit;
