import React, { useState } from "react";
import styles from "./Monitor.module.scss";
import { AiOutlineEllipsis } from "react-icons/ai";
import MonitorActionsMenu from "components/MonitorActionsMenu";
import useOutSideClick from "hooks/user-outSideClick";

const Monitor = () => {
  const [showActions, setShowActions] = useState(false);
  const ref = useOutSideClick(closeActionsMenu);

  function closeActionsMenu() {
    setShowActions(false);
  }
  function toggleActionsMenu(e) {
    e.stopPropagation();
    setShowActions((prevState) => !prevState);
  }

  return (
    <div className={styles.monitor}>
      <div className={styles.info}>
        <div className={styles.info_dot}></div>
        <div className={styles.info_url}>
          <p className={styles.url}>chathuraperera.netlify.app</p>
          <p className={styles.status}>
            <span className={styles.status_text}>Paused</span> : 15d 6h
          </p>
        </div>
      </div>
      <div className={styles.actions}>
        <div
          className={`${styles.dots} hoverEffect`}
          onClick={toggleActionsMenu}
        >
          <AiOutlineEllipsis size="25px" />
        </div>
        {showActions && <MonitorActionsMenu ref={ref} />}
      </div>
    </div>
  );
};

export default Monitor;
