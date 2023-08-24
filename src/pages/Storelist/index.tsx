import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Search } from "../../globalComponents/Search";
import StoreItem from "./components/StoreItem";
import { useParams } from "react-router-dom";
import { fetchStoreFilter } from "../../services/storeLib";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import LoadingComponent from "../../globalComponents/LoadingComponent";
import type { LazyStore } from "../../models";

const Storelist = () => {
  const { category } = useParams<{ category: string }>();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.stores);
  useEffect(() => {
    if (category) {
      dispatch(
        fetchStoreFilter({
          type: category,
          title: "",
          category: null,
          area: null,
          city: null,
          isConfirmed: true,
        })
      );
    }
  }, [category]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <Box>
      <Search />
      {data?.map((item: LazyStore) => (
        <StoreItem store={item} key={item.id} />
      ))}
    </Box>
  );
};

export default Storelist;
