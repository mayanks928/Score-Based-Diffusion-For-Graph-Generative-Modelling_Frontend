import React from "react";
import NavBar from "./NavBar";
import { Route, Routes, useLocation } from "react-router";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
// import Diffusion from "./components/Diffusion";
import Samples from "./components/Samples";
import { StyledEngineProvider } from "@mui/material/styles";
// import Login from "./components/Login";
import "./App.css";
import { AnimatePresence } from 'framer-motion'

export default function App() {
  const location=useLocation();
  return (
    <StyledEngineProvider injectFirst>
      <div className="mainapp">
        <NavBar />
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/main" element={<Samples />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        </AnimatePresence>
      </div>
    </StyledEngineProvider>
  );
}
