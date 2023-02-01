import React, { useState } from "react";
import styles from "./Monitor.module.scss";
import { AiOutlineEllipsis, AiOutlineBell } from "react-icons/ai";
import MonitorActionsMenu from "@/pages/monitors/components/MonitorActionsMenu";
import useOutSideClick from "@/hooks/user-outSideClick";
import { getTimePeriod } from "../../../../util/getTimePeriod";
import moment from "moment";

const Monitor = ({ monitor }) => {
  const [showActions, setShowActions] = useState(false);

  function toggleActionsMenu(e) {
    e.stopPropagation();
    setShowActions((prevState) => !prevState);
  }
  const period = getTimePeriod(monitor.lastIncidentAt);

  return (
    <div className={styles.monitor}>
      <div className={styles.info}>
        <span
          className={
            monitor.availability
              ? `${styles.info_dot} ${styles.active}`
              : `${styles.info_dot} ${styles.paused}`
          }
        ></span>
        <div className={styles.info_url}>
          <p className={styles.url}>{monitor.url}</p>
          <p className={styles.status}>
            <span
              className={
                monitor.availability
                  ? `${styles.status_text} ${styles.up}`
                  : `${styles.status_text} ${styles.paused}`
              }
            >
              {monitor.availability ? "Up" : "Down"}
            </span>
            : {getTimePeriod(monitor.lastIncidentAt)} 
          </p>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.purpose}>
          <AiOutlineBell />
          <p>
            {monitor.alertsTriggeredOn === 1
              ? "URL Monitoring"
              : monitor.alertsTriggeredOn === 3
              ? "SSL Monitoring"
              : "Keyword Monitoring"}
          </p>
        </div>
        <div
          className={`${styles.dots} hoverEffect`}
          onClick={toggleActionsMenu}
        >
          <AiOutlineEllipsis size="25px" />
        </div>
        {showActions && (
          <MonitorActionsMenu
            setShowActions={setShowActions}
            monitorId={monitor._id}
          />
        )}
      </div>
    </div>
  );
};

export default Monitor;
