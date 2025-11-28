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
    </div>
  );
}
