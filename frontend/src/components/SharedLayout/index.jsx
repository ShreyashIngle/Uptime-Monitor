import React from "react";
import styles from "./SharedLayout.module.scss";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <div className={styles.layout}>
        <aside className={styles.sidebar}></aside>
        <div className={styles.outlet}>{Outlet}</div>
      </div>
    </>
  );
};

export default SharedLayout;
