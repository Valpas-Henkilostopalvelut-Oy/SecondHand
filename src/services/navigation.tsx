import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../containers/Home";
import { Storelist } from "../containers/Storelist";
import Signup from "../containers/Signup";
import Signin from "../containers/Signin";

export const Navigation = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/storelist" element={<Storelist />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
  </Routes>
);
