import React from "react";
import { Grid, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { createNewStoreAsync } from "../redux/newstore";

const Create = () => {
  const dispatch = useAppDispatch();
  const values = useAppSelector((state) => state.newstore);
  const { isAdmin, userID } = useAppSelector((state) => state.user);
  const handleClick = () => {
    dispatch(
      createNewStoreAsync({
        newStore: values,
        isAdmin: isAdmin,
        username: userID || "",
      })
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <Button variant="contained" onClick={() => console.log(values)}>
          Log
        </Button>
      </Grid>
      <Grid item sm={10} />
      <Grid item sm={2}>
        <Button variant="contained" onClick={handleClick}>
          Luo uusi kirppis
        </Button>
      </Grid>
    </Grid>
  );
};

export default Create;
