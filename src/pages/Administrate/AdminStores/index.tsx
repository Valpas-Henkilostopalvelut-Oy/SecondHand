import React from "react";
import { Box, Grid } from "@mui/material";
import NewStore from "./components/NewStore";
import StoreItem from "./components/StoreItem";
import withLoading from "./components/withloading";
import { ErrorBoundary } from "../../../services/errorLib";
import { clearError } from "../../../app/reducer/adminStores";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

const Stores = () => {
  const { data, error, isError } = useAppSelector(
    (state) => state.adminStoresSlice
  );
  const dispatch = useAppDispatch();
  const clear = () => dispatch(clearError());

  if (!data) return null;
  return (
    <Box>
      <Grid container spacing={2}>
        <NewStore />
      </Grid>

      {data.map((kirppis) => (
        <StoreItem key={kirppis.id} {...kirppis} />
      ))}
      <ErrorBoundary error={error} isError={isError} clearError={clear} />
    </Box>
  );
};

const AdminStores = withLoading(Stores);

export default AdminStores;
