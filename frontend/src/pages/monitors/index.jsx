import Monitor from "pages/monitors/components/Monitor";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./monitors.module.scss";
import useFetch from "hooks/use-fetch";

const Monitors = () => {
  // const { monitors, isLoading, isError } = useMonitor();
  const navigate = useNavigate();

  const {
    data: monitors,
    isLoading,
    fetchError,
  } = useFetch("/monitor", "get", {});


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
