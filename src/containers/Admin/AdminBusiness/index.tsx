import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  styled,
  Collapse,
  Button,
  IconButton,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { deleteBusiness } from "../../../redux/reducer/businessSlice";
import { Businesses } from "../../../models";
import { trimStringToNChars } from "../../../utils/wordService";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  textAlign: "center",
}));

const AdminBusiness = ({ business }: { business: Businesses }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteBusiness(id));
  };

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <ListItem>
        <ListItemButton onClick={handleOpen}>
          <ListItemText
            primary={business.name}
            secondary={trimStringToNChars(business.description, 100)}
          />
        </ListItemButton>
        <Link to={`/admin/businesses/${business.id}/edit`}>
          <IconButton onClick={handleOpen}>
            <EditIcon />
          </IconButton>
        </Link>
        <IconButton onClick={() => handleDelete(business.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText
              primary={business.cardDescription}
              secondary={business.description}
            />
          </ListItem>
        </List>
        <Divider />
      </Collapse>
    </div>
  );
};

export const AdminBusinesses = (): JSX.Element => {
  const {
    businesses: { businesses },
  } = useAppSelector((state) => state.business);

  return (
    <StyledContainer>
      <HeaderBox>
        <Typography variant="h2">Admin Businesses</Typography>
        <Button component={Link} to="/admin/businesses/create">
          New Business
        </Button>
      </HeaderBox>

      <List>
        {businesses &&
          businesses.map((business) => (
            <AdminBusiness key={business.id} business={business} />
          ))}
      </List>
    </StyledContainer>
  );
};
