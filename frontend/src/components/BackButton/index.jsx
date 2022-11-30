import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styles from "./Backbutton.module.scss";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className={`${styles.backButton} hoverEffect`}
    >
      <AiOutlineLeft />
      Back
    </button>
  );
};

export default BackButton;
