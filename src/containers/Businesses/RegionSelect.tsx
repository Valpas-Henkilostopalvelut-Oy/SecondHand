import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchBusinessesShortByRegion } from "../../redux/reducer/businessSlice";
import { getUrl } from "@aws-amplify/storage";
import { Locations } from "../../models";
import placeholder from "../../assets/images/placeholder.png";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const RegionCard = ({
  location,
  handleClose,
}: {
  location: Locations;
  handleClose?: () => void;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const [image, setImage] = useState<string | null>(null);
  const handleFetchBusinessesShortByLocation = () => {
    dispatch(fetchBusinessesShortByRegion(location.id)).then(() => {
      if (handleClose) {
        handleClose();
      }
    });
  };

  useEffect(() => {
    const handleGetImage = async () => {
      if (location.image) {
        getUrl({
          key: location.image,
        }).then((result) => setImage(result.url.toString()));
      }
    };
    handleGetImage();
  }, [location.image]);

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={image ?? placeholder}
        alt={location.adminName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {location.adminName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleFetchBusinessesShortByLocation}>
          Lue lisää
        </Button>
      </CardActions>
    </Card>
  );
};

const RegionSelect = ({
  handleClose,
}: {
  handleClose?: () => void;
}): JSX.Element => {
  const { locations } = useAppSelector((state) => state.locationSlice);
  return (
    <Box padding={"20px 0px"} display={"flex"} flexDirection={"column"}>
      <Typography variant="h5">Alueet</Typography>
      <Box
        display={"flex"}
        padding={"10px 0px"}
        flexDirection={"column"}
        gap={"10px"}
        style={{
          overflow: "auto",
          maxHeight: "80vh",
        }}
      >
        {locations?.map((location) => (
          <Box key={location.id}>
            <RegionCard location={location} handleClose={handleClose} />
          </Box>
        ))}
      </Box>
      <Box>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<RestartAltIcon />}
          onClick={handleClose}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default RegionSelect;
