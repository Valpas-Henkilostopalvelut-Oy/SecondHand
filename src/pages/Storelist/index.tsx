import React, { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Search } from "../../globalComponents/Search";
import type { LazyStore } from "../../models";
import StoreItem from "./components/StoreItem";
import { useParams } from "react-router-dom";
import { fetchStoreFilter, fetchStores } from "../../app/reducer/stores";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

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
    } else {
      dispatch(fetchStores());
    }
  }, [category]);

  return (
    <Box>
      <Search />
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {!!data &&
        data.map((item: LazyStore) => <StoreItem {...item} key={item.id} />)}
    </Box>
  );
};

export default Storelist;
