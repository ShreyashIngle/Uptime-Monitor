import { useDispatch } from "react-redux";
import axios from "../api/axios";
import { updateToken } from "../features/auth/authSlice";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });

    dispatch(updateToken(response.data.accessToken));
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
