import React, { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { fetchBusinessTypes } from "./redux/reducer/typeSlice";
import { fetchBusinesses } from "./redux/reducer/businessSlice";
import { fetchCategories } from "./redux/reducer/categoriesSlice";
import { fetchLocations, fetchCities } from "./redux/reducer/locationSlice";
import { loadLoggedUser } from "./redux/reducer/application";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

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
        <Route path="/login" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/regions" element={<AdminLocations />} />
        <Route path="/admin/regions/:id/edit" element={<AdminLocationEdit />} />
        <Route path="/admin/types/:id/edit" element={<AdminTypesEdit />} />
        <Route path="/admin/businesses" element={<AdminBusinesses />} />
        <Route
          path="/admin/businesses/create"
          element={<BusinessCreateForm />}
        />
        <Route path="/admin/categories" element={<AdminCategories />} />
        <Route path="/admin/types" element={<AdminTypes />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
