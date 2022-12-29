import { axiosPrivate } from "@/api/axios";

const createNotification = async (notificationDetails) => {
  const response = await axiosPrivate.post("/", notificationDetails);
  return response.data;
};

const notificationService = {
  createNotification,
};

export default notificationService;
