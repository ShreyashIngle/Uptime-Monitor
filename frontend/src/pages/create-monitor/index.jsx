import BackButton from "components/BackButton";
import React, { useState } from "react";
import styles from "./create-monitor.module.scss";
import useMonitor from "hooks/use-monitor";

const CreateMonitor = () => {
  const { createMonitor, isLoading, isError } = useMonitor();
  
  const [monitorDetails, setMonitorDetails] = useState({
    url: "https://",
    team: null,
    user: null,
    alertsTriggeredOn: null,
  });

  return (
    <main>
      <BackButton />
      <div className={styles.wrapper}>
        <h1>Create Monitor</h1>

        <section className="sectionWrapper">
          <div className="description">
            <h4>What to monitor</h4>
            <p>Configure the target website you want to monitor.</p>
          </div>
          <div className="inputArea">
            <div className="inputArea_container">
              <div className="inputWrapper">
                <label>URL to monitor</label>
                <input type="text" name="" id="" />
              </div>
              <div className="selectWrapper">
                <label>Notify me when</label>
                <select>
                  <option value="1">Becomes Unavailable</option>
                  <option value="2">SSL Expires</option>
                  <option value="3">Doesn't contain a keyword</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.buttonWrapper}>
          <button>Create Monitor</button>
        </div>

        {/* SSL Verification section*/}
        {/* <section className="sectionWrapper">
          <div className="description">
            <h4>SSL verification</h4>
          </div>
          <div className="inputArea">
            <div className="">
              <div className="inputArea_container"></div>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
};

export default CreateMonitor;
