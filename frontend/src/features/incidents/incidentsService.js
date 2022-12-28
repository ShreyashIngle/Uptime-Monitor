import { axiosPrivate } from "@/api/axios";

//Get all monitors
const getAllIncidents = async (userId) => {
  const response = await axiosPrivate.get(`/incident/all/${userId}`);
  return response.data;
};

const resolveIncident = async (incidentId) => {
  const response = await axiosPrivate.patch(`/incident/resolve/${incidentId}`, {});
  return response.data;
};

const acknowledgeIncident = async (incidentId) => {
  const response = await axiosPrivate.patch(`/incident/acknowledge/${incidentId}`, {});
  return response.data;
};

const deleteIncident = async (incidentId) => {
  const response = await axiosPrivate.delete(`/incident/${incidentId}`);
  return response.data;
};

const incidentService = {
  getAllIncidents,
  acknowledgeIncident,
  resolveIncident,
  deleteIncident
};

export default incidentService;
