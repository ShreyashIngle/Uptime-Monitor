import axios from "../api/axios";

export const refreshToken = async () => {
  let response;
  
  await axios.get("/refresh", {
    withCredentials: true,
  }).then((res) => {
    response = res.data.accessToken
  }).catch((error) => {
    localStorage.removeItem('user');
    window.location.replace("/login");
  });

  localStorage.setItem("token", response); 
  return response;
};
