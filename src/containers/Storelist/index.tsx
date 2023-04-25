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
import { Search } from "./Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataStore, Storage } from "aws-amplify";
import type {
  LazyStore,
  LazyCategory,
  LazyOpentime,
  LazyContact,
  LazyLocation,
  LazyImage,
} from "../../models";
import { Store } from "../../models";
import type { ImgsTypes, SearchState } from "./types";

const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const Storelist = () => {
  const [search, setSearch] = useState<SearchState>({
    search: "",
    area: "",
    city: "",
    category: [],
  });

  const [stores, setStores] = useState<LazyStore[]>([]);

  useEffect(() => {
    const fetchStores = async () => {
      const stores = await DataStore.query(Store);
      const filterByArea = stores.filter((item) => {
        if (search.area === "") return true;
        return item.location?.area === search.area;
      });

      const filterByCity = filterByArea.filter((item) => {
        if (search.city === "") return true;
        return item.location?.city === search.city;
      });

      const filterByCategory = filterByCity.filter((item) => {
        if (search.category.length === 0) return true;
        console.log(item.categories);
        return item.categories?.some((cat: any) =>
          search.category.includes(cat?.name)
        );
      });

      const filter = filterByCategory.filter((item) => {
        if (search.search === "") return true;
        return (
          item?.name?.toLowerCase().includes(search.search.toLowerCase()) ||
          item.location?.address
            ?.toLowerCase()
            .includes(search.search.toLowerCase()) ||
          item.location?.city
            ?.toLowerCase()
            .includes(search.search.toLowerCase()) ||
          item.location?.area
            ?.toLowerCase()
            .includes(search.search.toLowerCase()) ||
          item.location?.zip
            ?.toLowerCase()
            .includes(search.search.toLowerCase()) ||
          item.contact?.email
            ?.toLowerCase()
            .includes(search.search.toLowerCase()) ||
          item.contact?.phone
            ?.toLowerCase()
            .includes(search.search.toLowerCase()) ||
          item.contact?.website
            ?.toLowerCase()
            .includes(search.search.toLowerCase())
        );
      });

      setStores(filter);
    };
    fetchStores();
  }, [search]);

  return (
    <Box>
      <Typography variant="h4">Kaikki kirpputorit</Typography>
      <Search
        search={search}
        setSearch={setSearch}
        onClick={() => console.log(search)}
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
          sx={{
            backgroundColor: "#f5f5f5",
            borderBottom: "1px solid #ccc",
            borderRadius: "0px",
            padding: "10px 40px",
          }}
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
