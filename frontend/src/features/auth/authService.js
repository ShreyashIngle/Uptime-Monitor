import axios from "@/api/axios";
const API_URL = import.meta.BASE_URL;

//Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Login user
const login = async (userData) => {
  const response = await axios.post("/login", userData, {
    withCredentials: true,
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.token));
  }

  return response.data;
};

//Logout user
const logout = async () => {
  localStorage.removeItem("user");
  await axios.post("/logout");
};

//Refresh 
const refresh = async () => {
  await axios.get("/refresh");
};

const authService = {
  login,
  register,
  logout,
  refresh
};

export default authService;
