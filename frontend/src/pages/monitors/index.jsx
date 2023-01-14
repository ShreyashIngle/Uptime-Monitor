import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./monitors.module.scss";
import { getMonitors, reset } from "@/features/monitors/monitorSlice";

import Monitor from "@/pages/monitors/components/Monitor";
import NoMonitors from "./components/NoMonitors";
import MonitorSkeleton from "./components/MonitorSkeleton";

const Monitors = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { monitors, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.monitor
  );

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }

    if (isError) {
      console.log(message);
    }

    dispatch(getMonitors());

    return () => dispatch(reset());
  }, []);

  return (
    <div className={styles.monitors}>
      <div className={styles.monitors_head}>
        <h2>How are you today, {user.firstName}</h2>
        <button onClick={() => navigate("/team/create-monitor")}>
          Create monitor
        </button>
      </div>
      {isLoading && (
        <>
          <MonitorSkeleton />
          <MonitorSkeleton />
          <MonitorSkeleton />
        </>
      )}
      {monitors?.length === 0 && isSuccess && <NoMonitors />}
      {monitors?.map((monitor, index) => {
        return <Monitor key={index} monitor={monitor} />;
      })}
    </div>
  );
};

export default Monitors;
