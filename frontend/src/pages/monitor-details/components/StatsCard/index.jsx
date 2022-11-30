import React from "react";
import styles from "./StatsCard.module.scss";

const StatsCard = ({ label, value }) => {
  return (
    <div className={styles.statsCard}>
      <p className={styles.statsCard_label}>{label}</p>
      <p className={styles.statsCard_value}>{value}</p>
    </div>
  );
};

export default StatsCard;
