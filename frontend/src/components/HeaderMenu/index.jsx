import React from "react";
import styles from "./HeaderMenu.module.scss";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { reset } from "features/auth/authSlice";

const HeaderMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.headerMenu}>
      <div className={styles.menuItem}>
        <AiOutlineUser /> Profile
      </div>
      <div className={styles.menuItem} onClick={() => dispatch(reset())}>
        <AiOutlineLogout /> Logout
      </div>
    </div>
  );
};

export default HeaderMenu;
