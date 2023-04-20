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
import { DataStore, Storage } from "aws-amplify";
import type {
  LazyStore,
  LazyCategory,
  LazyOpentime,
  LazyContact,
  LazyLocation,
  LazyImage,
} from "../../models";
import { Categories, Store } from "../../models";
import type { ImgsTypes } from "./types";

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

const Opentime = (props: LazyOpentime) => {
  const { day, start, end } = props;
  if (!start || !end) return null;

  const o = new Date(start);
  const c = new Date(end);
  const opentime =
    o.getHours() + ":" + o.getMinutes().toString().padStart(2, "0");
  const closetime =
    c.getHours() + ":" + c.getMinutes().toString().padStart(2, "0");
  return (
    <Box>
      <Typography>
        <b>{day}</b> {opentime} - {closetime}
      </Typography>
    </Box>
  );
};

const Contact = (props: LazyContact) => (
  <Box>
    <Typography variant="h6">Yhteystiedot</Typography>
    <Typography>{props.phone}</Typography>
    <Typography>{props.email}</Typography>
    {props.website && (
      <Link href={props.website} underline="hover">
        Nettisiivu
      </Link>
    )}
  </Box>
);

const Location = (props: LazyLocation) => (
  <Box>
    <Typography variant="h6">Sijainti</Typography>
    <Typography>{props.address + ", " + props.city}</Typography>
    <Typography>{props.zip}</Typography>
    <Typography>{props.area}</Typography>
    {props.driveto && (
      <Link href={props.driveto} underline="hover">
        ajo-ohjeet
      </Link>
    )}
  </Box>
);

const Storeitem = (props: LazyStore) => {
  const [images, setImages] = useState<ImgsTypes[]>([]);
  const {
    name,
    description,
    categories,
    services,
    sellplaces,
    opentimes,
    contact,
    location,
    imgs,
  } = props;

  useEffect(() => {
    const handleLoadImages = async () => {
      if (!imgs) return;
      const imgData = await Promise.all(
        imgs.map(async (img: LazyImage | null) => {
          const url = img ? await Storage.get(img.key ?? "") : null;
          return { url, identify: img };
        })
      );

      setImages(imgData);
    };

    handleLoadImages();
  }, [props]);

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
            {categories &&
              categories.map((item: LazyCategory | null) => {
                if (item)
                  return <Typography key={item.id}>{item.name}</Typography>;
              })}
          </CustomBox>

          <CustomBox>
            <Grid container spacing={2}>
              {images &&
                images.map((item, key) => (
                  <Grid item xs={4} key={item.identify?.id}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        paddingBottom: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={item.url ?? ""}
                        alt={item.identify?.key ?? ""}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </CustomBox>

          <CustomBox>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h6">Aukiaika</Typography>
                {opentimes &&
                  opentimes.map((item: LazyOpentime | null) => {
                    if (item) return <Opentime {...item} key={item.id} />;
                  })}
              </Grid>

              <Grid item xs={4}>
                <Contact {...contact} />
              </Grid>

              <Grid item xs={4}>
                <Location {...location} />
              </Grid>
            </Grid>
          </CustomBox>

          <CustomBox>
            <Grid container spacing={2}>
              {services && (
                <Grid item xs={4}>
                  <Typography variant="h6">Palvelut</Typography>
                  <Typography>{services.join(", ")}</Typography>
                </Grid>
              )}
              {sellplaces && (
                <Grid item xs={4}>
                  <Typography variant="h6">Myyntipaikat</Typography>
                  <Typography>{sellplaces.all}</Typography>
                </Grid>
              )}
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
