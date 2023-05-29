import React, { useEffect } from "react";
import type { StorelistProps } from "../types";
import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchStoreFilter, fetchStores } from "../../../app/reducer/stores";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { resetSearch } from "../../../globalComponents/Search/redux/search";

const withLoading =
  // eslint-disable-next-line react/display-name
  (WrappedComponent: (data: StorelistProps) => JSX.Element) => () => {
    const { category } = useParams<{ category: string }>();
    const { data, isLoading } = useAppSelector((state) => state.stores);
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (category) {
        dispatch(
          fetchStoreFilter({
            type: category,
            title: "",
            category: null,
            area: null,
            city: null,
          })
        );
      } else {
        dispatch(fetchStores());
      }
      dispatch(resetSearch());
    }, [category]);

    if (isLoading) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      );
    }

    return <WrappedComponent storelist={data} />;
  };

export default withLoading;
