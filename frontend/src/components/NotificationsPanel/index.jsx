import React from "react";
import styles from "./notifications.module.scss";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import invitationIcon from "@/assets/images/invitation.png";
import { useState } from "react";

const NotificationsPanel = ({ notifications }) => {
  const [showNotifications, setShowNotifications] = useState(false);

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
                    <button>Approve</button>
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
