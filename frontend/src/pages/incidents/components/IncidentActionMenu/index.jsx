import React from "react";
import styles from "./IncidentActionMenu.module.scss";

import { useDispatch } from "react-redux";
import {
  resolveIncident,
  deleteIncident,
  acknowledgeIncident,
} from "@/features/incidents/incidentSlice";

import {
  AiOutlineEye,
  AiOutlineDelete,
  AiOutlineFileSearch,
  AiOutlineIssuesClose,
} from "react-icons/ai";

const IncidentActionMenu = ({ incidentId, acknowledged, resolved }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.incidentActionMenu}>
      {resolved ? (
        <></>
      ) : acknowledged ? (
        <div
          className={styles.menuItem}
          onClick={() => dispatch(resolveIncident(incidentId))}
        >
          <AiOutlineIssuesClose size="15px" /> Resolve
        </div>
      ) : (
        <div
          className={styles.menuItem}
          onClick={() => dispatch(acknowledgeIncident(incidentId))}
        >
          <AiOutlineEye size="15px" /> Acknowledge
        </div>
      )}
      <div className={styles.menuItem}>
        <AiOutlineFileSearch size="15px" /> View
      </div>
      <div
        className={styles.menuItem}
        onClick={() => dispatch(deleteIncident(incidentId))}
      >
        <AiOutlineDelete size="15px" /> Remove
      </div>
    </div>
  );
};

export default IncidentActionMenu;
