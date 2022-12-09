import React from "react";
import styles from "./IncidentActionMenu.module.scss";

import {
  AiOutlineEye,
  AiOutlineDelete,
  AiOutlineFileSearch,
} from "react-icons/ai";

const IncidentActionMenu = () => {
  return (
    <div className={styles.incidentActionMenu}>
      <div className={styles.menuItem}>
        <AiOutlineEye size="15px" /> Acknowledge
      </div>
      <div className={styles.menuItem}>
        <AiOutlineFileSearch size="15px" /> View
      </div>
      <div className={styles.menuItem}>
        <AiOutlineDelete size="15px" /> Remove
      </div>
    </div>
  );
};

export default IncidentActionMenu;
