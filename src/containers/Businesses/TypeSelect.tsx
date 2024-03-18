import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchBusinessesShortByType } from "../../redux/reducer/businessSlice";
import { getUrl } from "@aws-amplify/storage";
import { Types } from "../../models";
import placeholder from "../../assets/images/placeholder.png";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const TypeSelect = ({
  handleClose,
}: {
  handleClose?: () => void;
}): JSX.Element => {
  const { businessTypes } = useAppSelector((state) => state.typeSlice);
  return (
    <Box padding={"20px 0px"} display={"flex"} flexDirection={"column"}>
      <Typography variant="h5">Typpi</Typography>
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
        {businessTypes?.map((type) => (
          <Box key={type.id}>
            <TypeCard type={type} handleClose={handleClose} />
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

const TypeCard = ({
  type,
  handleClose,
}: {
  type: Types;
  handleClose?: () => void;
}): JSX.Element => {
  const [image, setImage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const handleGetImage = async () => {
      if (type.image) {
        getUrl({
          key: type.image,
        }).then((result) => setImage(result.url.toString()));
      }
    };
    handleGetImage();
  }, [type.image]);

  const handleFetchBusinessesShortByType = () => {
    console.log("fetchBusinessesShortByType");
    dispatch(fetchBusinessesShortByType(type.id)).then(() => {
      if (handleClose) {
        handleClose();
      }
    });
  };
  return (
    <Card>
      <CardMedia
        component="img"
        height="180"
        image={image ?? placeholder}
        alt={type.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {type.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleFetchBusinessesShortByType}>
          Lue lisää
        </Button>
      </CardActions>
    </Card>
  );
};

export default TypeSelect;
