import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarLink from "components/Sidebar/SidebarLink";
import logo from "assets/images/logo.png";
import {
  AiOutlineSecurityScan,
  AiOutlineWarning,
  AiOutlineUsergroupAdd,
  AiOutlineApi,
} from "react-icons/ai";

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside_logo}>
        <img src={logo} alt="logo" />
      </div>
      <SidebarLink text="Monitors">
        <AiOutlineSecurityScan />
      </SidebarLink>
      <SidebarLink text="Incidents">
        <AiOutlineWarning />
      </SidebarLink>
      <SidebarLink text="Team Members">
        <AiOutlineUsergroupAdd />
      </SidebarLink>
      <SidebarLink text="Integrations">
        <AiOutlineApi />
      </SidebarLink>
    </aside>
  );
};

export default Sidebar;
