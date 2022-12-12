import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:5000/api/v1/monitor";

//Create new monitor
const createMonitor = async (monitorData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("monitorData in monitorService", monitorData);
  let response;
  await axios
    .post(API_URL, monitorData, config)
    .then((res) => {
      res = response;
      toast.success("Monitor created successfully");
    })
    .catch((error) => {
      console.log("error", error);
      toast.error(error.response.data.message);
    });

  return response.data;
};

//Get all monitors
const getAllMonitors = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//Delete monitor
const deleteMonitor = async (monitorID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${API_URL}/${monitorID}`, config);

  return response.data;
};

const monitorService = {
  deleteMonitor,
  createMonitor,
  getAllMonitors,
};

export default monitorService;
