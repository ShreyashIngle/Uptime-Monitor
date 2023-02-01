import { toast } from "react-toastify";
import { axiosPrivate } from "../../api/axios";
import { trimInputValues } from "../../util/helper";


//Create new monitor
const createMonitor = async (monitorData) => {
  monitorData = trimInputValues(monitorData);
  console.log('monitorData',monitorData);
  const response = await axiosPrivate.post("/monitor", monitorData)
  return response.data;
};

//Get all monitors
const getAllMonitors = async () => {
  const response = await axiosPrivate.get("/monitor");
  return response.data;
};

//Delete monitor
const deleteMonitor = async (monitorID) => {
  const response = await axiosPrivate.delete(`/monitor/${monitorID}`);
  return response.data;
};

const monitorService = {
  deleteMonitor,
  createMonitor,
  getAllMonitors,
};

export default monitorService;
