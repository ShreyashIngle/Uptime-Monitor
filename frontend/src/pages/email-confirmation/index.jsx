import React from "react";
import styles from "./emailVerification.module.scss";
import inboxIcon from "@/assets/images/inbox.png";

const EmailVerification = () => {
  return (
    <div className={styles.emailVerification}>
      <div className={styles.wrapper}>
        <img src={inboxIcon} alt="inbox icon" />
        <h3>Check your inbox</h3>
        <p>
          We've sent you a link to <b>chathuraperera007@gmail.com</b>. Please
          click the link to confirm your address
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
