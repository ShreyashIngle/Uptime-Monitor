import React from "react";
import styles from "./LoadingSkeleton.module.scss";
const LoadingSkeletonCircle = ({ width, height }) => {
  return (
    <div
      className={styles.LoadingSkeleton}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        borderRadius: `50%`,
      }}
    ></div>
  );
};

export default LoadingSkeletonCircle;
