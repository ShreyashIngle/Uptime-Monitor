import React from "react";
import styles from "./SharedLayout.module.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Header from "components/Header";

const SharedLayout = () => {
  return (
    <main className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <Outlet />
      </div>
    </main>
  );
};

export default SharedLayout;
