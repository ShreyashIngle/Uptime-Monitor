import React from "react";
import styles from "./MonitorActionsMenu.module.scss";
import { AiOutlinePauseCircle, AiOutlineSetting } from "react-icons/ai";

const MonitorActionsMenu = () => {
  return (
    <div className={styles.monitorActionsMenu}>
      <div className={styles.menuItem}>
        <AiOutlineSetting /> Settings
      </div>
      <div className={styles.menuItem}>
        <AiOutlinePauseCircle /> Pause
      </div>
    </div>
  );
};

export default MonitorActionsMenu;
