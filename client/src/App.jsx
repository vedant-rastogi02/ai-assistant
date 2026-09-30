import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Editor from "./components/Editor";
import ProtectRoute from "./components/ProtectRoute";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/write"
          element={
            <ProtectRoute>
              <Editor />
            </ProtectRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
