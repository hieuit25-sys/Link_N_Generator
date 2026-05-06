import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AdminPage from "./pages/AdminPage";
import AdminLogin from "./pages/AdminLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  </BrowserRouter>
);