import React from "react";
import styles from "./notifications.module.scss";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import invitationIcon from "@/assets/images/invitation.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { respondToNotification } from "@/features/notification/notificationSlice";

const NotificationsPanel = ({ notifications, email }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const dispatch = useDispatch();

  const handleResponse = (invitationId, status) => {
    const payload = {
      email: email,
      invitationId,
      status,
    };
    dispatch(respondToNotification(payload));
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
                  <div className={styles.buttons}>
                    <button>Deny</button>
                    <button
                      onClick={() =>
                        handleResponse(notification?._id, "accepted")
                      }
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NotificationsPanel;
