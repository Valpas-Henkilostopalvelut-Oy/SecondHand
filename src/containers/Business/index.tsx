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
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { openBusiness } from "../../redux/reducer/businessSlice";
import {
  Businesses,
  Locations,
  Types,
  Cities,
  LazyOpenHours,
  LazyContacts,
} from "../../models";
import { getUrl } from "aws-amplify/storage";
import { DataStore } from "aws-amplify/datastore";
import placeholder from "../../assets/images/placeholder.png";

const days = [
  "Maanantai",
  "Tiistai",
  "Keskiviikko",
  "Torstai",
  "Perjantai",
  "Lauantai",
  "Sunnuntai",
];

const BusinessBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "18px 30px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  alignSelf: "stretch",
  borderRadius: "3px",
  backgroundColor: "#FFF", // Или theme.palette.background.paper
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  // Убираем фиксированную высоту, чтобы высота зависела от содержимого
  [theme.breakpoints.up("sm")]: {
    // Здесь можно добавить стили для больших экранов, если это необходимо
  },
}));

interface ImageProps {
  isMobile?: boolean;
}

const StyledImg = styled("img")<ImageProps>(({ theme, isMobile }) => ({
  width: "100%",
  height: isMobile ? "100%" : "auto",
  objectFit: "cover",
  top: 0,
  left: 0,
  aspectRatio: isMobile ? "1 / 1" : "16 / 10",
  maxHeight: "600px",
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index } = props;

  return (
    <div
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number): {} => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const BusinessImage = ({
  src,
  alt,
  isMobile,
}: {
  src?: string | null;
  alt?: string | null;
  isMobile?: boolean;
}): JSX.Element => {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!src) return;
    const handleImage = async () => {
      const url = await getUrl({ key: src });
      setUrl(url.url.toString());
    };
    handleImage();
  }, [src]);

  return (
    <StyledImg
      src={url || placeholder}
      alt={alt || "Placeholder"}
      isMobile={isMobile}
    />
  );
};

const BusinessLocation = ({
  locationId,
  cityId,
  address,
  direction,
}: {
  direction?: string | null;
  locationId?: string | null;
  cityId?: string | null;
  address?: string | null;
}): JSX.Element => {
  const [location, setLocation] = useState<Locations | undefined>(undefined);
  const [city, setCity] = useState<Cities | undefined>(undefined);

  useEffect(() => {
    if (locationId !== undefined && locationId !== null) {
      DataStore.query(Locations, locationId)
        .then((res) => setLocation(res))
        .catch((err) => console.warn(err));
    }
  }, [locationId]);

  useEffect(() => {
    if (cityId !== undefined && cityId !== null) {
      DataStore.query(Cities, cityId)
        .then((res) => setCity(res))
        .catch((err) => console.warn(err));
    }
  }, [cityId]);

  // Address is direction to business, link to google maps

  return (
    <Box>
      <Typography variant="body1">Osoite: </Typography>
      <Typography variant="body2">
        {location?.adminName}, {city?.name}
      </Typography>
      <Typography variant="body2" component="a" href={direction || ""}>
        {address}
      </Typography>
    </Box>
  );
};

const BusinessIframeDirection = ({
  iframe,
}: {
  iframe?: string | null;
}): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap="20px" width={"100%"}>
      <Typography variant="body1">Location: </Typography>
      <iframe
        src={iframe ?? ""}
        title="BusinessIframe"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
      />
    </Box>
  );
};

const BusinessTypes = ({ typeId }: { typeId?: string | null }): JSX.Element => {
  const [type, setType] = useState<Types | undefined>(undefined);

  useEffect(() => {
    if (typeId !== undefined && typeId !== null) {
      DataStore.query(Types, typeId)
        .then((res) => setType(res))
        .catch((err) => console.warn(err));
    }
  }, [typeId]);

  return (
    <Box mb={2}>
      <Typography variant="body1">Paikkan tyyppi: </Typography>
      <Typography variant="body2">{type?.name}</Typography>
    </Box>
  );
};

