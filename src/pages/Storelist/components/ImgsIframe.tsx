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

  return (
    <>
      {imgs &&
        imgs.map((item: LazyImage | null) => {
          if (!item) return null;
          return <OneImg key={item.key} fileKey={item?.key} id={item.id} />;
        })}

      {location?.iframe && (
        <Grid item xs={12} sm={4}>
          <CustomIframe src={location?.iframe} loading="lazy" />
        </Grid>
      )}
    </>
  );
};

interface OneImgProps {
  fileKey: string | undefined | null;
  id: string | undefined | null;
}

const OneImg = (item: OneImgProps) => {
  const { fileKey, id } = item;
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (!fileKey) return;
      const url = await Storage.get(fileKey);
      setUrl(url);
    };
    fetchImage();
  }, [fileKey]);

  return (
    <Grid item xs={6} sm={4}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingBottom: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={!url ? "img" : url}
          alt={!id ? "img" : id}
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
