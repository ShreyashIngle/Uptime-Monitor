import { axiosPrivate } from "@/api/axios";

const getAllNotifications = async (userId) => {
  const response = await axiosPrivate.get(`/notification/${userId}`);
  return response.data;
};

const notificationService = {
  getAllNotifications,
};

export default notificationService;
