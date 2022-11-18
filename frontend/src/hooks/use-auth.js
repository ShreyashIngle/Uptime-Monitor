import API from "api/axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure } from "features/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const [validationError, setValidationError] = useState("");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (credentials) => {
    dispatch(loginStart());
    setIsLoading(true);
    await API.post("/login", {
      email: credentials.email,
      password: credentials.password,
    })
      .then((res) => {
        setIsLoading(false);
        setUser(res.data);
        dispatch(loginSuccess(res.data));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setValidationError(error.response.data.message);
        setIsLoading(false);
        dispatch(loginFailure());
      });
  };

  return { login , isLoading , validationError , user };
};

export default useAuth;
