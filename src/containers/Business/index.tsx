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
import { Businesses, Locations, Types, Cities } from "../../models";
import { getUrl } from "aws-amplify/storage";
import { DataStore } from "aws-amplify/datastore";
import placeholder from "../../assets/images/placeholder.png";

const Businessssssss = styled("img")(({ theme }) => ({
  position: "relative",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const BusinessBox = styled(Box)(({ theme }) => ({
  padding: "18px 30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "15px",
  borderRadius: "3px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 3px 3px 0px rgba(0,0,0,0.25)",
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
}: {
  src?: string | null;
  alt?: string | null;
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
    <img
      src={url || placeholder}
      alt={alt || "Placeholder"}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        top: 0,
        left: 0,
      }}
    />
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(openBusiness(id as string));
    console.log(previouseBusinesses);
  }, [dispatch, id]);

  if (previouseBusinesses === undefined) {
    return (
      <Container>
        <Box>
          <Typography variant="h1">Not Found</Typography>
        </Box>
      </Container>
    );
  }

  if (previouseBusinesses === null) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Box position={"relative"} height={"100%"} width={"100%"}>
            <BusinessImage
              src={previouseBusinesses.logo}
              alt={previouseBusinesses.name}
            />
          </Box>
        </Grid>
      </Grid>
      <Container>
        <Box padding={"20px 0px"} gap={"20px"}>
          <Typography variant="h3">{previouseBusinesses.name}</Typography>
          <Typography variant="body1">
            {previouseBusinesses.description}
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Business page"
          >
            <Tab label="Profili" {...a11yProps(0)} />
            <Tab label="Reviews" {...a11yProps(1)} />
          </Tabs>
          <Box>
            <TabPanel value={value} index={0}>
              <BusinessProfile {...previouseBusinesses} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              *reviews*
            </TabPanel>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const BusinessProfile = (business: Businesses): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap="20px">
      <BusinessBox>
        <BusinessLocation
          locationId={business.locationsID}
          cityId={business.citiesID}
          address={business.address}
        />
      </BusinessBox>
      <BusinessBox>
        <BusinessTypes typeId={business.typesID} />
      </BusinessBox>
    </Box>
  );
};

const BusinessLocation = ({
  locationId,
  cityId,
  address,
}: {
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

  return (
    <Box>
      <Typography variant="body1">
        {location?.adminName}, {city?.name}
      </Typography>
      <Typography variant="body1">{address}</Typography>
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
