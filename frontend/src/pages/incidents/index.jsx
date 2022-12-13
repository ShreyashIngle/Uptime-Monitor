import React, { useState, useEffect } from "react";
import styles from "./incidents.module.scss";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import { AiFillWarning, AiOutlineEllipsis } from "react-icons/ai";
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

  //Incident table rows
  const incidentsTableRows = incidents?.map((incident) => {
    return (
      <tr key={incident._id}>
        <td className={styles.monitor}>
          <div className={styles.iconWrapper}>
            {!incident.resolved && <AiFillWarning color="#ff4242" />}
          </div>
          <div>
            <p className={styles.url}>{incident.monitor.url}</p>
            <p className={styles.cause}>{incident.cause}</p>
          </div>
        </td>
        <td>{moment(incident.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</td>
        <td className={styles.currentStatus}>
          <span>{incident.acknowledged ? "Acknowledged" : "Ongoing"}</span>
        </td>
        <td onClick={(e) => toggleActionsMenu(e)} className={styles.actionMenuDotsTD}>
          <div className={styles.actionMenuDots}>
            <AiOutlineEllipsis size="20px" />
            {showMenu && (
              <IncidentActionMenu acknowledged={incident.acknowledged} />
            )}
          </div>
        </td>
      </tr>
    );
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
            {!isLoading && incidentsTableRows}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Incidents;
