import React, { useState, useEffect } from "react";
import type { LazyStore } from "../../../models";
import { DataStore } from "aws-amplify";
import { Store } from "../../../models";
import type { StorelistProps } from "../types";
import { Box, CircularProgress } from "@mui/material";

const withLoading =
  // eslint-disable-next-line react/display-name
  (WrappedComponent: (data: StorelistProps) => JSX.Element) => () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState<LazyStore[] | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await DataStore.query(Store);
          setData(data);

          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } catch (error: any) {
          setError(error);
        }
      };

      fetchData();
    }, []);

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
