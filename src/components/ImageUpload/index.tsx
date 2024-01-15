import React from "react";
import { Button } from "@mui/material";

interface ImageUploadProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onFileChange }) => {
  return (
    <div>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={onFileChange}
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};

export default ImageUpload;
