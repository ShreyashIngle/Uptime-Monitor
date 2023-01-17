import React from "react";
import styles from "./PageHeader.module.scss";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, navigateTo, buttonText }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.pageHeader}>
      <h2>{title}</h2>
      {buttonText && <button onClick={() => navigate(navigateTo)}>{buttonText}</button>}
    </div>
  );
};

export default PageHeader;
