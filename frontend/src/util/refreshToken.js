import axios from "../api/axios";

export const refreshToken = async () => {
  const response = await axios.get("/refresh", {
    withCredentials: true,
  });
  console.log('response from refreshToken',response);
  localStorage.setItem("token", response.data.accessToken);
  return response.data.accessToken;
};
