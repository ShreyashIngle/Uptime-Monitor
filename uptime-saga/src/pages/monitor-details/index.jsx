import BackButton from "@/components/BackButton";
import React from "react";
import Actions from "./components/Actions";
import Head from "./components/Head";
import StatsCard from "./components/StatsCard";
import styles from "./monitor-details.module.scss";

const MonitorDetails = () => {
  return (
    <div className={styles.monitorDetails}>
      <BackButton />
      <Head />
      <Actions />
      <div className={styles.monitorDetails_stats}>
        <StatsCard label="Currently up for" value="16 days 6 hours 5mins" />
        <StatsCard label="Last checked at" value="2  minutes ago" />
        <StatsCard label="Incidents" value="0" />
      </div>
    </div>
  );
};

export default MonitorDetails;
