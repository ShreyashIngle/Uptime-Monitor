import React, { useEffect, useState } from "react";
import styles from "./register.module.scss";
import Spinner from "../../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, registerUser } from "features/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [singUpDetails, setSignUpDetails] = useState({
    email: "lalith@gmail.com",
    password: "lalith123456",
    confirmedPassword: "lalith123456",
    firstName: "lalith",
    lastName: "perera",
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
    
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  
  const handleChange = (e) => {
    setValidationError("");
    const { name, value } = e.target;
    setSignUpDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (singUpDetails.password !== singUpDetails.confirmedPassword) {
      return toast.error("Passwords do not match!");
    }
    const { confirmedPassword, ...userData } = singUpDetails;

    dispatch(registerUser(userData));
  };

  return (
    <main className={styles.register}>
      <div className={styles.registerLeft}>
        <div className={styles.registerLeftWrapper}>
          <h4 className={styles.title}>Register</h4>
          <p className={styles.desc}>It takes just 30 seconds. Go ahead!</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.towCol}>
              <div className={styles.inputControl}>
                <label>First Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  required
                  placeholder="john"
                  value={singUpDetails.firstName}
                />
              </div>
              <div className={styles.inputControl}>
                <label>Last Name</label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="lastName"
                  required
                  value={singUpDetails.lastName}
                  placeholder="doe"
                />
              </div>
            </div>
            <div className={styles.inputControl}>
              <label>Email address</label>
              <input
                autoComplete="off"
                type="text"
                required
                name="email"
                value={singUpDetails.email}
                onChange={handleChange}
                placeholder="name@gmail.com"
              />
            </div>
            <div className={styles.inputControl}>
              <label>Password</label>
              <input
                onChange={handleChange}
                autoComplete="off"
                type="password"
                value={singUpDetails.password}
                required
                placeholder="password"
                name="password"
              />
            </div>
            <div className={styles.inputControl}>
              <label>Confirm Password</label>
              <input
                onChange={handleChange}
                type="password"
                required
                value={singUpDetails.confirmedPassword}
                placeholder="password"
                name="confirmedPassword"
              />
            </div>

            <label
              htmlFor="agreementCheckbox"
              className={styles.agreementCheckbox}
            >
              <input type="checkbox" name="" id="agreementCheckbox" />I agree
              with <b>Terms and Privacy</b>
            </label>
            <button className={styles.loginButton}>
              {isLoading ? <Spinner /> : "Sign up"}
            </button>
            <p className={styles.redirect}>
              Already have an account? <Link href="/login">Login</Link>{" "}
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
