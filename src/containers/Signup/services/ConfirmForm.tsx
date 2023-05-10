import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const handleConfirm = async (email: string, navigate: any, code: string) => {
  try {
    await Auth.confirmSignUp(email, code);
    navigate("/");
  } catch (error) {
    // eslint-disable-next-line autofix/no-console
    console.warn("error confirming sign up", error);
  }
};

const values = { code: "" };

const validationSchema = Yup.object().shape({
  code: Yup.string().required("Code is required"),
});

const ConfirmForm = (props: any) => {
  const { email } = props;
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={values}
      validationSchema={validationSchema}
      onSubmit={(values) => handleConfirm(email, navigate, values.code)}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
        errors,
        touched,
        isValid,
        dirty,
      }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            id="code"
            name="code"
            label="Code"
            value={values.code}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.code && Boolean(errors.code)}
            helperText={touched.code && errors.code}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting || !isValid || !dirty}
          >
            Vahvista
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default ConfirmForm;
