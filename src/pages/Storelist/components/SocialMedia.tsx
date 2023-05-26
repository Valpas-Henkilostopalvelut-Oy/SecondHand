import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Typography, Box, IconButton } from "@mui/material";
import type { LazySocial } from "../../../models";

const checkUrl = (url: string) => {
  if (url.includes("http://") || url.includes("https://")) {
    return url;
  } else {
    return "https://" + url;
  }
};

const hidden = true;

const SocialMedia = (props: LazySocial) => {
  const { facebook, instagram, twitter, youtube } = props;
  return (
    <Box display="flex" justifyContent="center">
      <Box hidden={hidden && !facebook}>
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
      </Box>
      <Box hidden={hidden && !instagram}>
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
      </Box>
      <Box hidden={hidden && !twitter}>
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
      </Box>
      <Box hidden={hidden && !youtube}>
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
    </Box>
  );
};

export default SocialMedia;
