import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchBusinessTypes } from "./redux/reducer/typeSlice";
import { fetchBusinesses } from "./redux/reducer/businessSlice";
import { fetchCategories } from "./redux/reducer/categoriesSlice";
import { fetchLocations, fetchCities } from "./redux/reducer/locationSlice";
import { loadLoggedUser } from "./redux/reducer/application";
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
import { AdminBusinesses } from "./containers/Admin/AdminBusinesses";
import { AdminCategories } from "./containers/Admin/AdminCategories";
import { AdminTypes } from "./containers/Admin/AdminTypes";
import { AdminLocations } from "./containers/Admin/AdminLocations";
import { BusinessCreateForm } from "./containers/Admin/AdminNewBusiness";
import AdminLocationEdit from "./containers/Admin/AdminLocationEdit";
import AdminTypesEdit from "./containers/Admin/AdminTypesEdit";
import SignInForm from "./containers/Login";
import SignUpForm from "./containers/SignUp";

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
  const { isLogged } = useAppSelector((state) => state.application);

  useEffect(() => {
    dispatch(fetchBusinessTypes());
    dispatch(fetchBusinesses());
    dispatch(fetchCategories());
    dispatch(fetchLocations());
    dispatch(fetchCities());
    dispatch(loadLoggedUser());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/businesses/:id" element={<Business />} />
        <Route
          path="/login"
          element={
            <PrivateRoute
              isLogged={!isLogged}
              redirect="/"
              element={<SignInForm />}
            />
          }
        />
        <Route path="/signup" element={<SignUpForm />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute
              redirect="/login"
              element={<Admin />}
              isLogged={isLogged}
            />
          }
        />
        <Route
          path="/admin/regions"
          element={
            <PrivateRoute
              redirect="/login"
              element={<AdminLocations />}
              isLogged={isLogged}
            />
          }
        />
        <Route
          path="/admin/regions/:id/edit"
          element={
            <PrivateRoute
              redirect="/login"
              element={<AdminLocationEdit />}
              isLogged={isLogged}
            />
          }
        />
        <Route
          path="/admin/types/:id/edit"
          element={
            <PrivateRoute
              redirect="/login"
              element={<AdminTypesEdit />}
              isLogged={isLogged}
            />
          }
        />
        <Route
          path="/admin/businesses"
          element={
            <PrivateRoute
              redirect="/login"
              element={<AdminBusinesses />}
              isLogged={isLogged}
            />
          }
        />
        <Route
          path="/admin/businesses/create"
          element={
            <PrivateRoute
              redirect="/login"
              element={<BusinessCreateForm />}
              isLogged={isLogged}
            />
          }
        />
        <Route
          path="/admin/categories"
          element={
            <PrivateRoute
              redirect="/login"
              element={<AdminCategories />}
              isLogged={isLogged}
            />
          }
        />
        <Route
          path="/admin/types"
          element={
            <PrivateRoute
              redirect="/login"
              element={<AdminTypes />}
              isLogged={isLogged}
            />
          }
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
