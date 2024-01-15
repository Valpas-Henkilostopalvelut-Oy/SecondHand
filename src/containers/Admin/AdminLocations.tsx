import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  styled,
  Box,
  TextField,
  Button,
  Tabs,
  Tab,
  Autocomplete,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Location, City } from "../../types/locations";
import {
  createLocation,
  createCities,
  deleteCity,
  deleteLocation,
} from "../../redux/reducer/locationSlice";
import { useFormik } from "formik";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const LocationsCreateForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const {
    locationSlice: { locations },
  } = useAppSelector((state) => state);

  const initialValuesLocation: Location = {
    adminName: "",
    country: "",
  };

  const initialValuesCity: City = {
    name: "",
    zipcode: "",
    locationId: "",
  };

  const formikLocation = useFormik({
    initialValues: initialValuesLocation,
    onSubmit: (values) => {
      dispatch(createLocation(values));
    },
  });

  const formikCity = useFormik({
    initialValues: initialValuesCity,
    onSubmit: (values) => {
      dispatch(createCities(values));
    },
  });

  return (
    <StyledContainer>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Location" {...a11yProps(0)} />
        <Tab label="City" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <form onSubmit={formikLocation.handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              id="adminName"
              name="adminName"
              label="Admin Name"
              value={formikLocation.values.adminName}
              onChange={formikLocation.handleChange}
              error={
                formikLocation.touched.adminName &&
                Boolean(formikLocation.errors.adminName)
              }
              helperText={
                formikLocation.touched.adminName &&
                formikLocation.errors.adminName
              }
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="country"
              name="country"
              label="Country"
              multiline
              value={formikLocation.values.country}
              onChange={formikLocation.handleChange}
              error={
                formikLocation.touched.country &&
                Boolean(formikLocation.errors.country)
              }
              helperText={
                formikLocation.touched.country && formikLocation.errors.country
              }
            />
          </Box>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={formikLocation.isSubmitting}
          >
            Create
          </Button>
        </form>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <form onSubmit={formikCity.handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formikCity.values.name}
              onChange={formikCity.handleChange}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="zipcode"
              name="zipcode"
              label="Zipcode"
              multiline
              value={formikCity.values.zipcode}
              onChange={formikCity.handleChange}
            />
          </Box>
          <Box mb={2}>
            <Autocomplete
              disablePortal
              id="Locations-Autocomplete"
              options={locations ?? []}
              getOptionLabel={(option) => option.adminName}
              fullWidth
              onChange={(event, value) => {
                formikCity.values.locationId = value?.id ?? "";
              }}
              renderInput={(params) => (
                <TextField {...params} label="Location" variant="standard" />
              )}
            />
          </Box>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={formikCity.isSubmitting}
          >
            Create
          </Button>
        </form>
      </TabPanel>
    </StyledContainer>
  );
};

export const AdminLocations = (): JSX.Element => {
  const {
    locationSlice: { locations, cities },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const handleDeleteLocation = (id: string) => {
    dispatch(deleteLocation(id));
  };
  const handleDeleteCity = (id: string) => {
    dispatch(deleteCity(id));
  };

  return (
    <StyledContainer>
      <HeaderBox>
        <Typography variant="h2">Admin Locations</Typography>
        <LocationsCreateForm />
      </HeaderBox>

      <TableContainer component={Paper}>
        <Table aria-label="locations table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Country</TableCell>
              {/* Add more headers as needed based on your business attributes */}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locations &&
              locations.map((location) => (
                <TableRow key={location.id}>
                  <TableCell>{location.adminName}</TableCell>
                  <TableCell>{location.country}</TableCell>
                  {/* Add more cells as needed */}
                  <TableCell>
                    <Button onClick={() => handleDeleteLocation(location.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table aria-label="cities table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              {/* Add more headers as needed based on your business attributes */}
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cities &&
              cities.map((city) => (
                <TableRow key={city.id}>
                  <TableCell >{city.name}</TableCell>
                  {/* Add more cells as needed */}
                  <TableCell align="right">
                    <Button onClick={() => handleDeleteCity(city.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledContainer>
  );
};
