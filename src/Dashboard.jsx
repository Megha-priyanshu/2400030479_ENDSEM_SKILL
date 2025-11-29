<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Dashboard</h1>
      <button onClick={logout}>Logout</button>
=======
import React from "react";

export default function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Student Dashboard</h1>
      <p>You are successfully authenticated.</p>
>>>>>>> 93bc3fc0c12cf93a19751dc0c950a7d55cda7966
    </div>
  );
}
