import React, { useState } from "react";

import styles from "./create-monitor.module.scss";
import BackButton from "@/components/BackButton";
import Spinner from "@/components/Spinner";
import { createMonitor } from "@/features/monitors/monitorSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { trimInputValues } from "@/util/helper";

const CreateMonitor = () => {
  const { userId, teamId, email } = useSelector((state) => state.auth.user);
  const [isLoading, seIstLoading] = useState(false);
  const [monitorDetails, setMonitorDetails] = useState({
    url: "https://",
    team: teamId,
    user: userId,
    alertEmails: [email],
    alertsTriggeredOn: "1",
    notifyExpiration: "1",
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

  //Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    seIstLoading(true);
    dispatch(createMonitor(monitorDetails))
      .unwrap()
      .then(() => {
        seIstLoading(false);
        setMonitorDetails((prevState) => {
          return {
            ...prevState,
            url: "https://",
          };
        });
        toast.success("Monitor created successfully");
      })
      .catch((error) => {
        seIstLoading(false);
        console.log('error',error);
        toast.error(error.response.data.message);
      });
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
                <div className="two-col">
                  <div className="selectWrapper">
                    <label>Notify me when</label>
                    <select onChange={handleChange} name="alertsTriggeredOn">
                      <option value="1">Becomes Unavailable</option>
                      <option value="2">Doesn't contain a keyword</option>
                      <option value="3">SSL Expiration</option>
                    </select>
                  </div>
                  {monitorDetails.alertsTriggeredOn === "3" && (
                    <div className="selectWrapper">
                      <label>Notify me when</label>
                      <select onChange={handleChange} name="notifyExpiration">
                        <option value="1">Alert 1 day before</option>
                        <option value="2">Alert 2 days before</option>
                        <option value="3">Alert 3 days before</option>
                        <option value="7">Alert 7 days before</option>
                        <option value="30">Alert One month before</option>
                        <option value="60">Alert Two months before</option>
                      </select>
                    </div>
                  )}
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
