import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import NotHome from "./pages/NotHome/NotHome";

import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Navbar />

        <Routes>
          {/* first load / */}
          <Route path="/" element={<Landing />} />

          {/* Home button goes here */}
          <Route path="/home" element={<Home />} />

          {/* Not Home button goes here */}
          <Route path="/nothome" element={<NotHome />} />
        </Routes>
      </div>
    </CounterProvider>
  );
}

export default Appgi