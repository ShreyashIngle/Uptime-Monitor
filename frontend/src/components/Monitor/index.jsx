import React, { useState } from "react";
import styles from "./Monitor.module.scss";
import { AiOutlineEllipsis } from "react-icons/ai";

const Monitor = () => {
  const [showActions, setShowActions] = useState(false);

  return (
    <div className={styles.monitor}>
      <div className={styles.info}>
        <div className={styles.info_dot}></div>
        <div className={styles.info_url}>
          <p className={styles.url}>chathuraperera.netlify.app</p>
          <p className={styles.status}>
            <span className={styles.status_text}>Paused</span> : 15d 6h
          </p>
        </div>
      </div>
      <div className={styles.monitor_action}>
        <div
          className={styles.dots}
          onClick={() => setShowActions((prevState) => !prevState)}
        >
          <AiOutlineEllipsis />
        </div>
      </div>
    </div>
  );
};

export default Monitor;
