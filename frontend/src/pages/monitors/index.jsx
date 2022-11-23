import Monitor from "components/Monitor";
import useMonitor from "hooks/use-monitor";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./monitors.module.scss";

const Monitors = () => {
  const { monitors, isLoading, isError } = useMonitor();
  const navigate = useNavigate();
  return (
    <div className={styles.monitors}>
      <div className={styles.monitors_head}>
        <h2>How are you today, Chathura?</h2>
        <button onClick={() => navigate("/team/create-monitor")}>
          Create monitor
        </button>
      </div>
      {monitors.map((monitor) => {
        return <Monitor monitor={monitor} />;
      })}
    </div>
  );
};

export default Monitors;
