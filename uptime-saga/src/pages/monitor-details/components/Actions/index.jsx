import React from "react";
import styles from "./Actions.module.scss";
import {
  AiOutlinePauseCircle,
  AiOutlineSetting,
  AiOutlineDelete,
  AiOutlineWarning,
} from "react-icons/ai";

const Actions = () => {
  return (
    <div className={styles.actions}>
      <div className={styles.action}>
        <AiOutlineWarning />
        Incidents
      </div>
      <div className={styles.action}>
        <AiOutlinePauseCircle />
        Pause the monitor
      </div>
      <div className={styles.action}>
        <AiOutlineSetting />
        Settings
      </div>
      <div className={styles.action}>
        <AiOutlineDelete />
        Delete
      </div>
    </div>
  );
};

export default Actions;
