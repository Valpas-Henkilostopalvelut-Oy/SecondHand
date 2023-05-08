import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../containers/Home";
import Storelist from "../containers/Storelist";
import Signup from "../containers/Signup";
import Signin from "../containers/Signin";
import NotFound from "../globalComponents/NotFound";
import Administrate from "../containers/Administrate";

export const Navigation = (props: any) => {
  const Redirect = () => <Navigate to="/" />;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/storelist" element={<Storelist {...props} />} />
      <Route path="/signup" element={<Signup {...props} />} />
      <Route path="/signin" element={<Signin {...props} />} />
      <Route path="/admin" element={<Administrate {...props} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
