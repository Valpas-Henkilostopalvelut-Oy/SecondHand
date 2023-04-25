import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import type { LazyAreas, LazyCity } from "../../../../models";
import { Areas } from "../../../../models";
import { DataStore } from "aws-amplify";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";
import { Formik } from "formik";
import * as Yup from "yup";

const AteasCity = (props: LazyCity) => {
  const { name } = props;
  return (
    <Typography>
      <b>Kaupunki</b>
      {name}
    </Typography>
  );
};

const AreasTab = () => {
  const [areas, setAreas] = useState<LazyAreas[]>([]);

  useEffect(() => {
    const fetchAreas = async () => {
      const areas = await DataStore.query(Areas);
      setAreas(areas);
    };
    fetchAreas();
  }, []);

  return (
    <Box>
      <Typography variant="h4">Alueet</Typography>
      <Box sx={{ mt: 2 }}>
        <Formik
          initialValues={{
            name: "",
            city: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Pakollinen kenttä"),
            city: Yup.string().required("Pakollinen kenttä"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            const { name, city } = values;
            console.log(name, city);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    id="name"
                    name="name"
                    label="Alueen nimi"
                    fullWidth
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="city"
                    name="city"
                    label="Kaupunki"
                    fullWidth
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.city && Boolean(errors.city)}
                    helperText={touched.city && errors.city}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={!values.name || !values.city}
                  >
                    Lisää
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </Formik>
      </Box>
      {areas.map((area: LazyAreas) => {
        const { cities, id, name } = area;
        return (
          <Accordion key={id}>
            <AccordionSummary>
              <Typography>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                {cities &&
                  cities.map((city: LazyCity | null) => {
                    if (!city) return null;
                    return <AteasCity key={city.id} {...city} />;
                  })}
              </Box>
            </AccordionDetails>

            <AccordionActions>
              <ClearIcon />
            </AccordionActions>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default AreasTab;
