import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import styles from "./Backbutton.module.scss";

const BackButton = () => {
  return (
    <button className={`${styles.backButton} hoverEffect`}>
      <AiOutlineLeft />
      Back
    </button>
  );
};

export default BackButton;
