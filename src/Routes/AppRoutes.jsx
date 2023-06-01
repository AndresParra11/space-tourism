import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home/Home";
import Destination from "../Pages/Destination/Destination";
import { StyleRouteContainer } from "./StyleAppRoutes";
import Crew from "../Pages/Crew/Crew";
import Technology from "../Pages/Technology/Technology";
import GlobalStyle from "./StylesApp";

const AppRoutes = () => {
  return (
    <StyleRouteContainer>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />}></Route>
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
    </StyleRouteContainer>
  )
};

export default AppRoutes;
