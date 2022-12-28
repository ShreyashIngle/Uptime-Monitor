import React, { useState } from "react";

import styles from "./create-monitor.module.scss";
import BackButton from "@/components/BackButton";
import Spinner from "@/components/Spinner";
import { createMonitor } from "@/features/monitors/monitorSlice";
import { useDispatch, useSelector } from "react-redux";

const CreateMonitor = () => {
  const { userId, teamID, email } = useSelector((state) => state.auth.user);
  const { isLoading, isSuccess } = useSelector((state) => state.monitor);
  const [monitorDetails, setMonitorDetails] = useState({
    url: "https://",
    team: teamID,
    user: userId,
    alertEmails: [email],
    alertsTriggeredOn: 1,
  });

  const dispatch = useDispatch();

  //Handle input Changes
  const handleChange = (e) => {
    const { value, name } = e.target;
    setMonitorDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const resetInputs = () => {
    setMonitorDetails({
      url: "https://",
      team: teamID,
      user: userId,
      alertsTriggeredOn: 1,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMonitor(monitorDetails));
    console.log("isSuccess", isSuccess);
    isSuccess && resetInputs();
  };

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
            <button type="submit" disabled={isLoading}>
              {isLoading && <Spinner />}Create Monitor
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateMonitor;
