import React from "react";
import styles from "./SharedLayout.module.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "components/Sidebar";

const SharedLayout = () => {
  return (
    <main className={styles.layout}>
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default SharedLayout;
