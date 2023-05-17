import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>登入</h1>
      <p>
        還沒有帳號嗎? <Link to="/Register">註冊</Link>
      </p>
    </div>
  );
};

export default Login;
