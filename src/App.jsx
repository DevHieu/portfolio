import React from "react";
import MainPage from "./pages/MainPage/MainPage.jsx";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}
