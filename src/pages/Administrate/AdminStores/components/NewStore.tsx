import React, { useState } from "react";
import { Box, Button, Grid, Collapse, styled } from "@mui/material";

import Contact from "./Contact";
import Location from "./Location";
import CategoriesSelect from "./CategoriesSelect";
import ImageSection from "./ImageSection";
import Opentimes from "./Opentimes";
import Create from "./Create";
import Basic from "./Basic";
import { ErrorBoundary } from "../../../../services/errorLib";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { clearError } from "../redux/newstore";

const StoreBlock = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginBottom: theme.spacing(2),
}));

const NewStore = () => {
  const [open, setOpen] = useState(false);
  const { error, isError } = useAppSelector((state) => state.newstore);
  const dispatch = useAppDispatch();
  const clear = () => dispatch(clearError());

  return (
    <>
      <Grid item container xs={12} spacing={2}>
        <Grid item sm={8} xs={12} />
        <Grid item sm={4} xs={12}>
          <Button variant="contained" onClick={() => setOpen(!open)} fullWidth>
            Lisää kirppis
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Collapse in={open}>
            <StoreBlock>
              <Basic />
            </StoreBlock>

            <StoreBlock>
              <Contact />
            </StoreBlock>

            <StoreBlock>
              <CategoriesSelect />
            </StoreBlock>

            <StoreBlock>
              <Opentimes />
            </StoreBlock>

            <StoreBlock>
              <Location />
            </StoreBlock>

            <StoreBlock>
              <ImageSection />
            </StoreBlock>

            <StoreBlock>
              <Create />
            </StoreBlock>
          </Collapse>
        </Grid>
      </Grid>
      <ErrorBoundary error={error} isError={isError} clearError={clear} />
    </>
  );
};

export default NewStore;
