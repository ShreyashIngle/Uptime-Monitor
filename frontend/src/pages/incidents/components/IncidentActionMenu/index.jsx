import React from "react";
import styles from "./IncidentActionMenu.module.scss";
import { resolveIncident } from "@/features/incidents/incidentSlice";
import { useDispatch } from "react-redux";

import {
  AiOutlineEye,
  AiOutlineDelete,
  AiOutlineFileSearch,
  AiOutlineIssuesClose,
} from "react-icons/ai";

const IncidentActionMenu = ({ incidentId, acknowledged }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.incidentActionMenu}>
      {!acknowledged && (
        <div
          className={styles.menuItem}
          onClick={() => dispatch(resolveIncident(incidentId))}
        >
          <AiOutlineIssuesClose size="15px" /> Resolve
        </div>
      )}
      {!acknowledged && (
        <div className={styles.menuItem}>
          <AiOutlineEye size="15px" /> Acknowledge
        </div>
      )}
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
