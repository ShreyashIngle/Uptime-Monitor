import React, { useState, useEffect } from "react";
import styles from "./incidents.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AiFillWarning, AiOutlineMore } from "react-icons/ai";
import IncidentActionMenu from "./components/IncidentActionMenu";
import LoadingSkeletonText from "@/components/LoadingSkeletonText";

import { getIncidents, reset } from "../../features/incidents/incidentSlice";

const Incidents = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess, incidents } = useSelector(
    (state) => state.incident
  );

  useEffect(() => {
    dispatch(getIncidents());

    return () => dispatch(reset());
  }, []);

  function toggleActionsMenu(e) {
    e.stopPropagation();
    setShowMenu((prevState) => !prevState);
  }

  const incidentsTableRows = incidents?.map((incident) => {
    <tr key={incident._id}>
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
      <td
        className={styles.actionMenuDots}
        onClick={(e) => toggleActionsMenu(e)}
      >
        <AiOutlineMore size="20px" />
        {showMenu && <IncidentActionMenu />}
      </td>
    </tr>;
  });

  return (
    <div className={styles.incidents}>
      <h2 className={styles.title}>Incidents</h2>
      <div className={styles.incidents__table}>
        <table>
          <thead>
            <tr>
              <th>Monitor</th>
              <th>Started At</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {isLoading && (
              <>
                <tr>
                  <td>
                    <LoadingSkeletonText height="12" width="200" />
                  </td>
                  <td>
                    <LoadingSkeletonText height="12" width="100" />
                  </td>
                  <td>
                    <LoadingSkeletonText height="12" width="200" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <LoadingSkeletonText height="12" width="200" />
                  </td>
                  <td>
                    <LoadingSkeletonText height="12" width="100" />
                  </td>
                  <td>
                    <LoadingSkeletonText height="12" width="200" />
                  </td>
                </tr>
              </>
            )}
            {!isLoading &&
              incidents.length > 0 &&
              incidents.map((incident) => {
                return (
                  <tr key={incident._id}>
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
                    <td
                      className={styles.actionMenuDots}
                      onClick={(e) => toggleActionsMenu(e)}
                    >
                      <AiOutlineMore size="20px" />
                      {showMenu && <IncidentActionMenu />}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Incidents;
