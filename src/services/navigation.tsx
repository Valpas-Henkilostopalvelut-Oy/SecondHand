import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import Ads from "../pages/Admin/Ads";
import StorelistWithLoading from "../pages/Storelist";
import Signup from "../pages/Signup";
import Signin from "../pages/Siginin";
import NotFound from "../globalComponents/NotFound";
import AdminStores from "../pages/Admin/Stores";
import Categories from "../pages/Admin/Categories";
import Evaluation from "../pages/Evaluation";
import EvaluationAdmin from "../pages/Admin/Evaluation";
import Admin from "../pages/Admin";
import Opentimes from "../pages/Admin/Opentimes";
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
  } else if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const ProtectedRouteAlreadyAuth = (props: ProtectedRouteProps) => {
  const { isAuth, redirectPath, children } = props;

  if (isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export const Navigation = () => {
  const { isAuth, isAdmin } = useAppSelector((state) => state.user);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stores" element={<StorelistWithLoading />} />
      <Route path="/stores/:category" element={<StorelistWithLoading />} />
      <Route path="/evaluation" element={<Evaluation />} />
      <Route
        path="/signup"
        element={
          <ProtectedRouteAlreadyAuth isAuth={isAuth} redirectPath="/">
            <Signup />
          </ProtectedRouteAlreadyAuth>
        }
      />
      <Route
        path="/signin"
        element={
          <ProtectedRouteAlreadyAuth isAuth={isAuth} redirectPath="/">
            <Signin />
          </ProtectedRouteAlreadyAuth>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRouteAdmin
            isAuth={isAuth}
            isAdmin={isAdmin}
            redirectPath="/signin"
          >
            <Admin />
          </ProtectedRouteAdmin>
        }
      />
      <Route
        path="/admin/stores"
        element={
          <ProtectedRoute isAuth={isAuth} redirectPath="/signin">
            <AdminStores />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/categories"
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
      <Route
        path="/admin/evaluation"
        element={
          <ProtectedRouteAdmin
            isAuth={isAuth}
            isAdmin={isAdmin}
            redirectPath="/signin"
          >
            <EvaluationAdmin />
          </ProtectedRouteAdmin>
        }
      />
      <Route
        path="/admin/ads"
        element={
          <ProtectedRoute isAuth={isAuth} redirectPath="/signin">
            <Ads />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/opentimes"
        element={
          <ProtectedRoute isAuth={isAuth} redirectPath="/signin">
            <Opentimes />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
