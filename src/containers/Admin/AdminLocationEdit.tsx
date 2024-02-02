import React, { useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  styled,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Locations } from "../../models";
import { useFormik } from "formik";
import { getUrl, uploadData } from "aws-amplify/storage";
import { updateLocations } from "../../redux/reducer/locationSlice";

const LocationImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

const AdminLocationEdit = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { locations } = useAppSelector((state) => state.locationSlice);
  const location = locations?.find((location: Locations) => location.id === id);

  const formik = useFormik({
    initialValues: {
      adminName: location?.adminName,
      country: location?.country,
      imageFile: null,
      imageKey: location?.image,
      imageUrl: "",
    },
    onSubmit: async (values) => {
      if (values.imageFile !== null) {
        await handleUploadImage(values.imageKey, values.imageFile).then(
          (result) => {
            dispatch(
              updateLocations({
                id: id,
                newData: {
                  adminName: values.adminName || "",
                  country: values.country || "",
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
      const { result } = await uploadData({
        key: `locations/${key}`,
        data: file,
      });
      return (await result).key;
    } else {
      const { result } = await uploadData({
        key: `locations/${file.name}`,
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
      if (!location?.image) return;
      const { url } = await getUrl({ key: location?.image });
      formik.setFieldValue("imageUrl", url.toString());
    };

    getUrlImage();
  }, [location?.image]);

  return (
    <Container>
      <Box mt={2}>
        <Typography variant="h3" gutterBottom>
          Edit location : {location?.adminName}
        </Typography>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="adminName"
                  name="adminName"
                  label="Admin Name"
                  value={formik.values.adminName}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="country"
                  name="country"
                  label="Country"
                  multiline
                  value={formik.values.country}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                {formik.values.imageUrl && (
                  <LocationImage
                    src={formik.values.imageUrl}
                    alt="location image"
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={3}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Box gap={2} display="flex">
                  <Button type="submit" variant="contained">
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => window.history.back()}
                  >
                    Back
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminLocationEdit;
