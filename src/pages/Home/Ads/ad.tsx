import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import ad from "./ads.json";

interface Side {
  image: string | null;
  title: string;
  button: {
    text: string;
    link: string;
  };
}

interface Ad {
  id: number;
  firm: string;
  site: string;
  backgroundColor: string;
  left: Side;
  right: Side;
}

const Side = (item: Side) => {
  const { image, title, button } = item;
  return (
    <Grid item xs={12} sm={6} textAlign="center">
      <Box
        padding="72px"
        textAlign="center"
        sx={{
          fontSize: "1.5rem",
          backgroundImage: `url(${image})`,
          color: "white",
          fontWeight: 900,
          lineHeight: "1.2",
          textDecoration: "none",
          typography: {
            fontFamily: "Roboto",
            fontWeight: 900,
            fontSize: "1.5rem",
          },
          button: {
            border: "1px solid white",
            color: "white",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          },
        }}
      >
        <Typography>{title}</Typography>
        <Button variant="outlined" color="inherit">
          {button.text}
        </Button>
      </Box>
    </Grid>
  );
};

const ContentWrapper = (item: Ad) => {
  const { backgroundColor, left, right } = item;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: backgroundColor,
      }}
    >
      <Grid container>
        <Side {...left} />
        <Side {...right} />
      </Grid>
    </Box>
  );
};

const Ad = () => {
  const { data } = ad;
  return (
    <Box margin="4rem 0 5rem 0">
      {data.map((item: Ad) => (
        <ContentWrapper {...item} key={item.id} />
      ))}
    </Box>
  );
};

export default Ad;
