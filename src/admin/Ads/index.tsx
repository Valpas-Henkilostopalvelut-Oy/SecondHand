import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  type BoxProps,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import type { Ad, Side, AdButton } from "../../types/ad";
import { fetchAds, removeAd } from "../../app/reducer/ads";
import ImageComponent from "../../globalComponents/ImageComponent";
import { Storage } from "aws-amplify";
import AdForm from "../../globalComponents/AdForm";

const loadImage = async (key: string) => {
  const url = await Storage.get(key);
  return url;
};

const OneSide = ({ data }: { data?: Side | null }) => {
  const [loadedImage, setLoadedImage] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (data?.image) {
        const url = await loadImage(data?.image);
        setLoadedImage(url);
      }
    };
    data?.image && load();
  }, [data?.image]);
  if (!data) return null;
  const { title, button } = data;

  return (
    <Box
      sx={{
        border: "1px solid gray",
        borderRadius: "5px",
        padding: "1rem",
      }}
    >
      <Typography>{title}</Typography>
      <ImageComponent image={loadedImage} />
      <Button variant="contained" color="primary" href={button?.link}>
        {button?.text}
      </Button>
    </Box>
  );
};

const AdItem = ({
  ad,
  boxProps,
  isAdmin,
}: {
  ad: Ad;
  boxProps?: BoxProps;
  isAdmin: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const { id, firm, site, backgroundColor, left, right } = ad;
  const handleLog = () => {
    console.log(ad);
  };
  const dispatch = useAppDispatch();
  const handleRemove = () => {
    dispatch(removeAd({ id, isAdmin }));
  };

  return (
    <Box {...boxProps}>
      <Accordion expanded={open} onChange={() => setOpen(!open)}>
        <AccordionSummary>
          <Typography>{firm}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography>
              <b>Nettisivu:</b> {site}
            </Typography>
            <Typography>
              <b>Tausta väri:</b> {backgroundColor}
            </Typography>
          </Box>

          <Box>
            <Typography>
              <b>Vasen puoli</b>
            </Typography>
            <OneSide data={left} />
          </Box>

          <Box>
            <Typography>
              <b>Oikea puoli</b>
            </Typography>
            <OneSide data={right} />
          </Box>
        </AccordionDetails>
        <AccordionActions>
          <Button variant="contained" color="primary" onClick={handleLog}>
            Log
          </Button>
          {isAdmin && (
            <Button variant="contained" color="error" onClick={handleRemove}>
              Poista
            </Button>
          )}
        </AccordionActions>
      </Accordion>
    </Box>
  );
};

const Ads = () => {
  const { ads } = useAppSelector((state) => state.ads);
  const { isAdmin } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAds());
  }, []);

  return (
    <Box>
      <AdForm boxProps={{ sx: { marginBottom: "1rem" } }} />
      {ads.map((ad) => (
        <AdItem
          isAdmin={isAdmin}
          key={ad.id}
          ad={ad}
          boxProps={{ sx: { marginBottom: "1rem" } }}
        />
      ))}
    </Box>
  );
};

export default Ads;
