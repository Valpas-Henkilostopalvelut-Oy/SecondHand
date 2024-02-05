import React from "react";
import { Container, Box, Typography, styled } from "@mui/material";
import LinkButton from "../../components/LinkButton";

const AdminBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(4),
  gap: theme.spacing(2),
}));

export const Admin = (): JSX.Element => {
  return (
    <Container>
      <AdminBox>
        <Typography variant="h2" gutterBottom>
          Admin
        </Typography>
        <LinkButton to="/admin/businesses">Businesses</LinkButton>
        <LinkButton to="/admin/regions">Regions</LinkButton>
        <LinkButton to="/admin/categories">Categories</LinkButton>
        <LinkButton to="/admin/types">Types</LinkButton>
      </AdminBox>
    </Container>
  );
};
