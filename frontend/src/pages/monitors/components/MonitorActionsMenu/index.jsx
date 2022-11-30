import React from "react";
import styles from "./MonitorActionsMenu.module.scss";
import {
  AiOutlinePauseCircle,
  AiOutlineSetting,
  AiOutlineDelete,
  AiOutlineWarning,
} from "react-icons/ai";
import API from "api/axios";
import { toast } from "react-toastify";

const MonitorActionsMenu = ({ _id: monitorID , refetch}) => {
  const deleteMonitor = async (monitorID) => {
    await API.delete(`/monitor/${monitorID}`)
      .then((res) => {
        console.log(res);
        toast.success("Monitor removed successfully.");
        refetch();
      })
      .catch((error) => {
        console.log(error);
        toast.success("Something went wrong");
      });
  };

  return (
    <div className={styles.monitorActionsMenu}>
      <div className={styles.menuItem}>
        <AiOutlineSetting /> Settings
      </div>
      <div className={styles.menuItem}>
        <AiOutlineWarning /> Incident
      </div>
      <div className={styles.menuItem}>
        <AiOutlinePauseCircle /> Pause
      </div>
      <div className={styles.menuItem} onClick={() => deleteMonitor(monitorID)}>
        <AiOutlineDelete /> Remove
      </div>
    </div>
  );
};

export default MonitorActionsMenu;
