import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { TextField, Typography, Box, Grid, type BoxProps } from "@mui/material";
import { setSocial } from "../redux/newstore";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

const SocialMedia = (props: BoxProps) => {
  const dispatch = useAppDispatch();
  const { social } = useAppSelector((state) => state.newstore);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setSocial({ ...social, [name]: value }));
  };

  return (
    <Box {...props}>
      <Box mb={2}>
        <Typography variant="h6">Sosiaalinen media</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            label="Facebook"
            variant="outlined"
            name="facebook"
            placeholder="https://www.facebook.com/"
            InputProps={{
              startAdornment: <FacebookIcon />,
            }}
            value={social.facebook || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            label="Instagram"
            variant="outlined"
            name="instagram"
            placeholder="https://www.instagram.com/"
            InputProps={{
              startAdornment: <InstagramIcon />,
            }}
            value={social.instagram || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            label="Twitter"
            variant="outlined"
            name="twitter"
            placeholder="https://twitter.com/"
            InputProps={{
              startAdornment: <TwitterIcon />,
            }}
            value={social.twitter || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            label="Youtube"
            variant="outlined"
            name="youtube"
            placeholder="https://www.youtube.com/"
            InputProps={{
              startAdornment: <YouTubeIcon />,
            }}
            value={social.youtube || ""}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialMedia;
