import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProfileDetails from "../pages/ProfileDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
