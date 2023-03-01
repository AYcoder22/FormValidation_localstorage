import React from "react";
import Login from "./login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DetailedViewPage from "./DetailedViewPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<HomePage />} />
        <Route path="/user/:id" element={<DetailedViewPage />} />
      </Routes>
    </div>
  );
}

export default App;
