import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  CircularProgress,
  styled,
  Grid,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
} from "@mui/material";
import { useParams } from "react-router-dom";
import {
  fetchSingleBusiness,
  fetchBusinessCategoriesOnBusiness,
  fetchLogo,
} from "../../redux/reducer/businessSlice";
import { Businesses, Locations, Types, Cities, Categories } from "../../models";
import placeholder from "../../assets/images/placeholder.png";
import { fetchSingleType } from "../../redux/reducer/typeSlice";
import {
  fetchSingleCity,
  fetchSingleLocation,
} from "../../redux/reducer/locationSlice";
import { TabPanel } from "../../components/TabPanel";

interface DataProps {
  business: Businesses | null;
  type: Types | null;
  location: Locations | null;
  city: Cities | null;
  categories: Categories[] | undefined;
  logoUrl: string | null;
}

const days = [
  "Maanantai",
  "Tiistai",
  "Keskiviikko",
  "Torstai",
  "Perjantai",
  "Lauantai",
  "Sunnuntai",
];

const BusinessBox = styled(Box)<{ isMobile?: boolean }>(
  ({ theme, isMobile }) => ({
    display: "flex",
    padding: "18px 30px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
    alignSelf: "stretch",
    borderRadius: "3px",
    backgroundColor: "#FFF",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.up("sm")]: {
      // Здесь можно добавить стили для больших экранов, если это необходимо
    },
  })
);

const StyledImg = styled("img")<{ isMobile?: boolean }>(
  ({ theme, isMobile }) => ({
    width: "100%",
    height: isMobile ? "100%" : "auto",
    objectFit: "cover",
    top: 0,
    left: 0,
    aspectRatio: isMobile ? "1 / 1" : "16 / 10",
    maxHeight: "600px",
  })
);

const a11yProps = (index: number): {} => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const Business = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | unknown>();
  const [data, setData] = useState<DataProps>({
    business: null,
    type: null,
    location: null,
    city: null,
    categories: undefined,
    logoUrl: null,
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const business = await fetchSingleBusiness(id);
        if (business) {
          const [type, location, city, categories, logoUrl] = await Promise.all(
            [
              fetchSingleType(business.typesID),
              fetchSingleLocation(business.locationsID),
              fetchSingleCity(business.citiesID),
              fetchBusinessCategoriesOnBusiness(business.id),
              fetchLogo(business.logo),
            ]
          );

          setData({
            business,
            type,
            location,
            city,
            categories,
            logoUrl,
          });
        }
      } catch (error) {
        console.error("Error fetching business", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h1"}
            sx={{ textAlign: "center", color: "secondary.main" }}
          >
            Error
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Something went wrong
          </Typography>
        </Box>
      </Container>
    );
  }

  if (!data.business) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h1"}
            sx={{ textAlign: "center", color: "secondary.main" }}
          >
            Not Found
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Box>
      <Box>
        <StyledImg
          src={data.logoUrl || placeholder}
          alt={data.business.name || "Placeholder"}
          isMobile={isMobile}
        />
      </Box>
      <Container>
        <Box m={"10px 0px"}>
          <Typography variant="h3">{data.business.name}</Typography>
        </Box>
        <Typography variant="body1">{data.business.description}</Typography>
        <Tabs value={value} onChange={handleChange} aria-label="Business page">
          <Tab label="Profili" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
        </Tabs>
        <Box mt={2}>
          <TabPanel value={value} index={0}>
            <BusinessBox>
              <Typography variant="body1">Osoite: </Typography>
              <Typography variant="body2">
                {data.location?.adminName}, {data.city?.name}
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href={data.business.dirrection || ""}
              >
                {data.business.address}
              </Typography>
            </BusinessBox>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <BusinessBox>
                  <Typography variant="body1">Paikkan tyyppi: </Typography>
                  <Typography variant="body2">{data.type?.name}</Typography>
                </BusinessBox>
              </Grid>

              {data.categories && (
                <Grid item xs={12} sm={6}>
                  <BusinessBox>
                    <Typography variant="body1">Kategoriat: </Typography>
                    <Typography variant="body2">
                      {data.categories
                        .map((category, index) => category.name)
                        .join(", ")}
                    </Typography>
                  </BusinessBox>
                </Grid>
              )}
            </Grid>

            <Grid container spacing={2} padding={"20px 0px"}>
              {data.business.websiteUrl && (
                <Grid item xs={12} sm={6}>
                  <BusinessBox>
                    <Typography variant="body1">Kotisivu: </Typography>
                    <Typography
                      variant="body2"
                      component={"a"}
                      href={data.business.websiteUrl || ""}
                    >
                      {data.business.websiteUrl}
                    </Typography>
                  </BusinessBox>
                </Grid>
              )}

              {data.business.contacts && (
                <Grid item xs={12} sm={6}>
                  <BusinessBox>
                    <Typography variant="body1">Yhteystiedot: </Typography>
                    {data.business.contacts?.map((contact, index) => (
                      <Box key={index}>
                        <Typography variant="body2">
                          Nimi: {contact?.name}
                        </Typography>
                        <Typography variant="body2">
                          Sähköposti: {contact?.email ?? "-"}
                        </Typography>
                        <Typography variant="body2">
                          Puhelin: {contact?.phone ?? "-"}
                        </Typography>
                      </Box>
                    ))}
                  </BusinessBox>
                </Grid>
              )}
              {data.business.openHours && (
                <Grid item xs={12} sm={6}>
                  <BusinessBox>
                    <Typography variant="body1">Aukioloajat: </Typography>
                    {data.business.openHours?.period?.map((openHour, index) => (
                      <Box key={index}>
                        <Typography variant="body2">
                          {openHour && days[openHour.open.day]}:{" "}
                          {openHour && openHour.open.hours}:
                          {openHour?.open.minute} - {openHour?.close.hours}:
                          {openHour?.close.minute}
                        </Typography>
                      </Box>
                    ))}
                  </BusinessBox>
                </Grid>
              )}
              {data.business.iframe && (
                <Grid item xs={12}>
                  <BusinessBox
                    display="flex"
                    flexDirection="column"
                    gap="20px"
                    width={"100%"}
                  >
                    <Typography variant="body1">Location: </Typography>
                    <iframe
                      src={data.business.iframe ?? ""}
                      title="BusinessIframe"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                    />
                  </BusinessBox>
                </Grid>
              )}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            *reviews*
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
};
