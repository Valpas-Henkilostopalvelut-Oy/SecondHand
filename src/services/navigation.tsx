import React from "react";
import { Routes, Route, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import StorelistWithLoading from "../pages/Storelist";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import NotFound from "../globalComponents/NotFound";
import Administrate from "../pages/Administrate";
import StoreList from "../pages/Administrate/StoreList";

export const Navigation = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/stores" element={<StorelistWithLoading />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/admin" element={<Administrate />} />
    <Route path="/admin/storelist" element={<StoreList />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
