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

import { Editemail, Editphone, Website } from "./contact";
import { Selectcategories } from "./selectcategory";
import {
  Editaddress,
  Editarea,
  Editcity,
  Editcountry,
  Editzip,
} from "./location";

import Createnew from "./create";

const StoreBlock = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginBottom: theme.spacing(2),
}));

const tempValues = {
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
    address: null,
    city: null,
    area: null,
    country: null,
    zip: null,
    driveto: null,
  },
  imgs: [],
};

const NewKirppis = (props: any) => {
  const [values, setValues] = useState(tempValues);
  const [open, setOpen] = useState(false);

  return (
    <Grid item container xs={12} spacing={2}>
      <Grid item xs={10} />
      <Grid item xs={2}>
        <Button variant="contained" onClick={() => setOpen(!open)} fullWidth>
          Lisää kirppis
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Collapse in={open}>
          <StoreBlock>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Typography variant="h6">Lisää kirppis</Typography>
              </Grid>

              <Grid item sm={6}>
                <TextField
                  label="Kirppiksen nimi"
                  variant="outlined"
                  fullWidth
                  value={values.name}
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                  helperText="Tämä on kirppiksen nimi"
                />
              </Grid>

              <Grid item sm={6}>
                <TextField
                  label="Kirppiksen kuvaus"
                  variant="outlined"
                  fullWidth
                  value={values.description}
                  multiline
                  rows={3}
                  onChange={(e) =>
                    setValues({ ...values, description: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </StoreBlock>

          <StoreBlock>
            <Grid container spacing={2}>
              <Grid item sm={4}>
                <Selectcategories values={values} setValues={setValues} />
              </Grid>
            </Grid>
          </StoreBlock>

          <StoreBlock>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Typography variant="h6">Yhteystiedot</Typography>
              </Grid>
              <Editemail values={values} setValues={setValues} />
              <Editphone values={values} setValues={setValues} />
              <Website values={values} setValues={setValues} />
            </Grid>
          </StoreBlock>

          <StoreBlock>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Typography variant="h6">Opentimes</Typography>
              </Grid>
            </Grid>
          </StoreBlock>

          <StoreBlock>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Typography variant="h6">Sijainti</Typography>
              </Grid>
              <Editaddress values={values} setValues={setValues} />
              <Editcity values={values} setValues={setValues} />
              <Editzip values={values} setValues={setValues} />
              <Editarea values={values} setValues={setValues} />
              <Editcountry values={values} setValues={setValues} />
            </Grid>
          </StoreBlock>

          <StoreBlock>
            <Grid container spacing={2}>
              <Grid item sm={10} />
              <Createnew
                values={values}
                {...props}
                onClear={() => {
                  setValues(tempValues);
                  setOpen(false);
                }}
              />
            </Grid>
          </StoreBlock>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default NewKirppis;
