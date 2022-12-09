import React from "react";
import styles from "./incidents.module.scss";

import { AiFillWarning, AiOutlineMore } from "react-icons/ai";

const Incidents = () => {
  return (
    <div className={styles.incidents}>
      <h2 className={styles.title}>Incidents</h2>
      <div className={styles.incidents__table}>
        <table>
          <thead>
            <th>Monitor</th>
            <th>Started At</th>
            <th>Status</th>
            <th></th>
          </thead>

          <tbody>
            <tr>
              <td className={styles.monitor}>
                <div className={styles.iconWrapper}>
                  <AiFillWarning color="#ff4242" />
                </div>
                <div>
                  <p className={styles.url}>chathuraperera.netlify.app</p>
                  <p className={styles.cause}>Status 404</p>
                </div>
              </td>
              <td>6 Nov at 03:45pm +0530</td>
              <td className={styles.currentStatus}>
                <span>Ongoing</span>
              </td>
              <td>
                <AiOutlineMore  size="20px"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Incidents;
