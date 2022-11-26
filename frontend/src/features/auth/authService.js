import axios from "axios";

//Register user
const register = async (userData) => {
  const response = await axios.post("/register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Logout user
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
};

export default authService;
