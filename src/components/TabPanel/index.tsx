import React from "react";
import { Box } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  name: string;
  index: number;
  value: number;
}

export const a11yProps = (
  index: number,
  name: string
): Record<string, unknown> => {
  return {
    id: `${name}-tab-${index}`,
    "aria-controls": `${name}-tabpanel-${index}`,
  };
};

export const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index, name, ...other } = props;

  return (
    <div
      hidden={value !== index}
      id={`${name}-tabpanel-${index}`}
      role="tabpanel"
      aria-labelledby={`${name}-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={"20px 0px"}>{children}</Box>}
    </div>
  );
};
