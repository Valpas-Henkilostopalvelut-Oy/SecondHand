import React, { useEffect, useState } from "react";
import {
  Box,
  type BoxProps,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Storage } from "aws-amplify";
import { Close as CloseIcon } from "@mui/icons-material";

interface OneImgProps {
  fileUrl?: string | undefined | null;
  fileKey?: string | undefined | null;
  id: string | undefined | null;
  boxProps?: BoxProps;
  poping?: boolean;
}

const ImageComponent = (item: OneImgProps) => {
  const { fileKey, id, boxProps, fileUrl, poping = false } = item;
  const [url, setUrl] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchImage = async () => {
      if (!fileKey) return;
      const url = await Storage.get(fileKey);
      setUrl(url);
    };
    fetchImage();
  }, [fileKey]);

  return (
    <>
      <Box
        {...boxProps}
        sx={{
          position: "relative",
          width: "100%",
          paddingBottom: "100%",
          overflow: "hidden",
          ...boxProps?.sx,
          cursor: poping ? "pointer" : undefined,
        }}
        onClick={poping ? handleOpen : undefined}
      >
        <img
          src={
            fileUrl ||
            url ||
            "https://via.placeholder.com/150?text=No+Image+Found"
          }
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
      {poping && (
        <Dialog open={open} onClose={handleClose} maxWidth="md">
          <DialogTitle>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <img
              src={
                fileUrl ||
                url ||
                "https://via.placeholder.com/150?text=No+Image+Found"
              }
              alt={!id ? "img" : id}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ImageComponent;
