import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Container,
  styled,
  IconButton,
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  Typography,
  SwipeableDrawer,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { LazyTypes, Types } from "../../models";
import { signOutUser } from "../../redux/reducer/application";
import { selectType } from "../../redux/reducer/searchSlice";

const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 0px",
}));

const HeaderNavButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const NavigationButton = styled(Link)(({ theme }) => ({
  alignItems: "center",
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  borderBottomColor: "#e5e5e5",
  textDecoration: "none",
  display: "flex",
  padding: "10px 15px",
  color: "#000",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  transition: "color 0.2s ease-in-out",
}));

export const Header = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openNav, setOpenNav] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const handleClose = () => setOpenNav(false);
  const handleOpen = () => setOpenNav(true);
  const handleAccountClose = () => setOpenAccount(false);
  const handleAccountOpen = () => setOpenAccount(true);
  const { businessTypes } = useAppSelector((state) => state.typeSlice);
  const dispatch = useAppDispatch();
  const handleSelectType = (type: Types) => {
    dispatch(selectType(type));
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "#fff" }} position="static">
        {!isMobile && (
          <Container>
            <Box padding={"20px 0px"}>
              <Typography variant="h6" color={"#000"}>
                SECONDHAND FINLAND
              </Typography>
            </Box>
          </Container>
        )}

        {!isMobile ? (
          <Box sx={{ backgroundColor: "#f5f5f5" }}>
            <Container>
              <HeaderBox>
                <HeaderNavButtons>
                  <NavigationButton to="/">Etusivu</NavigationButton>
                  {businessTypes &&
                    businessTypes.map((type) => (
                      <NavigationButton
                        to={`/businesses`}
                        key={type.id}
                        onClick={() => handleSelectType(type)}
                      >
                        {type.name}
                      </NavigationButton>
                    ))}
                </HeaderNavButtons>
                <IconButton onClick={handleAccountOpen}>
                  <AccountCircleIcon />
                </IconButton>
              </HeaderBox>
            </Container>
          </Box>
        ) : (
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color={"#000"}>
              SECONDHAND FINLAND
            </Typography>
            <IconButton onClick={handleAccountOpen}>
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        )}
      </AppBar>
      {isMobile && (
        <NavigationDrawer
          open={openNav}
          handleClose={handleClose}
          handleOpen={handleOpen}
          businessTypes={businessTypes}
          handleSelectType={handleSelectType}
        />
      )}
      <AccountDrawer
        open={openAccount}
        handleClose={handleAccountClose}
        handleOpen={handleAccountOpen}
      />
    </>
  );
};

const NavigationDrawer = ({
  open,
  handleClose,
  handleOpen,
  businessTypes,
  handleSelectType,
}: {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  businessTypes?: LazyTypes[] | null;
  handleSelectType: (type: Types) => void;
}): JSX.Element => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <Box
        sx={{ maxWidth: 250, minWidth: 250, padding: "20px 10px" }}
        role="presentation"
        onClick={handleClose}
        onKeyDown={handleClose}
        display={"flex"}
        flexDirection={"column"}
      >
        <NavigationButton to="/">Etusivu</NavigationButton>
        {businessTypes &&
          businessTypes.map((type) => (
            <NavigationButton
              to={`/businesses`}
              key={type.id}
              onClick={() => handleSelectType(type)}
            >
              {type.name}
            </NavigationButton>
          ))}
      </Box>
    </SwipeableDrawer>
  );
};

const AccountDrawer = ({
  open,
  handleClose,
  handleOpen,
}: {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => dispatch(signOutUser());

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <Box
        sx={{ maxWidth: 250, minWidth: 250, padding: "20px 10px" }}
        role="presentation"
        onClick={handleClose}
        onKeyDown={handleClose}
        display={"flex"}
        flexDirection={"column"}
      >
        <NavigationButton to="/admin">Admin</NavigationButton>
        <NavigationButton to="/login">Kirjaudu</NavigationButton>
        <NavigationButton to="/signup">Rekisteröidy</NavigationButton>
        <NavigationButton to="/" onClick={handleSignOut}>
          Kirjaudu ulos
        </NavigationButton>
      </Box>
    </SwipeableDrawer>
  );
};
