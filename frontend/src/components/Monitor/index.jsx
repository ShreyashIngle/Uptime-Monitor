import React from "react";
import styles from "./Monitor.module.scss";

const Monitor = () => {
  return (
    <div className={styles.monitor}>
      <div className={styles.info}>
        <div className={styles.info_dot}></div>
        <div className={styles.info_url}>
          <p className={styles.url}>chathuraperera.netlify.app</p>
          <p className={styles.status}>
            <span className={styles.status_text}>Paused</span>: 15d 6h
          </p>
        </div>
      </div>
      <div className={styles.monitor_action}></div>
    </div>
  );
};

export default Monitor;
