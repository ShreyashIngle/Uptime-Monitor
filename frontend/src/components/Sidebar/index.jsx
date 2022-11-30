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
        <AiOutlineSecurityScan size="20px" />
      </SidebarLink>
      <SidebarLink text="Incidents">
        <AiOutlineWarning size="20px" />
      </SidebarLink>
      <SidebarLink text="Team Members">
        <AiOutlineUsergroupAdd size="20px" />
      </SidebarLink>
      <SidebarLink text="Integrations">
        <AiOutlineApi size="20px" />
      </SidebarLink>
    </aside>
  );
};

export default Sidebar;
