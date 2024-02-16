import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Autocomplete,
  Checkbox,
  Collapse,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik, FormikProps } from "formik"; 
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { createBusiness } from "../../../redux/reducer/businessSlice";
import {
  NewBusiness,
  OpenHours,
  Periods,
  Social,
  TimeOfDay,
  Contact,
} from "../../../types/businesses";
import ImageUpload from "../../../components/ImageUpload";
import { uploadData } from "@aws-amplify/storage";
import { DateTime } from "luxon";
import { TimePicker } from "@mui/x-date-pickers";

const days = [
  "Maanantai",
  "Tiistai",
  "Keskiviikko",
  "Torstai",
  "Perjantai",
  "Lauantai",
  "Sunnuntai",
];

const dateToTimeOfDate = (
  date: DateTime | null,
  day: number | null
): TimeOfDay => {
  if (!date || day === null) {
    return { day: 0, hours: 0, minute: 0, date: { year: 0, month: 0, day: 0 } };
  }
  return {
    day,
    hours: date.hour,
    minute: date.minute,
    date: {
      year: date.year,
      month: date.month,
      day: date.day,
    },
  };
};

const timeOfDateToDate = (timeOfDay: TimeOfDay): DateTime | null => {
  if (
    !Number.isFinite(timeOfDay.hours) ||
    !Number.isFinite(timeOfDay.minute) ||
    !Number.isFinite(timeOfDay.date.year) ||
    !Number.isFinite(timeOfDay.date.month) ||
    !Number.isFinite(timeOfDay.date.day)
  ) {
    console.error("One of the timeOfDay fields is NaN", timeOfDay);
    return null;
  }

  return DateTime.fromObject({
    year: timeOfDay.date.year,
    month: timeOfDay.date.month,
    day: timeOfDay.date.day,
    hour: timeOfDay.hours,
    minute: timeOfDay.minute,
  });
};

const extractUrl = (htmlString?: string | null): string | null => {
  if (!htmlString) return null;
  const regex = /src="(.+?)"/;
  const found = htmlString.match(regex);
  if (found) return found[1];
  return null;
};

