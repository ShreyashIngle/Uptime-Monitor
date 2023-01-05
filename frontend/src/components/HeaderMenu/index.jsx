import React from "react";
import styles from "./HeaderMenu.module.scss";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { reset, logout } from "@/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const HeaderMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(reset());
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  
  return (
    <div className={styles.headerMenu}>
      <div className={styles.menuItem}>
        <AiOutlineUser /> Profile
      </div>
      <div className={styles.menuItem} onClick={handleLogout}>
        <AiOutlineLogout /> Logout
      </div>
    </div>
  );
};

export default HeaderMenu;
