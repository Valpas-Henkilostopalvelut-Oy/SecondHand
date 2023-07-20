import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import Ads from "../admin/Ads";
import StorelistWithLoading from "../pages/Storelist";
import Signup from "../pages/Signup";
import Signin from "../pages/Siginin";
import NotFound from "../globalComponents/NotFound";
import AdminStores from "../admin/AdminStores";
import Categories from "../admin/Categories";
import Evaluation from "../pages/Evaluation";
import EvaluationAdmin from "../admin/Evaluation";
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
        path="/ads"
        element={
          <ProtectedRoute isAuth={isAuth} redirectPath="/signin">
            <Ads />
          </ProtectedRoute>
        }
      />
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
      <Route
        path="/evaluationadmin"
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
