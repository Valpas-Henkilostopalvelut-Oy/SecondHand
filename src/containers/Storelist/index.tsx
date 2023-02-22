import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import { Search } from "../../components/Search";
import { storelist } from "./stores";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
/**
 * 
 * 
    id: 1,
    name: "N3xt Level Second Hand Shop",
    description: "“Moderni ja siisti kirppis.”",
    categories: [1, 2],
    services: [1, 2, 3],
    sellplaces: {
      all: 50,
      free: 10,
    },
    pricelist: {
      price: "0,50€ / kpl",
    },
    opentimes: "Ma-Pe 10-18, La 10-16",
    contact: {
      phone: "+358 50 432 3800",
      email: "hello@n3xtlevel.fi",
      website: "https://n3xtlevel.fi/",
    },
    location: {
      address: "Tähtelänkatu 4",
      city: "Salo",
      zip: "24100",
      area: "Varsinais-Suomi",
      driveto: "https://goo.gl/maps/dxXKT5HasxEHEWxz7",
    },
    imgs: [
      {
        key: "img1.jpg",
        src: "https://www.n3xtlevel.fi/wp-content/uploads/2020/09/IMG_20200918_114000.jpg",
      },
      {
        key: "img2.jpg",
        src: "https://www.n3xtlevel.fi/wp-content/uploads/2020/09/IMG_20200918_114000.jpg",
      },
      {
        key: "img3.jpg",
        src: "https://www.n3xtlevel.fi/wp-content/uploads/2020/09/IMG_20200918_114000.jpg",
      },
    ],
  },
 */

export const Storelist = () => {
  const list = storelist();

  return (
    <Box>
      <Typography variant="h4">Kaikki kirpputorit</Typography>
      <Search />

      {list.map((item) => (
        <Box key={item.id}>
          <Storeitem {...item} />
        </Box>
      ))}
    </Box>
  );
};

const Storeitem = (props: any) => {
  const {
    name,
    description,
    categories,
    services,
    sellplaces,
    pricelist,
    opentimes,
    contact,
    location,
  } = props;
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>{description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Kategoriat</Typography>
            <Typography>{categories.join(", ")}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Aukiaika</Typography>
            <Typography>{opentimes}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Yhteystiedot</Typography>
            <Typography>{contact.phone}</Typography>
            <Typography>{contact.email}</Typography>
            <Link href={contact.website} underline="hover">
              Nettisiivu
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Sijainti</Typography>
            <Typography>{location.address + ", " + location.city}</Typography>
            <Typography>{location.zip}</Typography>
            <Typography>{location.area}</Typography>
            <Link href={location.driveto} underline="hover">
              ajo-ohjeet
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Itemimgs {...props} />
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h6">Palvelut</Typography>
            <Typography>{services.join(", ")}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Myyntipaikat</Typography>
            <Typography>{sellplaces.all}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Hinta</Typography>
            <Typography>{pricelist.price}</Typography>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

const Itemimgs = (props: any) => {
  const { imgs, embedmap } = props;

  // eslint-disable-next-line autofix/no-console
  console.log(imgs);

  return (
    <Grid container spacing={2}>
      {imgs.map((img: any) => (
        <Grid item xs={4} key={img.key}>
          <img src={img.src} alt={img.key} style={{ width: "100%" }} />
        </Grid>
      ))}
      <Grid item xs={4}>
        <iframe
          src={embedmap}
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        />
      </Grid>
    </Grid>
  );
};