const BusinessOpenHours = ({
  openHours,
}: {
  openHours?: LazyOpenHours | null;
}): JSX.Element => {
  return (
    <Box>
      <Typography variant="body1">Aukioloajat: </Typography>
      {openHours?.period?.map((openHour, index) => (
        <Box key={index}>
          <Typography variant="body2">
            {openHour && days[openHour.open.day]}:{" "}
            {openHour && openHour.open.hours}:{openHour?.open.minute} -{" "}
            {openHour?.close.hours}:{openHour?.close.minute}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

const BusinessContacts = ({
  contacts,
}: {
  contacts?: (LazyContacts | null)[] | null;
}): JSX.Element => {
  return (
    <Box>
      <Typography variant="body1">Yhteystiedot: </Typography>
      {contacts?.map((contact, index) => (
        <Box key={index}>
          <Typography variant="body2">Nimi: {contact?.name}</Typography>
          <Typography variant="body2">
            Sähköposti: {contact?.email ?? "-"}
          </Typography>
          <Typography variant="body2">
            Puhelin: {contact?.phone ?? "-"}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

const BusinessWebSite = ({
  websiteUrl,
}: {
  websiteUrl?: string | null;
}): JSX.Element => {
  return (
    <Box>
      <Typography variant="body1">Kotisivu: </Typography>
      <Typography variant="body2" component={"a"} href={websiteUrl || ""}>
        {websiteUrl}
      </Typography>
    </Box>
  );
};

const BusinessProfile = ({
  business,
  isMobile,
}: {
  business: Businesses;
  isMobile?: boolean | null;
}): JSX.Element => {
  return (
    <Grid container spacing={2} padding={"20px 0px"}>
      <Grid item xs={12} sm={6}>
        <BusinessBox>
          <BusinessLocation
            locationId={business.locationsID}
            cityId={business.citiesID}
            address={business.address}
            direction={business.dirrection}
          />
        </BusinessBox>
      </Grid>

      <Grid item xs={12} sm={6}>
        <BusinessBox>
          <BusinessTypes typeId={business.typesID} />
        </BusinessBox>
      </Grid>

      {business.websiteUrl && (
        <Grid item xs={12} sm={6}>
          <BusinessBox>
            <BusinessWebSite websiteUrl={business.websiteUrl} />
          </BusinessBox>
        </Grid>
      )}

      {business.contacts && (
        <Grid item xs={12} sm={6}>
          <BusinessBox>
            <BusinessContacts contacts={business.contacts} />
          </BusinessBox>
        </Grid>
      )}
      {business.openHours && (
        <Grid item xs={12} sm={6}>
          <BusinessBox>
            <BusinessOpenHours openHours={business.openHours} />
          </BusinessBox>
        </Grid>
      )}
      {business.iframe && (
        <Grid item xs={12}>
          <BusinessBox>
            <BusinessIframeDirection iframe={business.iframe} />
          </BusinessBox>
        </Grid>
      )}
    </Grid>
  );
};

export const Business = (): JSX.Element => {
  const { id } = useParams();
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { previouseBusinesses } = useAppSelector(
    (state) => state.business.businesses
  );
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 секунды задержки

    dispatch(openBusiness(id));

    return () => clearTimeout(timer);
  }, [dispatch, id]);

  if (loading || previouseBusinesses === null) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // Полная высота экрана
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (previouseBusinesses === undefined) {
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
        <BusinessImage
          src={previouseBusinesses.logo}
          alt={previouseBusinesses.name}
          isMobile={isMobile}
        />
      </Box>
      <Container>
        <Box m={"10px 0px"}>
          <Typography variant="h3">{previouseBusinesses.name}</Typography>
        </Box>
        <Typography variant="body1">
          {previouseBusinesses.description}
        </Typography>
        <Tabs value={value} onChange={handleChange} aria-label="Business page">
          <Tab label="Profili" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
        </Tabs>
        <Box mt={2}>
          <TabPanel value={value} index={0}>
            <BusinessProfile
              business={previouseBusinesses}
              isMobile={isMobile}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            *reviews*
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
};
