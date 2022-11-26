import axios from "axios";

const API_URL = "/monitor";

//Create new monitor
const createMonitor = async (monitorData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, monitorData, config);

  return response.data;
};

const monitorService = {
  createMonitor,
};

export default monitorService;
