import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  styled,
} from "@mui/material";
import { Search } from "../../components/Search";
import { storelist } from "./stores";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { categories } from "../../components/Search/categories";
import { services } from "../../components/Search/services";
import { DataStore } from "aws-amplify";
import type { LazyStore, LazyCategories, LazyOpentime } from "../../models";
import { Categories, Store } from "../../models";

const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const Storelist = () => {
  const [search, setSearch] = useState({
    search: "",
    area: "",
    city: "",
  });
  const [category, setCategory] = useState<string[]>([]);
  const [stores, setStores] = useState<LazyStore[]>([]);

  useEffect(() => {
    const fetchStores = async () => {
      const stores = await DataStore.query(Store);
      setStores(stores.filter((item) => item.isConfirmed));
    };
    fetchStores();
  }, [search]);

  return (
    <Box>
      <Typography variant="h4">Kaikki kirpputorit</Typography>
      <Search
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      {stores.map((item: LazyStore) => (
        <Storeitem {...item} key={item.id} />
      ))}
    </Box>
  );
};

const Opentime = (props: any) => {
  const { day, open, close } = props;
  const o = new Date(open);
  const c = new Date(close);
  const opentime = o.getHours() + ":" + o.getMinutes().toString().padStart(2, "0");
  const closetime = c.getHours() + ":" + c.getMinutes().toString().padStart(2, "0");
  return (
    <Box>
      <Typography>
        <b>{day}</b> {opentime} - {closetime}
      </Typography>
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
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginBottom: "1rem",
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {name}
        </AccordionSummary>
        <AccordionDetails>
          <CustomBox hidden={!description}>
            <Typography>{description}</Typography>
          </CustomBox>

          <CustomBox hidden={!categories}>
            <Typography variant="h6">Kategoriat</Typography>
            {categories.map((item: LazyCategories) => (
              <Typography key={item.id}>{item.name}</Typography>
            ))}
          </CustomBox>

          <CustomBox>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h6">Aukiaika</Typography>
                {opentimes.map((item: LazyOpentime) => (
                  <Opentime {...item} key={item.id} />
                ))}
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
                <Typography>
                  {location.address + ", " + location.city}
                </Typography>
                <Typography>{location.zip}</Typography>
                <Typography>{location.area}</Typography>
                <Link href={location.driveto} underline="hover">
                  ajo-ohjeet
                </Link>
              </Grid>
            </Grid>
          </CustomBox>

          <CustomBox>
            <Grid container spacing={2}>
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
          </CustomBox>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const Itemimgs = (props: any) => {
  const { imgs, embedmap } = props;

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
