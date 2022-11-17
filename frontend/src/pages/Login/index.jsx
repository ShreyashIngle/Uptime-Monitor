import React, { useEffect, useState } from "react";

import styles from "../register/register.module.scss";
import Spinner from "../../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import API from "api/axios";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [loginDetails, setLoginDetails] = useState({
    email: "lalith@gmail.com",
    password: "lalith123456",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await API.post("/login", loginDetails)
      .then((res) => {
        console.log(res);
        setLoading(false);
        // dispatch(loginSuccess(res.data));
        navigate("/");
        setLoginDetails({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        // dispatch(loginFailure());
        setLoading(false);
      });
  };
  return (
    <main className={styles.register}>
      <div className={styles.registerLeft}>
        <div className={styles.registerLeftWrapper}>
          <h4 className={styles.title}>Login</h4>
          <p className={styles.desc}>
            Enter your credentials to access your account
          </p>
          {validationError && (
            <p className={styles.validationError}>{validationError}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className={styles.inputControl}>
              <label>Email address</label>
              <input
                type="text"
                required
                name="email"
                value={loginDetails.email}
                onChange={handleChange}
                placeholder="name@company.com"
              />
            </div>
            <div className={styles.inputControl}>
              <label>Password</label>
              <input
                type="password"
                required
                name="password"
                value={loginDetails.password}
                onChange={handleChange}
                placeholder="password"
              />
            </div>
            <label htmlFor="rememberLogin" className={styles.rememberLogin}>
              <input type="checkbox" name="" id="rememberLogin" />
              Remember information
            </label>
            <button type="submit" className={styles.loginButton}>
              {loading ? <Spinner /> : "Login"}
            </button>
            <p className={styles.redirect}>
              New to ChatMore ? <Link to="/register">Sign up</Link>{" "}
            </p>
          </form>
        </div>
      </div>
      <div className={styles.loginRight}>
        <img
          src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="texting"
        />
      </div>
    </main>
  );
};

export default Login;
