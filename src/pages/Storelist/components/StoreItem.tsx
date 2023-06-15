import React, { useState } from "react";

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
import type { LazyStore } from "../../../models";
import OpenTime from "./OpenTime";
import SocialMedia from "./SocialMedia";
import CustomIframe from "./CustomIframe";
import ImageComponent from "../../../globalComponents/ImageComponent";
import LogoImage from "../../../globalComponents/LogoImage";

const ReadMoreDescription = (props: { description?: string | null }) => {
  //show only 2 first characters of description
  const { description } = props;
  const [readMore, setReadMore] = useState(false);
  const handleClick = () => setReadMore(!readMore);

  if (!description) return null;
  return (
    <Box>
      <Typography
        sx={{
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: readMore ? 0 : 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </Typography>
      <Link
        sx={{ color: "#000", cursor: "pointer" }}
        onClick={handleClick}
        underline="hover"
      >
        {readMore ? "Lue vähemmän" : "Lue lisää"}
      </Link>
    </Box>
  );
};

//https://www.n3xtlevel.fi/ to www.n3xtlevel.fi
const removeHttps = (url: string) => url.replace(/(^\w+:|^)\/\//, "");

const StoreItem = (props: LazyStore) => {
  const [open, setOpen] = useState(false);
  const {
    name,
    description,
    categories,
    opentimes,
    contact,
    location,
    imgs,
    social,
    logo,
  } = props;
  const handleClick = () => setOpen(!open);
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginBottom: "1rem",
      }}
    >
      <Accordion
        expanded={open}
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
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ marginLeft: "1rem", fontSize: "1.5rem" }}>
                {name}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <LogoImage isPaid={true} skey={logo} />
            </Grid>
          </Grid>
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
            <ReadMoreDescription description={description} />
          </CustomBox>

          <CustomBox hidden={!categories || categories.length === 0}>
            <Typography variant="h6">
              <b>Kategoriat</b>
            </Typography>
            {categories?.map((item) => (
              <Typography key={item?.id}>{item?.name}</Typography>
            ))}
          </CustomBox>

          <CustomBox hidden={!imgs || imgs.length === 0}>
            <Typography variant="h6">
              <b>Kuvat</b>
            </Typography>
            <Grid container spacing={2}>
              {imgs?.map((item) => (
                <Grid item xs={6} sm={4} key={item?.id}>
                  <ImageComponent fileKey={item?.key} id={item?.id} poping />
                </Grid>
              ))}
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
              <Grid
                item
                xs={12}
                sm={4}
                hidden={!opentimes || opentimes.length === 0}
              >
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
                  {location?.address ? location?.address + ", " : ""}
                  {location?.city}
                </Typography>
                <Typography>{location?.zip}</Typography>
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
