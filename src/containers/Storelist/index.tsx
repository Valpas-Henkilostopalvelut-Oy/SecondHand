import React, { useEffect, useState } from "react";
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
import { categories } from "../../components/Search/categories";
import { services } from "../../components/Search/services";

export const Storelist = () => {
  const [search, setSearch] = useState({
    search: "",
    area: "",
    city: "",
  });
  const list = storelist();
  const [category, setCategory] = useState<string[]>([]);

  return (
    <Box>
      <Typography variant="h4">Kaikki kirpputorit</Typography>
      <Search
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

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
            <Typography>
              {categories.map((item: any) => (
                <Box key={item.id}>{item.name}</Box>
              ))}
            </Typography>
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
          <img
            src={img.src}
            alt={img.key}
            style={{ width: "100%", objectFit: "cover" }}
            height="350"
            loading="lazy"
          />
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
