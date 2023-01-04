import React from "react";
import styles from "./notifications.module.scss";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import invitationIcon from "@/assets/images/invitation.png";
import { useState } from "react";

const NotificationsPanel = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <div className={styles.notifications}>
      <div onClick={() => setShowNotifications((prevState) => !prevState)}>
        <AiOutlineBell size="22px" />
      </div>
      {showNotifications && (
        <div className={styles.notificationsPanel}>
          <div className={styles.notification}>
            <div className={styles.name}>C</div>
            <div className={styles.content}>
              Chathura Invited you to join Apple
              <div className={styles.buttons}>
                <button>Deny</button>
                <button>Approve</button>
              </div>
            </div>
          </div>
          <div className={styles.notification}>
            <div className={styles.name}>C</div>
            {/* <img src={invitationIcon} alt="invitation icon" /> */}
            <div className={styles.content}>
              Chathura Invited you to join Apple
              <div className={styles.buttons}>
                <button>Deny</button>
                <button>Approve</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsPanel;
