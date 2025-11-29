<<<<<<< HEAD
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "admin" && pass === "1234") {
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
=======
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
>>>>>>> 93bc3fc0c12cf93a19751dc0c950a7d55cda7966
    }
  };

  return (
<<<<<<< HEAD
    <div style={{ padding: 20 }}>
      <h2>Login Page</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUser(e.target.value)}
      />
      <br />
      <br />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <br />

      <button onClick={handleLogin}>Login</button>
=======
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
>>>>>>> 93bc3fc0c12cf93a19751dc0c950a7d55cda7966
    </div>
  );
}
