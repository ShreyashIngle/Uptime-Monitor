import React from "react";
import styles from "./MemberCardSkeleton.module.scss";
import LoadingSkeletonCircle from "@/components/LoadingSkeletonCircle";
import LoadingSkeletonText from "@/components/LoadingSkeletonText";

const MemberCardSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <LoadingSkeletonCircle height={40} width={40} />
        <div className={styles.card__content}>
          <LoadingSkeletonText height={12} width={180} />
          <LoadingSkeletonText height={9} width={60} />
        </div>
      </div>
      <div className={styles.card}>
        <LoadingSkeletonCircle height={40} width={40} />
        <div className={styles.card__content}>
          <LoadingSkeletonText height={12} width={180} />
          <LoadingSkeletonText height={9} width={60} />
        </div>
      </div>
      <div className={styles.card}>
        <LoadingSkeletonCircle height={40} width={40} />
        <div className={styles.card__content}>
          <LoadingSkeletonText height={12} width={180} />
          <LoadingSkeletonText height={9} width={60} />
        </div>
      </div>
    </div>
  );
};

export default MemberCardSkeleton;
