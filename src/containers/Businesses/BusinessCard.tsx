import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { BusinessShort } from "../../types/businesses";
import { Link } from "react-router-dom";
import { getUrl } from "@aws-amplify/storage";
import placeholder from "../../assets/images/placeholder.png";
import { trimStringToNChars } from "../../utils/wordService";

const BusinessCard = (business: BusinessShort): JSX.Element => {
  const [image, setImage] = useState<string | null>(null);
  useEffect(() => {
    const handleGetImage = async () => {
      if (business.image) {
        getUrl({
          key: business.image,
        }).then((result) => setImage(result.url.toString()));
      }
    };
    handleGetImage();
  }, [business.image]);
  return (
    <Card>
      <Link to={`/businesses/${business.id}`}>
        <CardMedia
          component="img"
          height="180"
          image={image ?? placeholder}
          alt={business.name}
        />
      </Link>
      <CardContent>
        {business.openNow && (
          <Chip label="Auki" color="primary" size="small" />
        )}
        <Box mb={1}>
          <Typography
            gutterBottom
            variant="h6"
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
            overflow={"hidden"}
            component={Link}
            to={`/businesses/${business.id}`}
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {business.name}
          </Typography>
        </Box>
        <Box minHeight={"60px"}>
          <Typography variant="body2" color="text.secondary">
            {business.cardDescription ||
              trimStringToNChars(business.description, 100)}
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button size="small" component={Link} to={`/businesses/${business.id}`}>
          Lue lisää
        </Button>
      </CardActions>
    </Card>
  );
};

export default BusinessCard;
