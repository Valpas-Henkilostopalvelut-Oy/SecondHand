import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Typography,
  TextField,
  Autocomplete,
  Tabs,
  Tab,
  Button,
  Collapse,
  styled,
  Grid,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { search, initialState, reset } from "../../redux/reducer/searchSlice";
import { Formik } from "formik";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { fetchBusinessesShort } from "../../redux/reducer/businessSlice";
import { BusinessShort } from "../../types/businesses";
import { Link } from "react-router-dom";
import businessTypes from "../../testdata/businessType";
import categories from "../../testdata/categories";

export const regions = [
  "Varsinais-Suomi",
  "Satakunta",
  "Kanta-Häme",
  "Pirkanmaa",
  "Päijät-Häme",
  "Kymenlaakso",
  "Etelä-Karjala",
  "Uusimaa",
];

export const city = ["Helsinki", "Espoo", "Vantaa", "Tampere", "Turku"];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const BusinessCard = (business: BusinessShort): JSX.Element => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={business.image}
        alt={business.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {business.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {business.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/businesses/${business.id}`}>
          Lue lisää
        </Button>
      </CardActions>
    </Card>
  );
};

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index } = props;

  return (
    <div
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number): Record<string, unknown> => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const Businesses = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const {
    businesses: { businessesShort },
    search: { searchQuery },
  } = useAppSelector((state) => state.business);
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    dispatch(fetchBusinessesShort(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <Box display={"flex"} {...(isMobile && { flexDirection: "column" })}>
      {!isMobile ? (
        <div className="frame-wrapper">
          <SearchBlock />
        </div>
      ) : (
        <SearchBlockMobile />
      )}
      <Box padding={"0px 20px"}>
        <div className="showing-out-of-wrapper">
          <p className="div-12">
            <span className="span">Showing </span>
            <span className="text-wrapper-9">3</span>
            <span className="span"> out of </span>
            <span className="text-wrapper-9">300</span>
            <span className="span"> results</span>
          </p>
        </div>
        <Grid container spacing={2}>
          {businessesShort &&
            businessesShort.map((businessesShort) => (
              <Grid item xs={12} md={6} lg={4} xl={3} key={businessesShort.id}>
                <BusinessCard {...businessesShort} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

const OpenOnButton = styled(Button)(({ theme }) => ({
  // width 50% - 2px
  width: "calc(50% - 2px)",
  textTransform: "none",
  marginBottom: "2px",
}));

const SearchBlock = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box width={"350px"} padding={"0px 20px"} borderRight={"1px solid #d7d7d7"}>
      <Tabs value={value} onChange={handleChange} aria-label="SearchBlock-tabs">
        <Tab label="Filterit" {...a11yProps(0)} />
        <Tab label="Typpi" {...a11yProps(1)} />
        <Tab label="Alueet" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <FilterTab />
      </TabPanel>
    </Box>
  );
};

const FilterTab = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    search: { searchQuery },
  } = useAppSelector((state) => state.business);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      search({
        ...searchQuery,
        [event.target.name]: event.target.value,
      })
    );
  };

  const setFieldValue = (name: string, value?: string | null) => {
    dispatch(
      search({
        ...searchQuery,
        [name]: value,
      })
    );
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <Box
      component="form"
      display={"flex"}
      gap={"23px"}
      padding={"0px 10px"}
      flexDirection={"column"}
    >
      <Box>
        <TextField
          name="search"
          type="text"
          label="Hae"
          onChange={handleChange}
          value={searchQuery.search}
          fullWidth
          variant="standard"
        />
      </Box>
      <Box>
        <Typography variant="caption">Aukioloajat</Typography>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          paddingTop={"10px"}
        >
          <OpenOnButton variant="contained">Joka päivä</OpenOnButton>
          <OpenOnButton variant="outlined">Auki nyt</OpenOnButton>
          <OpenOnButton variant="outlined" disabled>
            Valitse päivä
          </OpenOnButton>
          <OpenOnButton variant="outlined">Tämä vikkonloppu</OpenOnButton>
        </Box>
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          id="Type-Autocomplete"
          options={businessTypes}
          fullWidth
          value={searchQuery.type}
          onChange={(event, value) =>
            dispatch(search({ ...searchQuery, type: value }))
          }
          renderInput={(params) => (
            <TextField {...params} label="Typpi" variant="standard" />
          )}
        />
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          disabled={!searchQuery.type}
          id="Category-Autocomplete"
          options={categories}
          value={searchQuery.category}
          fullWidth
          onChange={(event, value) =>
            dispatch(search({ ...searchQuery, category: value }))
          }
          renderInput={(params) => (
            <TextField {...params} label="Kategoria" variant="standard" />
          )}
        />
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          id="Area-Autocomplete"
          options={regions}
          value={searchQuery.adminName}
          onChange={(event, value) => setFieldValue("region", value)}
          renderInput={(params) => (
            <TextField {...params} label="Alue" variant="standard" />
          )}
        />
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          disabled={!searchQuery.adminName}
          id="City-Autocomplete"
          options={city}
          value={searchQuery.city}
          onChange={(event, value) => setFieldValue("city", value)}
          renderInput={(params) => (
            <TextField {...params} label="Kaupunki" variant="standard" />
          )}
        />
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          id="OrderBy-Autocomplete"
          options={["Uusimmat", "Halvimmat", "Kalleimmat", "Suosituimmat"]}
          value={searchQuery.orderBy}
          onChange={(event, value) => setFieldValue("orderBy", value)}
          renderInput={(params) => (
            <TextField {...params} label="Järjestä" variant="standard" />
          )}
        />
      </Box>
      <Box>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          startIcon={<SearchIcon />}
        >
          Etsi
        </Button>
      </Box>
      <Box>
        <Button
          type="reset"
          variant="outlined"
          fullWidth
          startIcon={<RestartAltIcon />}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

const SearchBlockMobile = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box padding={"10px 20px"}>
        <Button
          onClick={handleOpen}
          variant="outlined"
          fullWidth
          startIcon={<SearchIcon />}
        >
          Filterit
        </Button>
      </Box>
      <SwipeableDrawer
        anchor={"top"}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        <Box padding={"0px 20px"}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="SearchBlock-tabs"
          >
            <Tab label="Filterit" {...a11yProps(0)} />
            <Tab label="Typpi" {...a11yProps(1)} />
            <Tab label="Alueet" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <FilterTabMobile />
          </TabPanel>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

const FilterTabMobile = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    search: { searchQuery },
  } = useAppSelector((state) => state.business);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      search({
        ...searchQuery,
        [event.target.name]: event.target.value,
      })
    );
  };

  const setFieldValue = (name: string, value?: string | null) => {
    dispatch(
      search({
        ...searchQuery,
        [name]: value,
      })
    );
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <Box
      display={"flex"}
      gap={"25px"}
      padding={"20px 10px"}
      flexDirection={"column"}
    >
      <Box>
        <TextField
          name="search"
          type="text"
          label="Hae"
          onChange={handleChange}
          value={searchQuery.search}
          fullWidth
          variant="standard"
        />
      </Box>
      <Box>
        <Typography variant="caption">Aukioloajat</Typography>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          paddingTop={"10px"}
        >
          <OpenOnButton variant="contained">Joka päivä</OpenOnButton>
          <OpenOnButton variant="outlined">Auki nyt</OpenOnButton>
          <OpenOnButton variant="outlined" disabled>
            Valitse päivä
          </OpenOnButton>
          <OpenOnButton variant="outlined">Tämä vikkonloppu</OpenOnButton>
        </Box>
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          id="Type-Autocomplete"
          options={businessTypes}
          fullWidth
          value={searchQuery.type}
          onChange={(event, value) =>
            dispatch(search({ ...searchQuery, type: value }))
          }
          renderInput={(params) => (
            <TextField {...params} label="Typpi" variant="standard" />
          )}
        />
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          disabled={!searchQuery.type}
          id="Categories-Autocomplete"
          options={categories}
          fullWidth
          value={searchQuery.category}
          onChange={(event, value) =>
            dispatch(search({ ...searchQuery, category: value }))
          }
          renderInput={(params) => (
            <TextField {...params} label="Kategoria" variant="standard" />
          )}
        />
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          id="Area-Autocomplete"
          options={regions}
          value={searchQuery.adminName}
          onChange={(event, value) => setFieldValue("region", value)}
          renderInput={(params) => (
            <TextField {...params} label="Alue" variant="standard" />
          )}
        />
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          disabled={!searchQuery.adminName}
          id="City-Autocomplete"
          options={city}
          value={searchQuery.city}
          onChange={(event, value) => setFieldValue("city", value)}
          renderInput={(params) => (
            <TextField {...params} label="Kaupunki" variant="standard" />
          )}
        />
      </Box>
      <Box>
        <Autocomplete
          disablePortal
          id="OrderBy-Autocomplete"
          options={["Uusimmat", "Halvimmat", "Kalleimmat", "Suosituimmat"]}
          value={searchQuery.orderBy}
          onChange={(event, value) => setFieldValue("orderBy", value)}
          renderInput={(params) => (
            <TextField {...params} label="Järjestä" variant="standard" />
          )}
        />
      </Box>
      <Box>
        <Button variant="contained" fullWidth startIcon={<SearchIcon />}>
          Etsi
        </Button>
      </Box>
      <Box>
        <Button
          type="reset"
          variant="outlined"
          fullWidth
          startIcon={<RestartAltIcon />}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};
