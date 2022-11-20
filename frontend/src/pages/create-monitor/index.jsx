import BackButton from "components/BackButton";
import React, { useState } from "react";
import styles from "./create-monitor.module.scss";

const CreateMonitor = () => {
  const [url, setUrl] = useState("http://");
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
          <div className={styles.inputArea}>
            <div className={styles.inputArea_container}>
              <div className={styles.inputWrapper}>
                <label>URL to monitor</label>
                <input type="text" name="" id="" />
              </div>
              <div className={styles.selectWrapper}>
                <label>Notify me when</label>
                <select>
                  <option value="1">Becomes Unavailable</option>
                  <option value="2">SSL Expires</option>
                  <option value="3">Doesn't contain a keyword</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateMonitor;
