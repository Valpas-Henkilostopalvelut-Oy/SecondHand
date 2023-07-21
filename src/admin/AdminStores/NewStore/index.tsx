import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  styled,
  TextField,
  type BoxProps,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Formik } from "formik";
import * as yup from "yup";
import type StoreFormProps from "./types";

const StoreBlock = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginBottom: theme.spacing(2),
}));

const NewStore = ({ box }: { box: BoxProps }) => {
  const [open, setOpen] = useState(false);
  const initialValues: StoreFormProps = {
    type: "",
    name: "",
    contact: {
      phone: undefined,
      email: undefined,
      website: undefined,
    },
    location: {
      city: "",
      admin_name: "",
    },
    description: null,
    categories: null,
    imgs: null,
    social: null,
    settings: {
      isConfirmed: {
        status: false,
      },
    },
    logo: null,
    opentimes: null,
  };

  <Box {...box}>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">Uusi paikka</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Formik initialValues={initialValues}>
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
          }) => <Box component="form" onSubmit={handleSubmit}></Box>}
        </Formik>
      </AccordionDetails>
    </Accordion>
  </Box>;
};
