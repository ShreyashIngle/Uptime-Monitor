import React from "react";
import PageHeader from "../../components/PageHeader";
import styles from "./members.module.scss";

const Members = () => {
  return (
    <div className={styles.members}>
      <PageHeader
        title="Team Members"
        navigateTo="/team/members/add"
        buttonText="Invite Members"
      />
      <div className={styles.members__grid}>
        <div className={styles.members__card}>
          <button>Remove</button>
          <div className={styles.members__image}>CP</div>
          <div className={styles.members__details}>
            <p>
              Chathura Perera <small>admin</small>
            </p>
            <p>chathuraperera007@gmail.com</p>
          </div>
        </div>
        <div className={styles.members__card}>
          <button>Remove</button>
          <div className={styles.members__image}>CP</div>
          <div className={styles.members__details}>
            <p>
              Chathura Perera <small>admin</small>
            </p>
            <p>chathuraperera007@gmail.com</p>
          </div>
        </div>
        <div className={styles.members__card}>
          <button>Remove</button>
          <div className={styles.members__image}>CP</div>
          <div className={styles.members__details}>
            <p>
              Chathura Perera <small>admin</small>
            </p>
            <p>chathuraperera007@gmail.com</p>
          </div>
        </div>
        <div className={styles.members__card}>
          <button>Remove</button>
          <div className={styles.members__image}>CP</div>
          <div className={styles.members__details}>
            <p>
              Chathura Perera <small>admin</small>
            </p>
            <p>chathuraperera007@gmail.com</p>
          </div>
        </div>
        <div className={styles.members__card}>
          <button>Remove</button>
          <div className={styles.members__image}>CP</div>
          <div className={styles.members__details}>
            <p>
              Chathura Perera <small>admin</small>
            </p>
            <p>chathuraperera007@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
