import React from "react";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  styled,
  TextField,
  type BoxProps,
  IconButton,
  Button,
  Autocomplete,
  Grid,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Formik, type FormikHelpers } from "formik";
import * as yup from "yup";
import type StoreFormProps from "../../../../types/store";
import { Add, Clear } from "@mui/icons-material";
import LogoImage from "../../../../globalComponents/LogoImage";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { storeTypes } from "../../../../globalComponents/storeType";
import areas from "../../../../globalComponents/Search/fi";
import type { area } from "../../../../globalComponents/Search/fi";
import ImageComponent from "../../../../globalComponents/ImageComponent";
import OpenTimes from "../../../../globalComponents/OpenTimes";
import { createStoreAsync } from "../../../../services/storeLib";

const uniqueAreas = (areas: area[]) =>
  areas
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.admin_name === item.admin_name)
    )
    .sort((a, b) => (a.admin_name > b.admin_name ? 1 : -1))
    .map((item) => item.admin_name);

const uniqueFilteredArray = (areas: area[], admin_name: string) =>
  areas
    .filter((item) => item.admin_name === admin_name)
    .sort((a, b) => (a.city > b.city ? 1 : -1))
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.city === item.city)
    );

const addHttpsToUrlOrGetSrc = (url: string) => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "https://" + url;
  }
  if (url.includes("src=")) {
    const srcMatch = url.match(/src\s*=\s*"(.*?)"/i);
    if (srcMatch && srcMatch[1]) {
      return srcMatch[1];
    }
  }
  return url;
};

const StoreBlock = styled(Grid)(({ theme }) => ({
  //padding only in top and bottom
  padding: theme.spacing(1, 0),
}));

const validationSchema = yup.object({
  type: yup.string().required("Kauppatyyppi on pakollinen"),
  name: yup.string().min(3, "Nimen pitää olla vähintään 3 merkkiä").required(),
  categories: yup.array().min(1, "Valitse vähintään yksi kategoria"),
  contact: yup.object({
    email: yup
      .string()
      .email("Sähköposti ei ole oikeassa muodossa")
      .required("Sähköposti on pakollinen"),
    phone: yup.string().required("Puhelinnumero on pakollinen"),
  }),
  location: yup.object({
    city: yup.string().required("Kaupunki on pakollinen"),
    admin_name: yup.string().required("Alue on pakollinen"),
  }),
});

const NoteForm = ({
  setFieldValue,
  values,
}: {
  setFieldValue: (field: string, value: any) => void;
  values: StoreFormProps;
}) => {
  const [note, setNote] = React.useState("");
  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNote(e.target.value);
  const handleCreateNote = async () => {
    if (!note) return;
    const newNotes = [
      ...(values.notes || []),
      {
        id: Math.random().toString(36).substr(2, 9),
        notes: note,
      },
    ];
    setFieldValue("notes", newNotes);
    setNote("");
  };
  return (
    <Box display={"flex"}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">
          Huomioitavaa
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={note}
          onChange={handleNoteChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="create note"
                onClick={handleCreateNote}
                edge="end"
              >
                <Add />
              </IconButton>
            </InputAdornment>
          }
          label="Huomioitavaa"
        />
      </FormControl>
    </Box>
  );
};

