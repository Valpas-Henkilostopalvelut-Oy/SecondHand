import React, { useState, useEffect } from "react";
import {
  Box,
  Tabs,
  Tab,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import SearchIcon from "@mui/icons-material/Search";
import { fetchBusinessesShort } from "../../redux/reducer/businessSlice";
import FilterTabMobile from "./FilterTabMobile";
import FilterTabDesktop from "./FilterTabDesktop";
import BusinessCard from "./BusinessCard";
import TypeSelect from "./TypeSelect";
import RegionSelect from "./RegionSelect";
import { TabPanel, a11yProps } from "../../components/TabPanel";

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
            Näytetään {businessesShort?.length ?? 0} tulosta
          </p>
        </div>
        <Grid container spacing={2}>
          {businessesShort &&
            businessesShort.map((businessesShort) => (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={businessesShort.id}>
                <BusinessCard {...businessesShort} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

const SearchBlock = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box width={"350px"} padding={"0px 20px"} borderRight={"1px solid #d7d7d7"}>
      <Tabs value={value} onChange={handleChange} aria-label="SearchBlock-tabs">
        <Tab label="Filterit" {...a11yProps(0, "searchBlock")} />
        <Tab label="Typpi" {...a11yProps(1, "searchBlock")} />
        <Tab label="Alueet" {...a11yProps(2, "searchBlock")} />
      </Tabs>
      <TabPanel value={value} index={0} name="searchBlock">
        <FilterTabDesktop />
      </TabPanel>
      <TabPanel value={value} index={1} name="searchBlock">
        <TypeSelect />
      </TabPanel>
      <TabPanel value={value} index={2} name="searchBlock">
        <RegionSelect />
      </TabPanel>
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
            <Tab label="Filterit" {...a11yProps(0, "searchBlock")} />
            <Tab label="Typpi" {...a11yProps(1, "searchBlock")} />
            <Tab label="Alueet" {...a11yProps(2, "searchBlock")} />
          </Tabs>
          <TabPanel value={value} index={0} name="searchBlock">
            <FilterTabMobile handleClose={handleClose} />
          </TabPanel>
          <TabPanel value={value} index={1} name="searchBlock">
            <TypeSelect handleClose={handleClose} />
          </TabPanel>
          <TabPanel value={value} index={2} name="searchBlock">
            <RegionSelect handleClose={handleClose} />
          </TabPanel>
        </Box>
      </SwipeableDrawer>
    </>
  );
};
