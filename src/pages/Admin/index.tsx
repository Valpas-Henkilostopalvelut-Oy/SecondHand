import React from "react";
import { Box, List, ListItem, ListItemButton } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { Link } from "react-router-dom";

const paths = [
  {
    name: "Ads",
    path: "/admin/ads",
  },
  {
    name: "Categories",
    path: "/admin/categories",
  },
  {
    name: "Stores",
    path: "/admin/stores",
  },
  {
    name: "Evaluation",
    path: "/admin/evaluation",
  },
];

const Admin = ({ box }: { box?: BoxProps }) => (
  <Box {...box}>
    <List>
      {paths.map((item) => (
        <ListItem key={item.name}>
          <ListItemButton component={Link} to={item.path}>
            {item.name}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Admin;
