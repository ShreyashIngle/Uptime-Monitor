import React from "react";
import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import {AiOutlineSecurityScan} from 'react-icons/ai';
import logo from 'assets/images/logo.png'

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <img src={logo} className={styles.aside_logo} alt="" />
      <div className={styles.sidebarLink}>
        <Link to="/">
                <AiOutlineSecurityScan />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
