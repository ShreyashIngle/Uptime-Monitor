import BackButton from "components/BackButton";
import React from "react";
import styles from "./create-monitor.module.scss";

const CreateMonitor = () => {
  return (
    <main>
      <BackButton />
      <div className={styles.wrapper}>
        <h1>Create Monitor</h1>
        <div className={styles.wrapper_grid}>
          <div className={styles.description}>
            <h4>What to monitor</h4>
            <p>Configure the target website you want to monitor.</p>
          </div>
          <div className={styles.inputsArea}>
            <div className={styles.inputArea_box}></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateMonitor;
