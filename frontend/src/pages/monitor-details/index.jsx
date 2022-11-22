import BackButton from "components/BackButton";
import React from "react";
import Actions from "./components/Actions";
import Head from "./components/Head";
import styles from "./monitor-details.module.scss";

const MonitorDetails = () => {
  return (
    <div className={styles.monitorDetails}>
      <BackButton />
      <Head />
      <Actions />
    </div>
  );
};

export default MonitorDetails;
