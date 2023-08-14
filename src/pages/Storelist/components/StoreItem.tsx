import React, { useEffect, useState } from "react";
import type { LazyOpentime, LazyStore } from "../../../models";
import type { BoxProps, GridProps } from "@mui/material";
import {
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  Box,
  Grid,
  Typography,
  Accordion,
  Link,
  useTheme,
} from "@mui/material";
import CustomBox from "./CustomBox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SocialMedia from "./SocialMedia";
import CustomIframe from "./CustomIframe";
import ImageComponent from "../../../globalComponents/ImageComponent";
import LogoImage from "../../../globalComponents/LogoImage";
import ReadMoteText from "../../../globalComponents/ReadMoreText";
import Carousel from "react-material-ui-carousel";
import { opentimesToStore } from "../../../services/openTimeLib";
import OpenTime from "./OpenTime";

//https://www.n3xtlevel.fi/ to www.n3xtlevel.fi
const removeHttps = (url: string) => url.replace(/(^\w+:|^)\/\//, "");

const SummaryMobile = ({
  grid,
  store,
}: {
  grid?: GridProps;
  store: LazyStore;
}) => {
  const { logo, name } = store;
  const theme = useTheme();
  return (
    <Grid
      container
      {...grid}
      sx={{ [theme.breakpoints.up("sm")]: { display: "none" } }}
    >
      <Grid item xs={12} sm={4}>
        <LogoImage isPaid={true} skey={logo} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography sx={{ marginLeft: "1rem", fontSize: "1.5rem" }}>
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
};

const SummaryDesktop = ({
  grid,
  store,
}: {
  grid?: GridProps;
  store: LazyStore;
}) => {
  const { logo, name } = store;
  const theme = useTheme();
  return (
    <Grid
      container
      {...grid}
      sx={{
        [theme.breakpoints.down("sm")]: { display: "none" },
        alignItems: "center",
      }}
    >
      <Grid item xs={12} sm={4}>
        <Typography sx={{ marginLeft: "1rem", fontSize: "1.5rem" }}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} textAlign="center">
        <LogoImage isPaid={true} skey={logo} />
      </Grid>
    </Grid>
  );
};

const StoreItem = ({ box, store }: { box?: BoxProps; store: LazyStore }) => {
  const [open, setOpen] = useState(false);
  const { description, contact, location, imgs, social } = store;
  const handleClick = () => setOpen(!open);
  const theme = useTheme();
  const [opentimes, setOpentimes] = useState<LazyOpentime[] | null>(null);
  useEffect(() => {
    const opentimes = async () => {
      const opentimes = await opentimesToStore(store);
      setOpentimes(opentimes);
    };

    opentimes();
  }, []);

  //accordion open up

  return (
    <Box
      {...box}
      sx={{
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginBottom: "1rem",
      }}
    >
      <Accordion
        expanded={open}
        elevation={0}
        onChange={handleClick}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#fff",
            borderBottom: "1px solid #ccc",
            borderRadius: "0px",
            [theme.breakpoints.down("sm")]: { padding: "0px" },
          }}
        >
          <SummaryMobile store={store} />
          <SummaryDesktop store={store} />
        </AccordionSummary>
        <AccordionDetails
          sx={{
            [theme.breakpoints.down("sm")]: { padding: "0px" },
          }}
        >
          <CustomBox hidden={!description}>
            <Typography variant="h6">
              <b>Kuvaus</b>
            </Typography>
            <ReadMoteText text={description} />
          </CustomBox>

          <CustomBox hidden={true}>
            <Typography variant="h6">
              <b>Kategoriat</b>
            </Typography>
            <Typography>Cats</Typography>
          </CustomBox>

          <CustomBox hidden={!imgs || imgs.length === 0}>
            <Typography variant="h6">
              <b>Kuvat</b>
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4}>
                <ImageComponent
                  fileKey={imgs && imgs[0]}
                  id={imgs && imgs[0]}
                  poping
                />
              </Grid>
              <Grid item xs={6} sm={4}>
                <Carousel
                  autoPlay={false}
                  animation="slide"
                  navButtonsProps={{
                    style: {
                      backgroundColor: "#fff",
                      color: "#000",
                    },
                  }}
                >
                  {imgs?.slice(1).map((item) => (
                    <ImageComponent
                      key={item}
                      fileKey={item}
                      id={item}
                      poping
                    />
                  ))}
                </Carousel>
              </Grid>
              <Grid item xs={12} sm={4}>
                <CustomIframe
                  url={location?.iframe}
                  props={{ loading: "lazy" }}
                />
              </Grid>
            </Grid>
          </CustomBox>

          <CustomBox>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} hidden={true}>
                <Typography variant="h6">
                  <b>Aukioloajat</b>
                </Typography>
                <OpenTime times={opentimes} />
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                hidden={
                  !contact ||
                  (!contact.email && !contact.phone && !contact.website)
                }
              >
                <Typography variant="h6">
                  <b>Yhteystiedot</b>
                </Typography>
                <Typography>{contact?.phone}</Typography>
                <Typography>{contact?.email}</Typography>

                <Link
                  href={contact?.website || "#"}
                  underline="hover"
                  target="_blank"
                >
                  {removeHttps(contact?.website || "")}
                </Link>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h6">
                  <b>Sijainti</b>
                </Typography>
                <Typography>
                  {location?.address ? location?.address : ""}
                </Typography>
                <Typography>
                  {location?.zip}
                  {location?.zip ? ", " : ""}
                  {location?.city}
                </Typography>
                <Typography>{location?.admin_name}</Typography>
                <Link href={location?.driveto || "#"} underline="hover">
                  ajo-ohjeet
                </Link>
              </Grid>
            </Grid>
          </CustomBox>
        </AccordionDetails>
        <AccordionActions>
          <SocialMedia {...social} />
        </AccordionActions>
      </Accordion>
    </Box>
  );
};

export default StoreItem;
