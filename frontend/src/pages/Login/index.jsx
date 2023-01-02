import React, { useState, useEffect } from "react";
import styles from "../register/register.module.scss";
import Spinner from "../../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, loginUser } from "@/features/auth/authSlice";
import { toast } from "react-toastify";
import bannerImage from "@/assets/images/homepageImage.png";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    email: "chathuraperera007@gmail.com",
    password: "chathura123456",
  });

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    const user = localStorage.getItem("user");

    if (user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginDetails.email.trim();
    loginDetails.password.trim();
    dispatch(loginUser(loginDetails));
  };

  return (
    <main className={styles.register}>
      <div className={styles.registerLeft}>
        <div className={styles.registerLeftWrapper}>
          <h4 className={styles.title}>Login</h4>
          <p className={styles.desc}>
            Enter your credentials to access your account
          </p>
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
            <button
              type="submit"
              disabled={isLoading}
              className={styles.loginButton}
            >
              {isLoading ? <Spinner /> : "Login"}
            </button>
            <p className={styles.redirect}>
              New to ChatMore ? <Link to="/register">Sign up</Link>{" "}
            </p>
          </form>
        </div>
      </div>
      <div className={styles.loginRight}>
        <img src={bannerImage} alt="dashboard preview" />
      </div>
    </main>
  );
};

export default Login;
