import React, { useEffect } from "react";
import { Box, CircularProgress, Container } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchBusinessTypes } from "./redux/reducer/typeSlice";
import { fetchBusinesses } from "./redux/reducer/businessSlice";
import { fetchCategories } from "./redux/reducer/categoriesSlice";
import { fetchLocations, fetchCities } from "./redux/reducer/locationSlice";
import { loadLoggedUser, setLoaded } from "./redux/reducer/application";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Homepage } from "./containers/HomePage";
import { Businesses } from "./containers/Businesses";
import { Business } from "./containers/Business";
import { Admin } from "./containers/Admin";
import { AdminBusinesses } from "./containers/Admin/AdminBusiness";
import { AdminCategories } from "./containers/Admin/AdminCategories";
import { AdminTypes } from "./containers/Admin/AdminTypes";
import { AdminLocations } from "./containers/Admin/AdminLocations";
import { BusinessCreateForm } from "./containers/Admin/AdminBusiness/AdminNewBusiness";
import AdminLocationEdit from "./containers/Admin/AdminLocationEdit";
import AdminTypesEdit from "./containers/Admin/AdminTypes/AdminTypesEdit";
import SignInForm from "./containers/Login";
import SignUpForm from "./containers/SignUp";
import { DataStore } from "aws-amplify/datastore";
import { Hub } from "aws-amplify/utils";
import NotFoundPage from "./containers/NotFoundPage";
import AdminBusinessesEdit from "./containers/Admin/AdminBusiness/AdminBusinessesEdit";

const privateRoutes = [
  { path: "/login", element: <SignInForm /> },
  { path: "/signup", element: <SignUpForm /> },
  { path: "/admin", element: <Admin /> },
  { path: "/admin/regions", element: <AdminLocations /> },
  { path: "/admin/regions/:id/edit", element: <AdminLocationEdit /> },
  { path: "/admin/types/:id/edit", element: <AdminTypesEdit /> },
  { path: "/admin/businesses", element: <AdminBusinesses /> },
  { path: "/admin/businesses/create", element: <BusinessCreateForm /> },
  { path: "/admin/businesses/:id/edit", element: <AdminBusinessesEdit /> },
  { path: "/admin/categories", element: <AdminCategories /> },
  { path: "/admin/types", element: <AdminTypes /> },
];

const PrivateRoute = ({
  isLogged,
  element,
  redirect,
}: {
  isLogged: boolean;
  element: JSX.Element;
  redirect: string;
}) => {
  if (isLogged) {
    return element;
  }
  return <Navigate to={redirect} replace />;
};

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isLogged, isLoaded } = useAppSelector((state) => state.application);

  useEffect(() => {
    const removeListener = Hub.listen("datastore", async ({ payload }) => {
      if (payload.event === "ready") {
        console.log("DataStore ready");
        dispatch(setLoaded(true));
        dispatch(loadLoggedUser());
        dispatch(fetchBusinessTypes());
        dispatch(fetchBusinesses());
        dispatch(fetchCategories());
        dispatch(fetchLocations());
        dispatch(fetchCities());
      }
    });

    console.log("Starting DataStore");
    DataStore.start();

    return () => removeListener();
  }, [dispatch]);

  const renderRoutes = (routes: { path: string; element: JSX.Element }[]) =>
    routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={
          <PrivateRoute
            redirect="/login"
            element={route.element}
            isLogged={isLogged}
          />
        }
      />
    ));

  if (!isLoaded) {
    return (
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CircularProgress />
          <Box mt={2}>Lataminen...</Box>
        </Box>
      </Container>
    );
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/businesses/:id" element={<Business />} />
        {renderRoutes(privateRoutes)}
        <Route path="/NotFound" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
