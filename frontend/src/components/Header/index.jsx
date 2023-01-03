import React, { useState } from "react";
import styles from "./Header.module.scss";
import { AiOutlineDown, AiOutlineBell ,AiOutlineMail} from "react-icons/ai";
import { useSelector } from "react-redux";
import HeaderMenu from "@/components/HeaderMenu";

const Header = () => {
  const [pp, setPp] = useState(false);
  const { firstName, lastName } = useSelector((state) => state.auth.user);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.notifications}>
        <AiOutlineBell size="22px" />
        <div className={styles.notificationsPanel}>
          <div className={styles.notification}>
              <AiOutlineMail size="18px"/> Chathura Invited you to join Apple
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowMenu((prevState) => !prevState)}
        className={`${styles.header_details} hoverEffect`}
      >
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
      </div>
      {showMenu && <HeaderMenu />}
    </header>
  );
};

export default Header;
