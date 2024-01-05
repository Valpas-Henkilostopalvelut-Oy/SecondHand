import React, { useEffect } from "react";
import { Container, Box, Typography, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { openBusiness } from "../../redux/reducer/businessSlice";

export const Business = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const business = useAppSelector(
    (state) => state.businesses.previouseBusinesses
  );

  useEffect(() => {
    dispatch(openBusiness(id as string));
  }, [dispatch, id]);

  if (business === undefined) {
    return (
      <Container>
        <Box>
          <Typography variant="h1">Not Found</Typography>
        </Box>
      </Container>
    );
  }

  if (business === null) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  console.log(business);

  return (
    <Container>
      <Box>
        <Typography variant="h1">Business</Typography>
      </Box>
    </Container>
  );
};
