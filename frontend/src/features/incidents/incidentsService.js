import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:5000/api/v1/monitor";

//Get all monitors
const getAllIncidents = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/all`, config);
  console.log("response.data", response.data);
  return response.data;
};

const incidentService = {
  getAllIncidents,
};

export default incidentService;
