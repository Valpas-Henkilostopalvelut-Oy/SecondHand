import { Box, styled } from "@mui/material";

const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default CustomBox;
