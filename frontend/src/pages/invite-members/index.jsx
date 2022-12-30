import React, { useState } from "react";
import Spinner from "@/components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import styles from "./InviteMembers.module.scss";
import { inviteMember } from "../../features/members/membersSlice";

const InviteMembers = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isSuccess } = useSelector((state) => state.member);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      memberEmail: email.trim(),
      teamId: user.teamId,
      senderId: user.userId,
      teamName: user.teamName,
      senderName: user.firstName,
    };
    dispatch(inviteMember(payload));
    isSuccess && setEmail("");
  };

  return (
    <div className={styles.wrapper}>
      <h1>Invite Members</h1>
      <form onSubmit={handleSubmit}>
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
                <input
                  type="email"
                  placeholder="john@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        <div className={styles.buttonWrapper}>
          <button type="submit" disabled={isLoading}>
            {isLoading && <Spinner />}Send Invitation
          </button>
        </div>
      </form>
    </div>
  );
};

export default InviteMembers;
