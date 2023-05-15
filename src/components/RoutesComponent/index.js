import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import SSRTest from "../SSRTest";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ssr-test" element={<SSRTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
