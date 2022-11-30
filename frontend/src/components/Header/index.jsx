import React, { useState } from "react";
import styles from "./Header.module.scss";
import { AiOutlineDown } from "react-icons/ai";
import { useSelector } from "react-redux";
import HeaderMenu from "components/HeaderMenu";

const Header = () => {
  const [pp, setPp] = useState(false);
  const { firstName, lastName } = useSelector((state) => state.auth.user);
  return (
    <header className={styles.header}>
      <div className={`${styles.header_details} hoverEffect`}>
        <div className={styles.header_pp}>
          {!pp ? (
            <div className={styles.letters}>
              {firstName[0].toUpperCase() + " " + lastName[0].toUpperCase()}
            </div>
          ) : (
            <img src="" alt="" />
          )}
        </div>
        <p>{firstName + " " + lastName}</p>
        <AiOutlineDown />
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
