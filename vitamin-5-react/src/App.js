import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import NotHome from "./pages/NotHome/NotHome";

import { CounterProvider } from "./context/CounterContext";
import "./App.css";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Navbar />

        <Routes>
          {/* first page when you load the site */}
          <Route path="/" element={<Landing />} />

          {/* clicking Home in navbar */}
          <Route path="/home" element={<Home />} />

          {/* clicking Not Home in navbar */}
          <Route path="/nothome" element={<NotHome />} />
        </Routes>
      </div>
    </CounterProvider>
  );
}

export default App;