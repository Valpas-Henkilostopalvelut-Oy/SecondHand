import React from "react";
import { Box, type BoxProps, styled } from "@mui/material";

const Image = styled("img")({
  width: "100%",
  height: "300px",
  objectFit: "contain",
});

const ImageComponent = ({
  image,
  alt,
  boxProps,
}: {
  image?: string | null;
  alt?: string;
  boxProps?: BoxProps;
}) => {
  if (!image) return null;
  return (
    <Box {...boxProps}>
      <Image src={image} alt={alt} />
    </Box>
  );
};

export default ImageComponent;
