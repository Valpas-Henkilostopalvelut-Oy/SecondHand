import React, { useState, useEffect, useCallback } from "react";
import { Storage } from "aws-amplify";
import type { LazyImage, LazyLocation } from "../../../models";
import { Grid, Box } from "@mui/material";
import CustomIframe from "./CustomIframe";

interface ImgsIframeProps {
  location: LazyLocation | null | undefined;
  imgs: (LazyImage | null)[] | null | undefined;
}

const ImgsIframe = (props: ImgsIframeProps) => {
  const { imgs, location } = props;
  console.log(imgs);

  return (
    <>
      {imgs &&
        imgs.map((item: LazyImage | null) => {
          if (!item) return null;
          return <OneImg {...item} key={item?.id} />;
        })}

      {location?.iframe && (
        <Grid item xs={4}>
          <CustomIframe src={location?.iframe} loading="lazy" />
        </Grid>
      )}
    </>
  );
};

const OneImg = (item: LazyImage) => {
  return null;

  return (
    <Grid item xs={4}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingBottom: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={item.url ?? ""}
          alt={item.identify?.key ?? ""}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Grid>
  );
};

export default ImgsIframe;
