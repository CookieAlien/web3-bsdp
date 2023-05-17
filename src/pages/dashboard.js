import { useNavigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../context/authprovider";

const Dashboard = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.Logout();
    navigate("/");
  };
  return (
    <div>
      <h1>儀表板</h1>
      <h3>歡迎，{auth.user}</h3>
      <button onClick={handleLogout}>登出</button>
    </div>
  );
};

export default Dashboard;
