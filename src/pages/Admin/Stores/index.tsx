import React from "react";
import { Box } from "@mui/material";
import NewStore from "./components/NewStore";
import StoreItem from "./components/StoreItem";
import { useAppSelector } from "../../../app/hooks";
import { AdminSearch } from "../../../globalComponents/Search";
import { ErrorStore } from "../../../services/errorLib";
import LoadingComponent from "../../../globalComponents/LoadingComponent";

const Stores = () => {
  const { data, isLoading } = useAppSelector((state) => state.stores);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <Box>
      <AdminSearch />
      <NewStore />
      {data?.map((kirppis) => (
        <StoreItem key={kirppis.id} {...kirppis} />
      ))}
      <ErrorStore />
    </Box>
  );
};

export default Stores;
