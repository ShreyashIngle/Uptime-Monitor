import React from "react";
import styles from "./notifications.module.scss";
import { AiOutlineBell, AiOutlineDelete } from "react-icons/ai";
import { BiCheckDouble } from "react-icons/bi";
import invitationIcon from "@/assets/images/invitation.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { markAllAsRead } from "@/features/notification/notificationSlice";
import moment from "moment";

const NotificationsPanel = ({ notifications, email }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const dispatch = useDispatch();

  const handleResponse = () => {
    const notificationIds = notifications.map(
      (notification) => notification._id
    );
    dispatch(markAllAsRead(notificationIds));
  };

  return (
    <div className={styles.notifications}>
      <div
        className={styles.notificationsIcon}
        onClick={() => setShowNotifications((prevState) => !prevState)}
      >
        <AiOutlineBell size="22px" />
      </div>
      {showNotifications && (
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
          <div className={styles.notificationMarkAsRead}>
            <button onClick={handleResponse}>
              <BiCheckDouble size="18" /> Mark as read
            </button>
            <button>
              <AiOutlineDelete size="18" /> Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsPanel;
