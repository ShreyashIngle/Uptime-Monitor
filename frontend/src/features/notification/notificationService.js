import { axiosPrivate } from "@/api/axios";

const getAllNotifications = async (userId) => {
  const response = await axiosPrivate.get(`/notification/${userId}`);
  return response.data;
};

const respondToNotification = async (payload) => {
  const response = await axiosPrivate.post('/invitation', payload);
  return response.data;
}

const markAllAsRead = async (notificationIds) => {
  const response = await axiosPrivate.post('/notification', notificationIds);
  return response.data;
}

const deleteAll = async (notificationIds) => {
  const response = await axiosPrivate.post('/notification/delete', notificationIds);
  return response.data;
}

const notificationService = {
  getAllNotifications,
  markAllAsRead,
  deleteAll,
  respondToNotification
};

export default notificationService;
