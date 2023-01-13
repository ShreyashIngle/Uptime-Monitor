import React from "react";
import MenuList from "@/components/MenuList";
import MenuItem from "@/components/MenuItem";
import styles from "../../members.module.scss";

import {
  AiOutlineMore,
  AiOutlineDelete,
  AiOutlineReload,
} from "react-icons/ai";
import { useState } from "react";
import { removeMember } from "../../../../features/members/membersSlice";
import { useDispatch } from "react-redux";

const test = () => {
  console.log("working");
};

const MemberCard = ({ status, email, memberId, teamId, invitation }) => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const removeUser = () => {
    dispatch(removeMember({ teamId, memberId, invitation }))
      .unwrap()
      .then((res) => {
        console.log("member removed");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className={styles.members__card}>
      <div className={styles.members__content}>
        <div className={styles.members__image}>{email[0]?.toUpperCase()}</div>
        <div className={styles.members__details}>
          <p>{email}</p>
          <p>
            <small>{status}</small>
          </p>
        </div>
      </div>
      <div className={styles.menuToggleButton}>
        <AiOutlineMore
          size="20"
          color="#fff"
          onClick={() => setShowMenu((prevState) => !prevState)}
        />
        {showMenu && (
          <div className={styles.menuListWrapper}>
            <MenuList>
              <MenuItem
                icon={<AiOutlineReload size="18" />}
                text="Resend"
                handleClick={test}
              />
              <MenuItem
                icon={<AiOutlineDelete size="18" />}
                text="Remove"
                handleClick={removeUser}
              />
            </MenuList>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
