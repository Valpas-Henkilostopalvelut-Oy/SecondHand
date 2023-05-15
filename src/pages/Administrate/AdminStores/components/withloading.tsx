/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import type { StoresProps } from "../types";
import type { LazyStore } from "../../../../models";
import { DataStore } from "aws-amplify";
import { Store } from "../../../../models";
import { useAppSelector } from "../../../../app/hooks";

const withLoading =
  (WrappedComponent: (data: StoresProps) => JSX.Element) => () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState<LazyStore[] | null>(null);
    const isEmpty = useAppSelector((state) => state.application.isEmpty);
    console.log(isEmpty);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await DataStore.query(Store);
          setData(data);
          setLoading(false);
        } catch (error: any) {
          setError(error);
        }
      };

      isEmpty && fetchData();
    }, [isEmpty]);

    if (loading) {
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

    if (error) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1>Something went wrong</h1>
        </Box>
      );
    }

    return <WrappedComponent storelist={data} />;
  };

export default withLoading;
