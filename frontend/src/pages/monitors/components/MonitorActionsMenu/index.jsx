import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MonitorActionsMenu.module.scss";
import {
  AiOutlinePauseCircle,
  AiOutlineSetting,
  AiOutlineDelete,
  AiOutlineWarning,
} from "react-icons/ai";

import { deleteMonitor } from "@/features/monitors/monitorSlice";
import Spinner from "@/components/Spinner";

const MonitorActionsMenu = ({ monitorId, setShowActions }) => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector((state) => state.monitor);

  const handleDelete = async (monitorId) => {
    console.log('deleting ID',monitorId);
    await dispatch(deleteMonitor(monitorId));
    isSuccess && setShowActions(false);
    console.log("this");
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
      <div className={styles.menuItem} onClick={() => handleDelete(monitorId)}>
        {!isLoading ? <AiOutlineDelete /> : <Spinner />} Remove
      </div>
    </div>
  );
};

export default MonitorActionsMenu;
