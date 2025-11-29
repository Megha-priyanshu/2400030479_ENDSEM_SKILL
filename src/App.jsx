<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
>>>>>>> 93bc3fc0c12cf93a19751dc0c950a7d55cda7966
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

export default function App() {
<<<<<<< HEAD
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
=======
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
>>>>>>> 93bc3fc0c12cf93a19751dc0c950a7d55cda7966
  );
}
