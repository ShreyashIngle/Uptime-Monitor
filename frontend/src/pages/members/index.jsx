import React from "react";
import PageHeader from "../../components/PageHeader";
import styles from "./members.module.scss";

const Members = () => {
  return (
    <div className={styles.members}>
      <PageHeader
        title="Team Members"
        navigateTo="/team/add-members"
        buttonText="Invite Members"
      />
    </div>
  );
};

export default Members;
