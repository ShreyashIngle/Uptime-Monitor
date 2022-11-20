import BackButton from "components/BackButton";
import React, { useState } from "react";
import styles from "./create-monitor.module.scss";
import useMonitor from "hooks/use-monitor";
import Spinner from "components/Sidebar";

const CreateMonitor = () => {
  const { createMonitor, isLoading, isError } = useMonitor();

  const [monitorDetails, setMonitorDetails] = useState({
    url: "https://google.com",
    team: "637a44d5d180dd5e7c3a62b9",
    user: "637a44d5d180dd5e7c3a62b7",
    alertsTriggeredOn: "1",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setMonitorDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {};
  return (
    <main>
      <BackButton />
      <div className={styles.wrapper}>
        <h1>Create Monitor</h1>
        <form onSubmit={handleSubmit}>
          <section className="sectionWrapper">
            <div className="description">
              <h4>What to monitor</h4>
              <p>Configure the target website you want to monitor.</p>
            </div>
            <div className="inputArea">
              <div className="inputArea_container">
                <div className="inputWrapper">
                  <label>URL to monitor</label>
                  <input
                    type="text"
                    name="url"
                    value={monitorDetails.url}
                    onChange={handleChange}
                    id=""
                  />
                </div>
                <div className="selectWrapper">
                  <label>Notify me when</label>
                  <select onChange={handleChange} name="alertsTriggeredOn">
                    <option value="1">Becomes Unavailable</option>
                    <option value="2">SSL Expires</option>
                    <option value="3">Doesn't contain a keyword</option>
                  </select>
                </div>
              </div>
            </div>
          </section>
          <div className={styles.buttonWrapper}>
            <button type="submit">
              {isLoading ? <Spinner /> : "Create Monitor"}
            </button>
          </div>
        </form>

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
