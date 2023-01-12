import React from "react";
import styles from "./MenuList.module.scss";

const MenuList = ({ children }) => {
  return <div className={styles.menuList}>{children}</div>;
};

export default MenuList;
