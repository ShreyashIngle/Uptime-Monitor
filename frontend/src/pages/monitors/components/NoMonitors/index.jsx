import React from "react";
import styles from "./NoMonitors.module.scss";
import noMonitorsImage from "@/assets/images/NoSite.png";

const NoMonitors = () => {
  return (
    <div className={styles.noMonitors}>
      <h4>No Monitors available</h4>
      <img src={noMonitorsImage} alt="" />
    </div>
  );
};

export default NoMonitors;
