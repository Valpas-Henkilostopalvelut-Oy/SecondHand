import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Collapse,
  styled,
} from "@mui/material";

import Contact from "./contact";
import Location from "./location";
import CategoriesSelect from "./categoriesselect";
import ImageSection from "./imgs";
import Opentimes from "./opentimes";
import Create from "./create";
import Basic from "./basic";
import type { valuesProps } from "../types";

const StoreBlock = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginBottom: theme.spacing(2),
}));

const tempValues: valuesProps = {
  name: String(),
  description: String(),
  categories: [],
  sellplaces: {
    all: 0,
    free: 0,
  },
  pricelist: [],
  embedmap: null,
  opentimes: [],
  contact: {
    email: null,
    phone: null,
    website: null,
  },
  location: {
    admin_name: null,
    driveto: null,
  },
  imgs: [],
  id: "",
};

const NewKirppis = (props: any) => {
  const [values, setValues] = useState<valuesProps>(tempValues);
  const [open, setOpen] = useState(false);

  return (
    <Grid item container xs={12} spacing={2}>
      <Grid item sm={10} xs={12} />
      <Grid item sm={2} xs={12}>
        <Button variant="contained" onClick={() => setOpen(!open)} fullWidth>
          Lisää kirppis
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Collapse in={open}>
          <StoreBlock>
            <Basic values={values} setValues={setValues} />
          </StoreBlock>

          <StoreBlock>
            <CategoriesSelect values={values} setValues={setValues} />
          </StoreBlock>

          <StoreBlock>
            <Contact values={values} setValues={setValues} />
          </StoreBlock>

          <StoreBlock>
            <Opentimes values={values} setValues={setValues} />
          </StoreBlock>

          <StoreBlock>
            <Location values={values} setValues={setValues} />
          </StoreBlock>

          <StoreBlock>
            <ImageSection values={values} setValues={setValues} />
          </StoreBlock>

          <StoreBlock>
            <Create
              values={values}
              onClear={() => setValues(tempValues)}
              {...props}
            />
          </StoreBlock>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default NewKirppis;
