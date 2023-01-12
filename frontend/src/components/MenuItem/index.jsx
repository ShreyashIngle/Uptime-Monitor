import React from "react";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ icon, text, handleClick }) => {
  return (
    <div className={styles.menuItem} onClick={handleClick}>
      {icon} {text}
    </div>
  );
};

export default MenuItem;
