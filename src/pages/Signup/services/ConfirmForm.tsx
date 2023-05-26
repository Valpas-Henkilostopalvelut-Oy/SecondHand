import React from "react";
import { Box, TextField, Button, type BoxProps } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { verifyEmail, setError } from "../../../app/reducer/user";

interface ConfirmFormProps {
  code: string;
}

const values: ConfirmFormProps = {
  code: "",
};

const validationSchema = Yup.object().shape({
  code: Yup.string().required("Code is required"),
});

const ConfirmForm = (props: BoxProps) => {
  const email = useAppSelector((state) => state.user.userEmail);
  const dispatch = useAppDispatch();
  const onSubmit = (values: ConfirmFormProps) => {
    const { code } = values;
    if (!email) {
      dispatch(setError("No email found"));
      return;
    }
    dispatch(verifyEmail({ email, code }));
  };

  return (
    <Box {...props}>
      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
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
    </Box>
  );
};

export default ConfirmForm;
