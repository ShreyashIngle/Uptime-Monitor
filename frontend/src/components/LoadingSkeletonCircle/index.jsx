import React from "react";
import styles from "./LoadingSkeletonCircle.module.scss";

const LoadingSkeletonCircle = ({ width, height }) => {
  return (
    <div
      className={styles.circle}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        borderRadius: `50%`,
      }}
    ></div>
  );
};

export default LoadingSkeletonCircle;
