import React from "react";
import styles from "./monitor-details.module.scss";

const MonitorDetails = () => {
  return (
    <div className={styles.monitorDetails}>
      <div className={styles.head}>
        <div className={styles.head_indicator}>
          <span className={`${styles.status} ${styles.online}`}></span>
        </div>
        <div className={styles.head_details}></div>
      </div>
    </div>
  );
};

export default MonitorDetails;