const NewStore = ({ box }: { box?: BoxProps }) => {
  const categories = useAppSelector((state) => state.categories.data);
  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector((state) => state.user.isAdmin);
  const initialValues: StoreFormProps = {
    settings: {
      isConfirmed: {
        status: false,
      },
      isDone: {
        status: true,
      },
    },
    type: "",
    name: "",
    contact: {
      phone: "",
      email: "",
    },
    location: {
      city: "",
      admin_name: "",
    },
  };

  const onSubmit = (
    values: StoreFormProps,
    { setSubmitting, resetForm }: FormikHelpers<StoreFormProps>
  ) => {
    console.log(values);
    dispatch(createStoreAsync({ store: values, isAdmin })).then((action) => {
      if (createStoreAsync.fulfilled.match(action)) {
        resetForm();
      }
      setSubmitting(false);
    })
  };

  return (
    <Box {...box}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Uusi paikka</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              errors,
              touched,
              isValid,
              isSubmitting,
            }) => (
              <Box component="form" onSubmit={handleSubmit}>
                <StoreBlock container spacing={2}>
                  {/** Logo selection */}
                  <Grid item xs={10}>
                    <Typography variant="h6">Valitse logo</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton component="label">
                      <Add />
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const { files } = e.target;
                          if (!files) return;
                          if (files.length === 0) return;
                          const file = files[0];
                          setFieldValue("logo", file);
                        }}
                      />
                    </IconButton>
                  </Grid>

                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ display: !values.logo ? "none" : "flex" }}
                  >
                    <LogoImage
                      isAdmin
                      url={values.logo && URL.createObjectURL(values.logo)}
                    />
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={() => setFieldValue("logo", null)}
                    >
                      Poista
                    </Button>
                  </Box>
                </StoreBlock>
                <StoreBlock container spacing={2}>
                  {/** Basic information */}
                  <Grid item xs={12}>
                    <Typography variant="h6">Perustiedot</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Nimi"
                      name="name"
                      value={values.name || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!errors.name && touched.name}
                      helperText={touched.name && errors.name}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Kuvaus"
                      name="description"
                      value={values.description || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                    />
                  </Grid>
                </StoreBlock>
                <StoreBlock container spacing={2}>
                  {/** Contact information */}
                  <Grid item xs={12}>
                    <Typography variant="h6">Yhteystiedot</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      label="Sähköposti"
                      name="contact.email"
                      value={values.contact.email || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!errors.contact?.email && touched.contact?.email}
                      helperText={
                        touched.contact?.email && errors.contact?.email
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      label="Puhelin"
                      name="contact.phone"
                      value={values.contact.phone || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!errors.contact?.phone && touched.contact?.phone}
                      helperText={
                        touched.contact?.phone && errors.contact?.phone
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      label="Kotisivu"
                      name="contact.website"
                      value={values.contact.website || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                    />
                  </Grid>
                </StoreBlock>
                <StoreBlock container spacing={2}>
                  {/** Categories and place type */}
                  <Grid item xs={12}>
                    <Typography variant="h6">
                      Valitse kategoriat ja kauppatyyppi
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Autocomplete
                      multiple
                      options={categories}
                      getOptionLabel={(option) => option.name}
                      onChange={(e, value) => {
                        console.log(value);
                        setFieldValue("categories", value);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Kategoriat"
                          error={!!errors.categories && touched.categories}
                          helperText={touched.categories && errors.categories}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Autocomplete
                      options={storeTypes}
                      getOptionLabel={(option) => option.name}
                      onChange={(e, value) => setFieldValue("type", value?.id)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Kauppatyyppi"
                          error={!!errors.type && touched.type}
                          helperText={touched.type && errors.type}
                        />
                      )}
                    />
                  </Grid>
                </StoreBlock>
                <StoreBlock container spacing={2}>
                  {/** Location */}
                  <Grid item xs={12}>
                    <Typography variant="h6">Sijainti</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="address"
                      label="Toimipaikan sijainti"
                      variant="outlined"
                      fullWidth
                      value={values.location.address}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="zip"
                      label="Postinumero"
                      variant="outlined"
                      fullWidth
                      value={values.location.zip}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Autocomplete
                      options={uniqueAreas(areas)}
                      getOptionLabel={(option) => option}
                      onChange={(e, value) =>
                        setFieldValue(
                          "location.admin_name",
                          value as string | null
                        )
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Alue"
                          error={
                            !!errors.location?.admin_name &&
                            touched.location?.admin_name
                          }
                          helperText={
                            touched.location?.admin_name &&
                            errors.location?.admin_name
                          }
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Autocomplete
                      options={uniqueFilteredArray(
                        areas,
                        values.location.admin_name
                      )}
                      getOptionLabel={(option) => option.city}
                      onChange={(e, value) => {
                        if (!value) return;
                        setFieldValue("location", {
                          ...values.location,
                          city: value.city,
                        });
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Kaupunki"
                          error={
                            !!errors.location?.city && touched.location?.city
                          }
                          helperText={
                            touched.location?.city && errors.location?.city
                          }
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="location.driveto"
                      label="Ajo-ohjeet"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      value={values.location.driveto || ""}
                      onChange={(e) => {
                        const { value } = e.target;
                        const driveto = addHttpsToUrlOrGetSrc(value);
                        setFieldValue("location.driveto", driveto);
                      }}
                      helperText="Tänne voit laita linkin Google Mapsiin."
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="location.iframe"
                      label="Pysäköinti"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      value={values.location.iframe || ""}
                      onChange={(e) => {
                        const { value } = e.target;
                        const iframe = addHttpsToUrlOrGetSrc(value);
                        setFieldValue("location.iframe", iframe);
                      }}
                      helperText="Tänne voit laita linkin Google Mapsiin."
                    />
                  </Grid>
                </StoreBlock>
                <StoreBlock container spacing={2}>
                  {/** Images */}
                  <Grid item xs={10}>
                    <Typography variant="h6">Kuvat</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton component="label">
                      <Add />
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const { files } = e.target;
                          if (!files) return;
                          if (files.length === 0) return;
                          const newFiles = [
                            ...(values.imgs || []),
                            ...Array.from(files),
                          ];
                          setFieldValue("imgs", newFiles);
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    container
                    spacing={2}
                    sx={{ display: !values.imgs ? "none" : "flex" }}
                  >
                    {values.imgs?.map((img) => (
                      <Grid key={img.name} item xs={6} sm={3}>
                        <ImageComponent
                          id={img.name}
                          fileUrl={URL.createObjectURL(img)}
                        />
                        <Button
                          variant="outlined"
                          onClick={() => {
                            const newImgs =
                              values.imgs?.filter(
                                (image) => image.name !== img.name
                              ) || null;
                            setFieldValue("imgs", newImgs);
                          }}
                          fullWidth
                        >
                          Poista
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </StoreBlock>
                <StoreBlock container spacing={2}>
                  {/** Opening times */}
                  <Grid item xs={12}>
                    <Typography variant="h6">Aukioloajat</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <OpenTimes
                      opentimes={values.opentimes || []}
                      onAdd={(opentime) => {
                        const newOpenTimes = [
                          ...(values.opentimes || []),
                          opentime,
                        ].sort((a, b) => a.day - b.day);
                        setFieldValue("opentimes", newOpenTimes);
                      }}
                      onDelete={(opentime) => {
                        const newOpenTimes = values.opentimes?.filter(
                          (ot) => ot.id !== opentime
                        );
                        setFieldValue("opentimes", newOpenTimes);
                      }}
                    />
                  </Grid>
                </StoreBlock>
                <StoreBlock container spacing={2}>
                  {/** Social media */}
                  <Grid item xs={12}>
                    <Typography variant="h6">Sosiaalinen media</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Facebook"
                      variant="outlined"
                      name="social.facebook"
                      placeholder="https://www.facebook.com/"
                      value={values.social?.facebook || ""}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Instagram"
                      variant="outlined"
                      name="social.instagram"
                      placeholder="https://www.instagram.com/"
                      value={values.social?.instagram || ""}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Twitter"
                      variant="outlined"
                      name="social.twitter"
                      placeholder="https://twitter.com/"
                      value={values.social?.twitter || ""}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Youtube"
                      variant="outlined"
                      name="social.youtube"
                      placeholder="https://www.youtube.com/"
                      value={values.social?.youtube || ""}
                      onChange={handleChange}
                    />
                  </Grid>
                </StoreBlock>

                <StoreBlock container spacing={2}>
                  {/** Notes */}
                  <Grid item xs={12}>
                    <Typography variant="h6">Huomioitavaa</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {values.notes?.map((note, index) => (
                      <Box
                        display={"flex"}
                        key={index}
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Typography variant="body2">{note.id}</Typography>
                        <Typography variant="body2">{note.notes}</Typography>
                        <IconButton
                          onClick={async () => {
                            const newNotes = values.notes?.filter(
                              (notes) => notes.id !== note.id
                            );
                            setFieldValue("notes", newNotes);
                          }}
                        >
                          <Clear />
                        </IconButton>
                      </Box>
                    ))}
                  </Grid>
                  <Grid item xs={12}>
                    <NoteForm setFieldValue={setFieldValue} values={values} />
                  </Grid>
                </StoreBlock>

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  sx={{ mt: 2 }}
                >
                  Tallenna
                </Button>
              </Box>
            )}
          </Formik>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default NewStore;
