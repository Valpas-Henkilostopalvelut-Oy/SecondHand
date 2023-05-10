/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Auth, DataStore, Hub } from "aws-amplify";
import { toggleAuth, toggleAdmin, toggleEmpty } from "../app/application";
import { useAppDispatch } from "../app/hooks";
import { onError } from "./errorLib";

const loadingApp = (Component: () => JSX.Element) => () => {
  const [auth, setAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const onLoad = async () => {
      try {
        await DataStore.start();
        await Auth.currentSession();
        setAuth(true);
        const user = await Auth.currentAuthenticatedUser();
        const groups =
          user.signInUserSession.accessToken.payload["cognito:groups"];
        if (groups && groups.includes("admin")) {
          setIsAdmin(true);
        }
      } catch (error: any) {
        if (error !== "No current user") {
          onError(error);
        }
      }
      setLoading(false);
    };
    onLoad();
  }, []);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event } }) => {
      switch (event) {
        case "signIn":
          setAuth(true);
          break;
        case "signOut":
          setAuth(false);
          break;
        default:
          break;
      }
    });
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
  dispatch(toggleAuth(auth));
  dispatch(toggleAdmin(isAdmin));

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

  return <Component />;
};

export default loadingApp;
