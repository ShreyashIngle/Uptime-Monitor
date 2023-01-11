import React, { useState } from "react";
import styles from "./Header.module.scss";
import { AiOutlineDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import HeaderMenu from "@/components/HeaderMenu";
import NotificationsPanel from "../NotificationsPanel";
import { useEffect } from "react";
import { getAllNotifications } from "@/features/notification/notificationSlice";

const Header = () => {
  const [pp, setPp] = useState(false);
  const { firstName, lastName, userId, email } = useSelector(
    (state) => state.auth.user
  );
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotifications(userId));
  }, []);

  const { notifications, isLoading } = useSelector(
    (state) => state.notification
  );
  console.log("notifications", notifications);

  return (
    <header className={styles.header}>
      <NotificationsPanel
        notifications={notifications}
        isLoading={isLoading}
        email={email}
      />
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
