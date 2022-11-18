import React from "react";
import styles from "./SidebarLink.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineSecurityScan } from "react-icons/ai";

const SidebarLink = () => {
  return (
    <div className={styles.sidebarLink}>
      <Link to="/">
        <AiOutlineSecurityScan />
        Monitors
      </Link>
    </div>
  );
};

export default SidebarLink;
