import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarLink from "@/components/Sidebar/SidebarLink";
import logo from "@/assets/images/logo.png";
import {
  AiOutlineSecurityScan,
  AiOutlineWarning,
  AiOutlineUsergroupAdd,
  AiOutlineApi,
  AiOutlineLink,
  AiOutlineSetting,
} from "react-icons/ai";

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside_logo}>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <SidebarLink to="/" text="Monitors">
          <AiOutlineSecurityScan size="20px" />
        </SidebarLink>
        <SidebarLink to="/team/incidents" text="Incidents">
          <AiOutlineWarning size="20px" />
        </SidebarLink>
        <SidebarLink to="/team/members" text="Team Members">
          <AiOutlineUsergroupAdd size="20px" />
        </SidebarLink>
        <SidebarLink to="/team/integrations" text="Integrations">
          <AiOutlineApi size="20px" />
        </SidebarLink>
        <SidebarLink to="/team/invitations" text="Invitations">
          <AiOutlineLink size="20px" />
        </SidebarLink>
      </div>
      <div className={styles.manageTeam}>
        <AiOutlineSetting size="20px" /> Manage Team
      </div>
    </aside>
  );
};

export default Sidebar;
