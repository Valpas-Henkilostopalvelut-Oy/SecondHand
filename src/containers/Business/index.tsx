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
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { openBusiness } from "../../redux/reducer/businessSlice";

const BusinessImage = styled("img")(({ theme }) => ({
  position: "relative",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      sx={{ display: value === index ? "block" : "none" }}
      {...other}
      padding={"20px 0px"}
    >
      {value === index && <Typography>{children}</Typography>}
    </Box>
  );
};

const a11yProps = (index: number): {} => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
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

  console.log(previouseBusinesses);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Box position={"relative"} height={"100%"} width={"100%"}>
            <BusinessImage src={previouseBusinesses.logo ?? ""} />
          </Box>
        </Grid>
      </Grid>
      <Container>
        <Box padding={"20px 0px"} gap={"20px"}>
          <Typography variant="h3">{previouseBusinesses.name}</Typography>
          <Typography variant="body1">{previouseBusinesses.description}</Typography>
          <Tabs>
            <TabPanel value={0} index={0}>
              Profili
            </TabPanel>
            <TabPanel value={1} index={1}>
              *reviews*
            </TabPanel>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
};
