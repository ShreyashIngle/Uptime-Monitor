import React from "react";
import moment from "moment";
import { useState } from "react";
import styles from "./notifications.module.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  markAllAsRead,
  deleteAll,
} from "@/features/notification/notificationSlice";

import { AiOutlineDelete } from "react-icons/ai";
import { BiCheckDouble } from "react-icons/bi";

import NotificationSkeleton from "@/components/NotificationSkeleton";

const NotificationsPanel = () => {
  const dispatch = useDispatch();

  const { notifications, isLoading } = useSelector((state) => state.notification);

  //Mark all notifications as read
  const markAsRead = () => {
    const notificationIds = notifications.map(
      (notification) => notification._id
    );
    dispatch(markAllAsRead(notificationIds));
  };

  //Delete all notifications
  const deleteAllNotifications = () => {
    const notificationIds = notifications.map(
      (notification) => notification._id
    );
    dispatch(deleteAll(notificationIds));
  };

  return (
    <div>
      {isLoading && <NotificationSkeleton />}
      {!isLoading && (
        <div className={styles.notificationsPanel}>
          {notifications.map((notification) => {
            return (
              <div className={styles.notification} key={notification?._id}>
                <div className={styles.name}>C</div>
                <div className={styles.content}>
                  {notification?.message}
                  <div className={styles.date}>
                    {moment(notification?.createdAt).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {notifications.length ? (
            <div className={styles.notificationMarkAsRead}>
              <button onClick={markAsRead}>
                <BiCheckDouble size="18" /> Mark as read
              </button>
              <button onClick={deleteAllNotifications}>
                <AiOutlineDelete size="18" /> Delete
              </button>
            </div>
          ) : (
            <div>you're all caught up for now</div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationsPanel;
