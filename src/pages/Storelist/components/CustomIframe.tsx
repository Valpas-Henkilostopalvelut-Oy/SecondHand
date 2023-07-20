import React from "react";
import styled from "@emotion/styled";

const Iframe = styled("iframe")({
  width: "100%",
  height: "100%",
  border: "none",
  paddingBottom: "2rem",
});

const CustomIframe = ({ url, props }: { url?: string | null; props?: any }) => {
  if (!url) return null;
  return <Iframe src={url} {...props} />;
};

export default CustomIframe;
