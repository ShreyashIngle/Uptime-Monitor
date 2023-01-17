import React from "react";
import styles from "./integrations.module.scss";
import PageHeader from "@/components/PageHeader";
import slackIcon from "@/assets/images/slack.png";

const Integrations = () => {
  return (
    <div className={styles.integrations}>
      <PageHeader title="Integrations" buttonText="" />
      <div className={styles.integrations__wrapper}>
        <div className={styles.integrations__card}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <img src={slackIcon} alt="slack" />
            </div>
            <div className={styles.text}>
              <h5>Slack</h5>
              <p>Send incident alerts to your channel</p>
            </div>
          </div>
          <div className={styles.button}>
            <a href="#">Add</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
