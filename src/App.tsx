import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Homepage } from "./containers/HomePage";
import { Businesses } from "./containers/Businesses";

const App = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/businesses" element={<Businesses />} />
      </Routes>
    </Router>
  );
};

export default App;
