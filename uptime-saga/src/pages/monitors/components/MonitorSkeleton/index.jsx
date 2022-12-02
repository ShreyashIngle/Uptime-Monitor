import LoadingSkeletonText from "@/components/LoadingSkeletonText";
import React from "react";
import styles from "./MonitorSkeleton.module.scss";

const MonitorSkeleton = () => {
  return (
    <div className={styles.monitorSkeleton}>
      <div className={styles.details}>
        <LoadingSkeletonText height="12" width="200" />
        <LoadingSkeletonText height="10" width="150" />
      </div>
      <div>
        <LoadingSkeletonText height="18" width="100" />
      </div>
    </div>
  );
};

export default MonitorSkeleton;
