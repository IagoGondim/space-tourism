import React from "react";
import { Route, Routes } from "react-router-dom";
import Crew from "../Components/crew/Crew";
import Destinations from "../Components/destinations/Destinations";
import Home from "../Components/home/Home";
import Technology from "../Components/technology/Technology";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  );
};

export default AppRoute;
