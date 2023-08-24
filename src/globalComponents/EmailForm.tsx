import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { sentEmail } from "../services/emailSend";

const MessageAlert = ({
  open,
  handleClose,
  message,
  error,
}: {
  open: boolean;
  handleClose: () => void;
  message: string;
  error?: boolean | null;
}) => (
  <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
  >
    <Alert onClose={handleClose} severity={error ? "error" : "success"}>
      {message}
    </Alert>
  </Snackbar>
);

const validationSchema = yup.object({
  email: yup.string().email("Virheellinen sähköposti").required("Pakollinen"),
  subject: yup.string().required("Pakollinen"),
  message: yup.string().required("Pakollinen"),
});

const EmailForm = ({
  open,
  handleClose,
  email,
}: {
  open: boolean;
  handleClose: () => void;
  email: string;
}) => {
  const [openAlert, setOpenAlert] = React.useState({
    open: false,
    message: "",
    error: false,
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Lähetä sähköposti</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{ email: email, subject: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            await sentEmail(values)
              .then(() => {
                setOpenAlert({
                  open: true,
                  message: "Sähköposti lähetetty",
                  error: false,
                });
                resetForm();
                setSubmitting(false);
              })
              .catch(() => {
                setOpenAlert({
                  open: true,
                  message: "Sähköpostin lähetys epäonnistui",
                  error: true,
                });
                setSubmitting(false);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Sähköposti"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ mb: 2, mt: 2 }}
              />
              <TextField
                fullWidth
                id="subject"
                name="subject"
                label="Aihe"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.subject && Boolean(errors.subject)}
                helperText={touched.subject && errors.subject}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                id="message"
                name="message"
                label="Viesti"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
              <DialogActions>
                <Button onClick={handleClose}>Peruuta</Button>
                <Button type="submit" disabled={isSubmitting}>
                  Lähetä
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
        <MessageAlert
          open={openAlert.open}
          handleClose={() =>
            setOpenAlert({
              open: false,
              message: "",
              error: false,
            })
          }
          message={openAlert.message}
          error={openAlert.error}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EmailForm;
