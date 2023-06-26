import React from "react";
import { Grid, TextField } from "@mui/material";
import type { EditItemState } from "../types";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const EditSocialMedia = (props: EditItemState) => {
  const { social, setStore } = props;
  const facebook = social?.facebook;
  const instagram = social?.instagram;
  const twitter = social?.twitter;
  const youtube = social?.youtube;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStore((prevState) => {
      if (!prevState) return null;
      return {
        ...prevState,
        social: {
          ...prevState.social,
          [name]: value,
        },
      };
    });
  };

  return (
    <>
      <Grid item xs={6}>
        <TextField
          name="facebook"
          label="Facebook"
          variant="outlined"
          placeholder="https://www.facebook.com/"
          fullWidth
          value={facebook || ""}
          onChange={handleChange}
          helperText="Facebook"
          InputProps={{
            startAdornment: <FacebookIcon />,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="instagram"
          label="Instagram"
          variant="outlined"
          placeholder="https://www.instagram.com/"
          fullWidth
          value={instagram || ""}
          onChange={handleChange}
          helperText="Instagram"
          InputProps={{
            startAdornment: <InstagramIcon />,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="twitter"
          label="Twitter"
          variant="outlined"
          placeholder="https://twitter.com/"
          fullWidth
          value={twitter || ""}
          onChange={handleChange}
          helperText="Twitter"
          InputProps={{
            startAdornment: <TwitterIcon />,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="youtube"
          label="Youtube"
          variant="outlined"
          placeholder="https://www.youtube.com/"
          fullWidth
          value={youtube || ""}
          onChange={handleChange}
          helperText="Youtube"
          InputProps={{
            startAdornment: <YouTubeIcon />,
          }}
        />
      </Grid>
    </>
  );
};

export default EditSocialMedia;
