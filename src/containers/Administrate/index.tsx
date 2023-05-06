import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import Category from "./Tabs/Categories";
import Kirppukset from "./Tabs/Stores";
import { Hub } from "aws-amplify";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: any) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const Adminpanel = (props: any) => {
  const { auth, isAdmin } = props;
  const [value, setValue] = React.useState(0);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    Hub.listen("datastore", async (hubData) => {
      const { event, data } = hubData.payload;
      if (event === "outboxStatus") {
        console.log(data);
        setIsEmpty(data.isEmpty);
      }
    });
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="admin panel">
          <Tab label="Kirppukset" {...a11yProps(0)} />
          <Tab label="Kategoriat" {...a11yProps(1)} />
          <Tab label="Tuotteet" {...a11yProps(2)} />
          <Tab label="Käyttäjät" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Kirppukset {...props} isEmpty={isEmpty} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Category {...props} isEmpty={isEmpty} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Tuotteet
      </TabPanel>
      <TabPanel value={value} index={3}>
        Käyttäjät
      </TabPanel>
    </Box>
  );
};

export default Adminpanel;
