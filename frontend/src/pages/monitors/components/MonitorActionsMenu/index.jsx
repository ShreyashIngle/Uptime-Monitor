import React from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MonitorActionsMenu.module.scss";
import {
  AiOutlinePauseCircle,
  AiOutlineSetting,
  AiOutlineDelete,
  AiOutlineWarning,
} from "react-icons/ai";

import API from "@/api/axios";
import { deleteMonitor } from "@/features/monitors/monitorSlice";
import Spinner from "@/components/Spinner";


const MonitorActionsMenu = ({ _id: monitorID, refetch }) => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector((state) => state.monitor);

  const handleDelete =  (monitorID) => {
    dispatch(deleteMonitor(monitorID));
    console.log('this')
    // await API.delete(`/monitor/${monitorID}`)
    //   .then((res) => {
    //     console.log(res);
    //     toast.success("Monitor removed successfully.");
    //     refetch();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast.success("Something went wrong");
    //   });
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
      <div className={styles.menuItem} onClick={() =>handleDelete(monitorID)}>
        {!isLoading ? <AiOutlineDelete /> : <Spinner />} Remove 
      </div>
    </div>
  );
};

export default MonitorActionsMenu;
