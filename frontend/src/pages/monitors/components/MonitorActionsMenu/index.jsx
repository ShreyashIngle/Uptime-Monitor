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
import { useState } from "react";

const MonitorActionsMenu = ({ monitorId, setShowActions }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  //Handle deleting the monitor
  const handleDelete = async (monitorId) => {
    setIsLoading(true);
    await dispatch(deleteMonitor(monitorId))
      .unwrap()
      .then(() => {
        setIsLoading(false);
        setShowActions(false);
      })
      .catch(() => {
        setIsLoading(false);
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
      <div className={styles.menuItem} onClick={() => handleDelete(monitorId)}>
        {!isLoading ? <AiOutlineDelete /> : <Spinner />} Remove
      </div>
    </div>
  );
};

export default MonitorActionsMenu;
