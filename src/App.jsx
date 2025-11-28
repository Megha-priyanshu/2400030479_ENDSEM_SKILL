import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
