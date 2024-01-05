import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Homepage } from "./containers/HomePage";
import { Businesses } from "./containers/Businesses";
import { Business } from "./containers/Business";

const App = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/businesses/:id" element={<Business />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
