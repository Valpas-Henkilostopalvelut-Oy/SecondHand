import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../containers/Home";
import { Storelist } from "../containers/Storelist";

export const Navigation = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/storelist" element={<Storelist />} />
  </Routes>
);
