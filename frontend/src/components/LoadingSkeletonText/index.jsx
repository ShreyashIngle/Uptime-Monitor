import React from "react";
import styles from "@/assets/sass/utils/global.module.scss";

const LoadingSkeletonText = ({ width, height }) => {
  return (
    <div
      className={styles.LoadingSkeleton}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        borderRadius: `3px`,
      }}
    ></div>
  );
};

export default LoadingSkeletonText;
