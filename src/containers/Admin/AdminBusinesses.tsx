import React from "react";
import {
  Container,
  Box,
  Typography,
  styled,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  textAlign: "center",
}));

export const AdminBusinesses = (): JSX.Element => {
  const {
    business: {
      businesses: { businesses },
    },
  } = useAppSelector((state) => state);

  return (
    <StyledContainer>
      <HeaderBox>
        <Typography variant="h2">Admin Businesses</Typography>
        <Link to="/admin/businesses/create">Create</Link>
      </HeaderBox>

      <TableContainer component={Paper}>
        <Table aria-label="businesses table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Website URL</TableCell>
              {/* Add more headers as needed based on your business attributes */}
            </TableRow>
          </TableHead>
          <TableBody>
            {businesses &&
              businesses.map((business) => (
                <TableRow key={business.id}>
                  <TableCell>{business.name}</TableCell>
                  <TableCell>{business.description}</TableCell>
                  <TableCell>{business.websiteUrl}</TableCell>
                  {/* Add more cells as needed */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledContainer>
  );
};
