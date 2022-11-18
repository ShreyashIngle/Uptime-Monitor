import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarLink from "components/Sidebar/SidebarLink";
import logo from "assets/images/logo.png";

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside_logo}>
        <img src={logo} alt="" />
      </div>
      <SidebarLink />
      <SidebarLink />
      <SidebarLink />
      <SidebarLink />
      <SidebarLink />
      <SidebarLink />
    </aside>
  );
};

export default Sidebar;
