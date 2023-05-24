import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import StorelistWithLoading from "../pages/Storelist";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import NotFound from "../globalComponents/NotFound";
import AdminStores from "../pages/Administrate/AdminStores";
import Categories from "../pages/Categories";
import { useAppSelector } from "../app/hooks";

interface ProtectedRouteProps {
  isAuth: boolean;
  redirectPath: string;
  children: JSX.Element;
}

interface ProtectedRouteAdminProps {
  isAuth: boolean;
  isAdmin: boolean;
  redirectPath: string;
  children: JSX.Element;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { isAuth, redirectPath, children } = props;

  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

const ProtectedRouteAdmin = (props: ProtectedRouteAdminProps) => {
  const { isAuth, isAdmin, redirectPath, children } = props;

  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export const Navigation = () => {
  const { isAuth, isAdmin } = useAppSelector((state) => state.application);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stores" element={<StorelistWithLoading />} />
      <Route path="/stores/:category" element={<StorelistWithLoading />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute isAuth={isAuth} redirectPath="/signin">
            <AdminStores />
          </ProtectedRoute>
        }
      />
      <Route
        path="/categories"
        element={
          <ProtectedRouteAdmin
            isAuth={isAuth}
            isAdmin={isAdmin}
            redirectPath="/signin"
          >
            <Categories />
          </ProtectedRouteAdmin>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
