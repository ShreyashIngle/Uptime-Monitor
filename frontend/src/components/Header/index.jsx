import React, { useState } from "react";
import styles from "./Header.module.scss";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  const [pp, setPp] = useState(false);
  return (
    <header className={styles.header}>
      <div className={`${styles.header_details} hoverEffect`}>
        <div className={styles.header_pp}>
          {!pp ? (
            <div className={styles.letters}>C P</div>
          ) : (
            <img src="" alt="" />
          )}
        </div>
        <p>Chathura Perera</p>
        <AiOutlineDown />
      </div>
    </header>
  );
};

export default Header;
