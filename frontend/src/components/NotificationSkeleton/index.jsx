import React from "react";
import LoadingSkeletonCircle from "@/components/LoadingSkeletonCircle";
import LoadingSkeletonText from "@/components/LoadingSkeletonText";

const NotificationSkeleton = () => {
  return (
    <>
      <div
        style={{
          padding: "0px 10px",
          paddingTop: "10px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <LoadingSkeletonCircle height="30" width="30" />
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <LoadingSkeletonText width="260" height="15" />
          <LoadingSkeletonText width="120" height="10" />
        </div>
      </div>
      <div
        style={{
          padding: "0px 10px",
          paddingTop: "10px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <LoadingSkeletonCircle height="30" width="30" />
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <LoadingSkeletonText width="260" height="15" />
          <LoadingSkeletonText width="120" height="10" />
        </div>
      </div>
      <div
        style={{
          padding: "0px 10px",
          paddingTop: "10px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <LoadingSkeletonCircle height="30" width="30" />
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <LoadingSkeletonText width="260" height="15" />
          <LoadingSkeletonText width="120" height="10" />
        </div>
      </div>
    </>
  );
};

export default NotificationSkeleton;