const BusinessIframeGetDirrection = ({
  formik,
  iframe,
  direction,
}: {
  formik: FormikProps<NewBusiness>;
  iframe?: string | null;
  direction?: string | null;
}): JSX.Element => {
  const [enable, setEnable] = useState<boolean>(false);
  const handleEnable = () => {
    setEnable(!enable);
    if (!enable) {
      formik.setFieldValue("iframe", "");
      formik.setFieldValue("direction", "");
    } else {
      formik.setFieldValue("iframe", null);
      formik.setFieldValue("direction", null);
    }
  };
  return (
    <Box mb={2}>
      <Accordion>
        <AccordionSummary>
          <Typography>Get direction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column">
            <Box mb={2}>
              <Typography>Enable</Typography>
              <Checkbox
                checked={enable}
                onChange={handleEnable}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
            <Collapse in={enable}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  id="iframe"
                  name="iframe"
                  label="Iframe"
                  value={iframe ?? ""}
                  onChange={formik.handleChange}
                />
                <Button
                  onClick={() =>
                    formik.setFieldValue("iframe", extractUrl(iframe))
                  }
                >
                  Get iframe from url
                </Button>
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  id="direction"
                  name="dirrection"
                  label="Direction"
                  value={direction ?? ""}
                  onChange={formik.handleChange}
                />
              </Box>
            </Collapse>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const BusinessContacts = ({
  formik,
  contacts,
}: {
  formik: FormikProps<NewBusiness>;
  contacts?: (Contact | null)[] | null;
}): JSX.Element => {
  const enable = contacts !== null && contacts !== undefined;

  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    phone: "",
  });

  const handleEnable = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (enable) {
      formik.setFieldValue("contacts", null);
    } else {
      formik.setFieldValue("contacts", []);
    }
  };

  const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddNewContact = () => {
    const prevContacts = formik.values.contacts ?? [];
    prevContacts.push(contact);
    formik.setFieldValue("contacts", prevContacts);
    setContact({
      name: "",
      email: "",
      phone: "",
    });
  };

  const handleDeleteContact = (index: number) => {
    const prevContacts = formik.values.contacts ?? [];
    prevContacts.splice(index, 1);
    formik.setFieldValue("contacts", prevContacts);
  };

  return (
    <Box mb={2}>
      <Accordion>
        <AccordionSummary>
          <Typography>Contacts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column">
            <Box mb={2}>
              <Typography>Enable</Typography>
              <Checkbox
                checked={enable}
                onChange={handleEnable}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
            <Collapse in={enable}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  type="text"
                  value={contact?.name ?? ""}
                  onChange={handleContactChange}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={contact?.email ?? ""}
                  onChange={handleContactChange}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  label="Phone"
                  type="tel"
                  value={contact?.phone ?? ""}
                  onChange={handleContactChange}
                />
              </Box>
              <Box mb={2}>
                <Button onClick={handleAddNewContact}>Add new contact</Button>
              </Box>
              <Box mb={2}>
                <List>
                  {formik.values.contacts?.map((contact, index) => (
                    <div key={`${contact?.name}-${index}`}>
                      <ListItem>
                        <ListItemText
                          primary={contact?.name}
                          secondary={
                            <Typography>
                              {contact?.email} - {contact?.phone}
                            </Typography>
                          }
                        />
                        <Button onClick={() => handleDeleteContact(index)}>
                          Delete
                        </Button>
                      </ListItem>
                      <Divider />
                    </div>
                  ))}
                </List>
              </Box>
            </Collapse>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const BusinessSocial = ({
  formik,
  social,
}: {
  formik: FormikProps<NewBusiness>;
  social?: Social | null;
}): JSX.Element => {
  const enable = social !== null && social !== undefined;
  const handleEnable = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (enable) {
      formik.setFieldValue("social", null);
    } else {
      formik.setFieldValue("social", {
        facebook: null,
        instagram: null,
        twitter: null,
        tiktok: null,
      });
    }
  };

  const handleSocialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("social", {
      ...social,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box mb={2}>
      <Accordion>
        <AccordionSummary>
          <Typography>Social</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column">
            <Box mb={2}>
              <Typography>Enable</Typography>
              <Checkbox
                checked={enable}
                onChange={handleEnable}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
            <Collapse in={enable}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  id="facebook"
                  name="facebook"
                  label="Facebook"
                  value={social?.facebook ?? ""}
                  onChange={handleSocialChange}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  id="instagram"
                  name="instagram"
                  label="Instagram"
                  value={social?.instagram ?? ""}
                  onChange={handleSocialChange}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  id="twitter"
                  name="twitter"
                  label="Twitter"
                  value={social?.twitter ?? ""}
                  onChange={handleSocialChange}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  id="tiktok"
                  name="tiktok"
                  label="Tiktok"
                  value={social?.tiktok ?? ""}
                  onChange={handleSocialChange}
                />
              </Box>
            </Collapse>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const BusinessOpenHours = ({
  formik,
  openHours,
}: {
  formik: FormikProps<NewBusiness>;
  openHours?: OpenHours | null;
}): JSX.Element => {
  const enable = openHours !== null && openHours !== undefined;

  const [dateValues, setDateValues] = useState({
    open: {
      day: 0,
      hours: 0,
      minute: 0,
      date: {
        year: 0,
        month: 0,
        day: 0,
      },
    },
    close: {
      day: 0,
      hours: 0,
      minute: 0,
      date: {
        year: 0,
        month: 0,
        day: 0,
      },
    },
  });

  const handleEnable = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (enable) {
      formik.setFieldValue("openHours", null);
    } else {
      formik.setFieldValue("openHours", {
        openNow: false,
      });
    }
    // Reset date values
    setDateValues({
      open: {
        day: 0,
        hours: 0,
        minute: 0,
        date: {
          year: 0,
          month: 0,
          day: 0,
        },
      },
      close: {
        day: 0,
        hours: 0,
        minute: 0,
        date: {
          year: 0,
          month: 0,
          day: 0,
        },
      },
    });
  };
  const handleChangeDay = (value: string | null) => {
    setDateValues({
      ...dateValues,
      open: {
        ...dateValues.open,
        day: days.indexOf(value ?? ""),
      },
      close: {
        ...dateValues.close,
        day: days.indexOf(value ?? ""),
      },
    });
  };
  const handleChangeValues = (
    time: DateTime | null,
    type: "open" | "close"
  ) => {
    setDateValues({
      ...dateValues,
      [type]: dateToTimeOfDate(time, dateValues.open.day),
    });
  };
  const handleAddNewTime = (newPeriod: Periods) => {
    const prevPeriods = formik.values.openHours?.period ?? [];
    const existingPeriodIndex = prevPeriods.findIndex(
      (period) => period.open.day === newPeriod.open.day
    );

    if (existingPeriodIndex > -1) {
      prevPeriods[existingPeriodIndex] = newPeriod;
    } else {
      prevPeriods.push(newPeriod);
    }

    prevPeriods.sort((a, b) => a.open.day - b.open.day);

    formik.setFieldValue("openHours", {
      ...formik.values.openHours,
      period: prevPeriods,
    });
  };

  const handleDeleteTime = (index: number) => {
    const prevPeriod = formik.values.openHours?.period ?? [];
    prevPeriod.splice(index, 1);
    formik.setFieldValue("openHours", {
      ...formik.values.openHours,
      period: prevPeriod,
    });
  };

  const periods = formik.values.openHours?.period ?? [];

  return (
    <Box mt={2}>
      <Accordion>
        <AccordionSummary>
          <Typography>Open Hours</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box mb={2}>
            <Typography>Enable</Typography>
            <Checkbox
              checked={enable}
              onChange={handleEnable}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>

          <Box display="flex" flexDirection="column" mb={2}>
            <Collapse in={enable}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Typography>Open day selector</Typography>
                  <Autocomplete
                    disablePortal
                    id="day"
                    options={days}
                    getOptionLabel={(option) => option}
                    onChange={(event, value) => handleChangeDay(value)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Day"
                        variant="standard"
                        required
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography>Open time selector</Typography>
                  <TimePicker
                    label="Open time"
                    name="open"
                    value={timeOfDateToDate(dateValues.open)}
                    sx={{ width: "100%", marginTop: 2 }}
                    onChange={(date) => {
                      handleChangeValues(date, "open");
                    }}
                    format="HH:mm"
                    ampm={false}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography>Close time selector</Typography>
                  <TimePicker
                    label="Close time"
                    name="close"
                    value={timeOfDateToDate(dateValues.close)}
                    sx={{ width: "100%", marginTop: 2 }}
                    onChange={(date) => {
                      handleChangeValues(date, "close");
                    }}
                    format="HH:mm"
                    ampm={false}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Button onClick={() => handleAddNewTime(dateValues)}>
                    Add new time
                  </Button>
                </Grid>
              </Grid>
            </Collapse>
          </Box>
          <Box mb={2} component={Collapse} in={enable}>
            <List>
              {periods.map((period, index) => (
                <div key={`${period.open.day}-${index}`}>
                  <ListItem>
                    <ListItemText
                      primary={days[period.open.day]}
                      secondary={
                        <Typography>
                          {period.open.hours}:{period.open.minute} -{" "}
                          {period.close.hours}:{period.close.minute}
                        </Typography>
                      }
                    />
                    <Button onClick={() => handleDeleteTime(index)}>
                      Delete
                    </Button>
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const initialValues: NewBusiness = {
  name: "",
  address: "",
  description: null,
  websiteUrl: null,
  logo: null,
  logoFile: null,

  type: null,
  location: null,
  city: null,
  categories: [],

  openHours: null,
  contacts: null,
  social: null,
  images: null,
};

export const BusinessCreateForm = () => {
  const { cities, locations } = useAppSelector((state) => state.locationSlice);
  const { businessTypes } = useAppSelector((state) => state.typeSlice);
  const { categories } = useAppSelector((state) => state.categoriesSlice);
  const dispatch = useAppDispatch();

  const handleCreateBusiness = async (values: NewBusiness) => {
    if (!values.logoFile) {
      return dispatch(createBusiness(values));
    }
    try {
      const result = uploadData({
        key: `businesses/${values.name}/${values.logoFile?.name}`,
        data: values.logoFile,
      });
      return dispatch(
        createBusiness({
          ...values,
          logo: (await result.result).key,
        })
      );
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      await handleCreateBusiness(values);
    },
  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) return;
    formik.setFieldValue("logoFile", file);
  };

  const handleFileDelete = () => {
    formik.setFieldValue("logoFile", null);
  };

  return (
    <Container>
      <Box margin={"20px 0"}>
        <form onSubmit={formik.handleSubmit}>
          {/* Create TextFields for simple fields */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Business Name"
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
                id="description"
                name="description"
                label="Description"
                multiline
                rows={4}
                value={formik.values.description ?? ""}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="websiteUrl"
                name="websiteUrl"
                label="Website URL"
                value={formik.values.websiteUrl ?? ""}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="categoriesIDs"
                options={categories ?? []}
                value={formik.values.categories}
                multiple
                getOptionLabel={(option) => option.name}
                onChange={(event, value) => {
                  formik.setFieldValue("categories", value);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Categories" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ImageUpload
                onFileChange={handleFileChange}
                imageFile={formik.values.logoFile}
                onDelete={handleFileDelete}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={4}>
              <Autocomplete
                disablePortal
                id="typesID"
                options={businessTypes ?? []}
                value={formik.values.type}
                getOptionLabel={(option) => option.name}
                onChange={(event, value) => {
                  formik.setFieldValue("type", value);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Type" required />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Autocomplete
                disablePortal
                id="locationsID"
                options={locations ?? []}
                value={formik.values.location}
                getOptionLabel={(option) => option.adminName}
                onChange={(event, value) => {
                  formik.setFieldValue("location", value);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Location" required />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Autocomplete
                disablePortal
                id="cityID"
                options={cities ?? []}
                value={formik.values.city}
                getOptionLabel={(option) => option.name}
                onChange={(event, value) => {
                  formik.setFieldValue("city", value);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="City" required />
                )}
              />
            </Grid>
          </Grid>
          <Box mb={2}>
            <BusinessIframeGetDirrection
              formik={formik}
              iframe={formik.values.iframe}
              direction={formik.values.dirrection}
            />
          </Box>
          <Box mb={2}>
            <BusinessContacts
              formik={formik}
              contacts={formik.values.contacts}
            />
          </Box>
          <Box mb={2}>
            <BusinessOpenHours
              formik={formik}
              openHours={formik.values.openHours}
            />
          </Box>
          <Box mb={2}>
            <BusinessSocial formik={formik} social={formik.values.social} />
          </Box>
          <Box mb={2}>
            <Button type="submit" disabled={formik.isSubmitting}>
              Submit
            </Button>
            <Button type="reset" onClick={formik.handleReset}>
              Reset
            </Button>
            <Button component={Link} to="/admin/businesses">
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};
