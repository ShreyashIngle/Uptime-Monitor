import Monitor from "pages/monitors/components/Monitor";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./monitors.module.scss";
import { getMonitors, reset } from "features/monitors/monitorSlice";
import { useDispatch, useSelector } from "react-redux";

const Monitors = () => {
  // const { monitors, isLoading, isError } = useMonitor();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { monitors, isLoading, isError, message } = useSelector(
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
  }, [user, navigate, isError, message, dispatch]);
  return (
    <div className={styles.monitors}>
      <div className={styles.monitors_head}>
        <h2>How are you today, Chathura?</h2>
        <button onClick={() => navigate("/team/create-monitor")}>
          Create monitor
        </button>
      </div>
      {isLoading && <h1>Loading</h1>}
      {monitors?.map((monitor) => {
        return <Monitor key={monitor._id} monitor={monitor} />;
      })}
    </div>
  );
};

export default Monitors;
