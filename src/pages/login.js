import { useRef, useState, useEffect, useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Login = () => {
  //const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>登入成功！</h1>
          <br />
          <p>
            <Link to="/Dashboard">前往儀錶板</Link>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>登入</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">使用者名稱:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">密碼:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>登入</button>
          </form>
          <p>
            還沒有帳號嗎? <Link to="/Register">註冊</Link>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
