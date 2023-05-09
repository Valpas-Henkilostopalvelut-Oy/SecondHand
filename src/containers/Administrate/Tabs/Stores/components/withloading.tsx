/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import type { StoresProps } from "../types";
import type { LazyStore } from "../../../../../models";
import { DataStore } from "aws-amplify";
import { Store } from "../../../../../models";

interface WithLoadingProps {
  auth: boolean;
  isAdmin: boolean;
  isEmpty: boolean;
}

const withLoading =
  (WrappedComponent: (data: StoresProps) => JSX.Element) =>
  (props: WithLoadingProps) => {
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

    return <WrappedComponent storelist={data} {...props} />;
  };

export default withLoading;
