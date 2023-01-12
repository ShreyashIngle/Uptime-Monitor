import React from "react";
import MenuList from "@/components/MenuList";
import MenuItem from "@/components/MenuItem";
import styles from "../../members.module.scss";

import {
  AiOutlinePauseCircle,
  AiOutlineSetting,
  AiOutlineDelete,
  AiOutlineWarning,
} from "react-icons/ai";

const test = () => {
  console.log("working");
};

const MemberCard = ({ status, email }) => {
  return (
    <div className={styles.members__card}>
      <button>Remove</button>
      <MenuList>
        <MenuItem
          icon={<AiOutlinePauseCircle />}
          text="settings"
          handleClick={test}
        />
        <MenuItem
          icon={<AiOutlinePauseCircle />}
          text="settings"
          handleClick={test}
        />
        <MenuItem
          icon={<AiOutlinePauseCircle />}
          text="settings"
          handleClick={test}
        />
      </MenuList>
      <div className={styles.members__image}>{email[0]?.toUpperCase()}</div>
      <div className={styles.members__details}>
        <p>{email}</p>
        <p>
          <small>
            {typeof status === "string"
              ? "Admin"
              : status
              ? "Accepted"
              : "Pending"}
          </small>
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
