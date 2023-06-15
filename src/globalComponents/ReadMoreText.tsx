import React, { useState } from "react";
import { Box, Typography, Link } from "@mui/material";

interface ReadMoreTextProps {
  text?: string | null;
  maxChar?: number;
}

const ReadMoteText = ({ text, maxChar }: ReadMoreTextProps) => {
  //show only 2 first characters of description
  const [readMore, setReadMore] = useState(false);
  const handleClick = () => setReadMore(!readMore);

  if (!text) return null;
  return (
    <Box>
      <Typography
        sx={{
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: readMore ? "unset" : 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {text}
      </Typography>
      <Link sx={{ color: "#000", cursor: "pointer" }} onClick={handleClick} underline="always">
        {readMore ? "Lue vähemmän" : "Lue lisää"}
      </Link>
    </Box>
  );
};

export default ReadMoteText;
