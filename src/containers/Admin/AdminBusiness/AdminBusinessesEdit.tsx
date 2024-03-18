import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Grid,
  Autocomplete,
} from "@mui/material";
import { useParams } from "react-router-dom";
import {
  Businesses,
  Types,
  Locations,
  Cities,
  Categories,
} from "../../../models";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  fetchBusinessCategoriesOnBusiness,
  fetchLogo,
  fetchSingleBusiness,
  updateBusiness,
} from "../../../redux/reducer/businessSlice";
import { fetchSingleType } from "../../../redux/reducer/typeSlice";
import {
  fetchSingleLocation,
  fetchSingleCity,
} from "../../../redux/reducer/locationSlice";

export interface BusinessEditProps {
  name: string | null | undefined;
  address: string | null | undefined;
  description: string | null | undefined;
  cardDesctiption: string | null | undefined;
  websiteUrl: string | null | undefined;
  type: Types | null;
  location: Locations | null;
  city: Cities | null;
  category: Categories[] | undefined;
  logoUrl: string | null;
  logoFile?: File | null;
}

interface DataProps {
  business: Businesses | null;
  type: Types | null;
  location: Locations | null;
  city: Cities | null;
  categories: Categories[] | undefined;
  logoUrl: string | null;
}

const AdminBusinessesEdit = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | unknown>();
  const [data, setData] = useState<DataProps>({
    business: null,
    type: null,
    location: null,
    city: null,
    categories: undefined,
    logoUrl: null,
  });

  const alltypes = useAppSelector((state) => state.typeSlice.businessTypes);
  const alllocations = useAppSelector((state) => state.locationSlice.locations);
  const allcities = useAppSelector((state) => state.locationSlice.cities);
  const allcategories = useAppSelector(
    (state) => state.categoriesSlice.categories
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const business = await fetchSingleBusiness(id);
        if (business) {
          const [type, location, city, categories, logoUrl] = await Promise.all(
            [
              fetchSingleType(business.typesID),
              fetchSingleLocation(business.locationsID),
              fetchSingleCity(business.citiesID),
              fetchBusinessCategoriesOnBusiness(business.id),
              fetchLogo(business.logo),
            ]
          );

          setData({
            business,
            type,
            location,
            city,
            categories,
            logoUrl,
          });
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const initialValues: BusinessEditProps = {
    name: data.business?.name ?? "",
    address: data.business?.address ?? "",
    description: data.business?.description ?? "",
    cardDesctiption: data.business?.cardDescription ?? "",
    websiteUrl: data.business?.websiteUrl ?? "",
    type: data.type,
    location: data.location,
    city: data.city,
    category: data.categories,
    logoUrl: data.logoUrl ?? "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      return dispatch(updateBusiness({ newData: values, id: id }));
    },
  });

  const handleSelectImage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        formik.setFieldValue("logoFile", file);
      }
    },
    [formik]
  );

  const handleUnSelectImage = useCallback(() => {
    formik.setFieldValue("logoFile", null);
  }, [formik]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Box mt={2}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="address"
                name="address"
                label="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="cardDesctiption"
                name="cardDesctiption"
                label="Card Description"
                value={formik.values.cardDesctiption}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                multiline
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="websiteUrl"
                name="websiteUrl"
                label="Website URL"
                value={formik.values.websiteUrl}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                id="type"
                options={allcategories || []}
                getOptionLabel={(option) => option.name}
                multiple
                value={formik.values.category || []}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                onChange={(e, value) => {
                  formik.setFieldValue("category", value);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Category" />
                )}
              />
            </Grid>
          </Grid>
          <Box mb={2} style={{ textAlign: "center" }}>
            {formik.values.logoFile || formik.values.logoUrl ? (
              <img
                src={
                  formik.values.logoFile
                    ? URL.createObjectURL(formik.values.logoFile)
                    : formik.values.logoUrl || undefined
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
            {formik.values.logoFile && (
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
          <Box mb={2} style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default AdminBusinessesEdit;
