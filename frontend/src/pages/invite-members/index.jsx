import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./InviteMembers.module.scss";

const InviteMembers = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className={styles.wrapper}>
      <h1>Invite Members</h1>
      <form>
        <section className="sectionWrapper">
          <div className="description">
            <h4>E-mail addresses to invite</h4>
            <p>
              We'll send your colleagues a short e-mail inviting them to join
              your account on Better Uptime.
            </p>
          </div>
          <div className="inputArea">
            <div className="inputArea_container">
              <div className="inputWrapper">
                <label>Enter the email</label>
                <input type="email" placeholder="john@gmail.com" />
              </div>
            </div>
          </div>
        </section>
        <div className={styles.buttonWrapper}>
          <button type="submit" disabled={false}>
            {false && <Spinner />}Send Invitation
          </button>
        </div>
      </form>
    </div>
  );
};

export default InviteMembers;
