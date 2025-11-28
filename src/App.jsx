import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

export default function App() {
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
  );
}
