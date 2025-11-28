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
    }
  };

  return (
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
    </div>
  );
}
