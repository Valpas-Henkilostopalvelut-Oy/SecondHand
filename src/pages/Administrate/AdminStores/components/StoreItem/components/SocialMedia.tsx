import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Typography, Box, IconButton } from "@mui/material";
import type { LazySocial } from "../../../../../../models";

const checkUrl = (url: string) => {
  if (url.includes("http://") || url.includes("https://")) {
    return url;
  } else {
    return "https://" + url;
  }
};

const SocialMedia = (props: LazySocial) => {
  const { facebook, instagram, twitter, youtube } = props;

  return (
    <Box>
      <IconButton
        href={facebook ? checkUrl(facebook) : ""}
        target="_blank"
        rel="noopener noreferrer"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        disabled={!facebook}
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        href={instagram ? checkUrl(instagram) : ""}
        target="_blank"
        rel="noopener noreferrer"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        disabled={!instagram}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        href={twitter ? checkUrl(twitter) : ""}
        target="_blank"
        rel="noopener noreferrer"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        disabled={!twitter}
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        href={youtube ? checkUrl(youtube) : ""}
        target="_blank"
        rel="noopener noreferrer"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        disabled={!youtube}
      >
        <YouTubeIcon />
      </IconButton>
    </Box>
  );
};

export default SocialMedia;
