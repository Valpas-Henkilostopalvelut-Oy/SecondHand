import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  padding: "10px 20px",
  borderRadius: "3px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 3px 3px 0px rgba(0,0,0,0.25)",
  display: "inline-block", // To ensure proper spacing and alignment
  textAlign: "center",
  minWidth: "150px", // Ensure all buttons have the same width
  "&:hover": {
    backgroundColor: theme.palette.background.default,
    boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.30)",
  },
}));

export default LinkButton;
