/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Hub } from "aws-amplify";
import { toggleEmpty } from "../app/reducer/application";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAuth } from "../app/reducer/user";

const loadingApp = (Component: () => JSX.Element) => () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAuth());
  }, []);

  useEffect(() => {
    Hub.listen("datastore", ({ payload: { event, data } }) => {
      switch (event) {
        case "outboxStatus":
          setIsEmpty(data.isEmpty);
          break;
        default:
          break;
      }
    });
  }, []);

  dispatch(toggleEmpty(isEmpty));

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

  return <Component />;
};

export default loadingApp;
