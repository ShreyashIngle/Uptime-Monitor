import React from "react";
import styles from "../../members.module.scss";

const MemberCard = ({ status, email }) => {
  return (
    <div className={styles.members__card}>
      <button>Remove</button>
      <div className={styles.members__image}>{email[0]?.toUpperCase()}</div>
      <div className={styles.members__details}>
        <p>{email}</p>
        <p>
          <small>
            {typeof status === "string"
              ? "Admin"
              : status
              ? "Accepted"
              : "Pending"}
          </small>
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
