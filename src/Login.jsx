import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuth }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() && pwd.trim()) {
      setIsAuth(true);
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>Student Portal Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
