import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

interface PopoutImageProps {
  imageUrl: string;
  altText: string;
}

const PopoutImage: React.FC<PopoutImageProps> = ({ imageUrl, altText }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Open Image
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img
            src={imageUrl}
            alt={altText}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PopoutImage;
