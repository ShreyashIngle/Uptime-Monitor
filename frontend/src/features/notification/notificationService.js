import { axiosPrivate } from "@/api/axios";

const getAllNotifications = async (userId) => {
  const response = await axiosPrivate.get(`/notification/${userId}`);
  return response.data;
};

const respondToNotification = async (payload) => {
  const response = await axiosPrivate.post('/invitation', payload);
  return response.data;
}

const notificationService = {
  getAllNotifications,
  respondToNotification
};

export default notificationService;
