import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchEvaluation,
  confirmEvaluation,
  deleteEvaluation,
} from "../../app/reducer/evaluation";
import ImageComponent from "../../globalComponents/ImageComponent";
import type { LazyEvaluation } from "../../models";
import type { BoxProps } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailForm from "../../globalComponents/EmailForm";

const Evaluation = ({
  item,
  box,
  handleSend,
}: {
  handleSend: (email: string) => void;
  item: LazyEvaluation;
  box?: BoxProps;
}) => {
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector((state) => state.user);
  const { id, createdAt, updatedAt } = item;
  const uAt = new Date(updatedAt ? updatedAt : "").toLocaleString("fi-FI");
  const cAt = new Date(createdAt ? createdAt : "").toLocaleString("fi-FI");
  const handleConfirm = () => {
    dispatch(confirmEvaluation({ id, isAdmin }));
  };
  const handleDelete = () => {
    dispatch(deleteEvaluation({ id, isAdmin }));
  };
  return (
    <Box {...box}>
      <Accordion key={item.id} TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">{item.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary={`Sähköposti: ${item.email}`} />
              <ListItemText primary={`Puh: ${item.phone}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Kuvaus: ${item.description}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Kategoria: ${item.category}`} />
              <ListItemText primary={`Typpi: ${item.type}`} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Vahvistettu: ${item.isConfirmed ? "Kyllä" : "Ei"}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Tehtty: ${cAt}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Päivitetty: ${uAt}`} />
            </ListItem>
            <ListItem>
              <Grid container spacing={2}>
                {item.images.map((image) => (
                  <Grid item xs={3} key={image}>
                    <ImageComponent id={image} fileKey={image} poping />
                  </Grid>
                ))}
              </Grid>
            </ListItem>
          </List>
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={() => handleSend(item.email)}>Lähetä</Button>
          {isAdmin && !item.isConfirmed && (
            <Button onClick={handleConfirm}>Confirm</Button>
          )}
          {isAdmin && (
            <Button color="error" onClick={handleDelete}>
              Delete
            </Button>
          )}
        </AccordionActions>
      </Accordion>
    </Box>
  );
};

const EvaluationAdmin = () => {
  const dispatch = useAppDispatch();
  const evaluations = useAppSelector((state) => state.evaluation);
  const [open, setOpen] = React.useState({ open: false, email: "" });
  const handleOpen = (email: string) => {
    setOpen({
      open: true,
      email: email,
    });
  };

  useEffect(() => {
    dispatch(fetchEvaluation());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h4">Arviointi</Typography>
        {evaluations.data.map((evaluation) => (
          <Evaluation
            key={evaluation.id}
            item={evaluation}
            handleSend={handleOpen}
            box={{ sx: { mb: 2 } }}
          />
        ))}
      </Box>
      <EmailForm
        open={open.open}
        handleClose={() =>
          setOpen({
            open: false,
            email: "",
          })
        }
        email={open.email}
      />
    </Container>
  );
};

export default EvaluationAdmin;
