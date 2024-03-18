import React from "react";
import { Button } from "@mui/material";

interface ImageUploadProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
  imageFile: File | null | undefined;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onFileChange,
  onDelete,
  imageFile,
}) => {
  return (
    <div>
      {imageFile && (
        <>
          <img
            src={URL.createObjectURL(imageFile)}
            alt="preview"
            style={{
              maxWidth: "100%",
              maxHeight: "400px",
              objectFit: "contain",
              display: "block",
              marginBottom: "10px",
            }}
          />
          <div style={{ marginBottom: "20px" }}>
            <Button
              variant="contained"
              color="secondary"
              component="span"
              onClick={onDelete}
              style={{ marginRight: "10px" }}
            >
              Delete
            </Button>
          </div>
        </>
      )}
      {!imageFile && (
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
            onChange={onFileChange}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
