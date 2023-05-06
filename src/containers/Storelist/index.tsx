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

const CustomIframe = styled("iframe")({
  width: "100%",
  height: "400px",
  border: "none",
});

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
        if (search.area === "" || !search.area) return true;
        return item.location?.admin_name === search.area;
      });

      const filterByCity = filterByArea.filter((item) => {
        if (search.city === "" || !search.city) return true;
        return item.location?.city === search.city;
      });

      const filterByCategory = filterByCity.filter((item) => {
        if (search.category.length === 0 || !search.category) return true;
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
          item.location?.admin_name
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

interface OpentimesReducer {
  day_first: string | null | undefined;
  day_last: string | null | undefined;
  start: string | null | undefined;
  end: string | null | undefined;
}

const Opentime = (props: any) => {
  const d = [
    {
      day: "Maanantai",
      s: "Ma",
    },
    {
      day: "Tiistai",
      s: "Ti",
    },
    {
      day: "Keskiviikko",
      s: "Ke",
    },

    {
      day: "Torstai",
      s: "To",
    },

    {
      day: "Perjantai",

      s: "Pe",
    },
    {
      day: "Lauantai",
      s: "La",
    },
    {
      day: "Sunnuntai",
      s: "Su",
    },
  ];

  const { times } = props;
  const q = times.reduce((acc: OpentimesReducer[], item: LazyOpentime) => {
    const { day, start, end } = item;

    const isAccEmpty = acc.length === 0;
    const checkLatestAcc = acc[acc.length - 1];
    const isSameTimeStart = checkLatestAcc?.start === start;
    const isSameTimeEnd = checkLatestAcc?.end === end;
    const findSameStartEnd = acc.find(
      (item) => item.start === start && item.end === end
    );

    if (isAccEmpty) {
      addValue();
    } else if (isSameTimeStart && isSameTimeEnd) {
      checkLatestAcc.day_last = day;
      checkLatestAcc.end = end;
    } else {
      addValue();
    }

    function addValue() {
      acc.push({
        day_first: day,
        day_last: day,
        start,
        end,
      });
    }

    return acc;
  }, []);

  console.log(q);

  return q.map((item: OpentimesReducer, index: number) => {
    const s = item.start
      ? new Date(item.start).toLocaleTimeString("fi-FI", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : null;
    const e = item?.end
      ? new Date(item?.end).toLocaleTimeString("fi-FI", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : null;

    const { day_first, day_last } = item;
    const dl = d.find((item) => item.day === day_last);
    const df = d.find((item) => item.day === day_first);

    const w = dl === df ? dl?.s : `${df?.s} - ${dl?.s}`;

    return (
      <Box key={index}>
        <Typography>
          {w}: {s} - {e}
        </Typography>
      </Box>
    );
  });
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
    <Typography>{props.admin_name}</Typography>
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
                images.map((item) => (
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

              {location?.iframe && (
                <Grid item xs={4}>
                  <CustomIframe src={location?.iframe} loading="lazy" />
                </Grid>
              )}
            </Grid>
          </CustomBox>

          <CustomBox>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h6">Aukioloajat</Typography>
                <Opentime times={opentimes} />
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
