import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"; // Varmista, että sinulla on asennettu react-router-dom navigointia varten

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        mt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5" gutterBottom>
        404 - Sivua ei löydy
      </Typography>
      <Typography variant="body1" gutterBottom>
        Valitettavasti emme löydä etsimääsi sivua.
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => navigate("/")}
      >
        Palaa kotisivulle
      </Button>
    </Container>
  );
};

export default NotFoundPage;
