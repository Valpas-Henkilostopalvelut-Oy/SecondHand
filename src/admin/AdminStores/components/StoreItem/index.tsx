import React, { useState } from "react";
import type { LazyStore } from "../../../../models";
import {
  Typography,
  Box,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Tooltip,
} from "@mui/material";
import OpenTime from "./components/Opentime";
import CustomBox from "./components/CustomBox";
import Categories from "./components/Categories";
import Images from "./components/Images";
import StoreIframe from "./components/StoreIframe";
import Contact from "./components/Contact";
import Location from "./components/Location";
import EditItem from "../../../../globalComponents/EditItem";
import SocialMedia from "./components/SocialMedia";
import {
  deleteStoreAsync,
  confirmStoreAsync,
} from "../../../../app/reducer/stores";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import LogoImage from "../../../../globalComponents/LogoImage";

const StoreItem = (props: LazyStore) => {
  const { settings, name } = props;
  const isAdmin = useAppSelector((state) => state.user.isAdmin);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useAppDispatch();
  const handleClick = () => setOpen(!open);
  const handleEdit = () => setEdit(!edit);
  const handleDelete = () =>
    dispatch(
      deleteStoreAsync({
        id: props.id,
        isAdmin: isAdmin,
      })
    );
  const handleConfirm = () =>
    dispatch(
      confirmStoreAsync({
        id: props.id,
        isAdmin: isAdmin,
      })
    );
  const handleLog = () => console.log(props);
  return (
    <Box sx={{ marginBottom: "1em" }}>
      <Accordion
        expanded={open}
        onChange={handleClick}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "#f5f5f5",
            borderBottom: "1px solid #ccc",
            borderRadius: "0px",
            padding: "10px 40px",
          }}
        >
          <Typography>{name}</Typography>
          <Tooltip title="Vahvistettu" sx={{ display: "none" }}>
            <ThumbUpAltIcon
              sx={{
                marginLeft: "auto",
                color: "success.main",
                display: settings.isConfirmed?.status ? "block" : "none",
              }}
            />
          </Tooltip>
        </AccordionSummary>
        <AccordionDetails>
          <StoreDetails {...props} />
          <EditItem dataId={props.id} open={edit} setOpen={setEdit} />
        </AccordionDetails>
        <AccordionActions>
          <Button
            variant="contained"
            color="success"
            onClick={handleConfirm}
            disabled={!!settings.isConfirmed?.status}
            sx={{ display: settings.isConfirmed?.status ? "none" : "block" }}
          >
            Vahvista
          </Button>
          <Button variant="contained" color="info" onClick={handleLog}>
            Debug
          </Button>
          <Button variant="contained" color="primary" onClick={handleEdit}>
            Muokkaa
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Poista
          </Button>
        </AccordionActions>
      </Accordion>
    </Box>
  );
};

const StoreDetails = (props: LazyStore) => {
  const {
    opentimes,
    description,
    categories,
    imgs,
    location,
    contact,
    social,
    logo,
  } = props;
  const iframe = location?.iframe;

  return (
    <Box>
      <CustomBox hidden={!logo} display="flex" alignItems="center">
        <Typography>
          <b>Logo</b>
        </Typography>
        <LogoImage skey={logo} isAdmin />
      </CustomBox>
      <CustomBox hidden={!description}>
        <Typography>
          <b>Kuvaus</b>
        </Typography>
        <Typography>{description}</Typography>
      </CustomBox>
      <CustomBox hidden={!categories || categories.length === 0}>
        <Categories {...props} />
      </CustomBox>
      <CustomBox hidden={!opentimes || opentimes.length === 0}>
        <Typography>
          <b>Aukioloajat</b>
        </Typography>
        <OpenTime {...props} />
      </CustomBox>
      <CustomBox hidden={!contact}>
        <Typography>
          <b>Yhteystiedot</b>
        </Typography>
        <Contact {...props} />
      </CustomBox>
      <CustomBox hidden={!location}>
        <Typography>
          <b>Sijainti</b>
        </Typography>
        <Location {...props} />
      </CustomBox>
      <CustomBox hidden={!social}>
        <Typography>
          <b>Sosiaalinen media</b>
        </Typography>
        <SocialMedia {...social} />
      </CustomBox>
      <CustomBox hidden={!imgs || imgs.length === 0}>
        <Images {...props} />
      </CustomBox>
      <CustomBox hidden={!iframe}>
        <StoreIframe {...props} />
      </CustomBox>
    </Box>
  );
};

export default StoreItem;
