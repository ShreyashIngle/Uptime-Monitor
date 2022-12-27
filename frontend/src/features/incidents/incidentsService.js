import axios from "axios";
import { toast } from "react-toastify";
import { axiosPrivate } from "../../api/axios";

//Get all monitors
const getAllIncidents = async (userId) => {
  const response = await axiosPrivate.get(`/incident/all/${userId}`);
  return response.data;
};

const resolveIncident = async (incidentId) => {
  const response = await axiosPrivate.patch(`/incident/${incidentId}`, {});
  return response.data;
};

const incidentService = {
  getAllIncidents,
  resolveIncident,
};

export default incidentService;
