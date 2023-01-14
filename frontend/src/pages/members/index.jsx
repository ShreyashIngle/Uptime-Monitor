import React from "react";
import PageHeader from "@/components/PageHeader";
import styles from "./members.module.scss";
import MemberCard from "./components/MemberCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMembers, reset } from "@/features/members/membersSlice";
import MemberCardSkeleton from "./components/MemberCardSkeleton";

const Members = () => {
  const { teamId, email } = useSelector((state) => state.auth.user);
  const { members, isLoading } = useSelector((state) => state.member);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMembers(teamId));

    return () => dispatch(reset());
  }, []);

  const membersList = members?.map((member, index) => {
    return (
      <MemberCard
        key={index}
        status={member.status}
        email={member.email}
        memberId={member._id}
        teamId={teamId}
        invitation={member.invitation}
      />
    );
  });
  return (
    <div className={styles.members}>
      <PageHeader
        title="Team Members"
        navigateTo="/team/members/add"
        buttonText="Invite Members"
      />
      {isLoading && <MemberCardSkeleton />}
      <div className={styles.members__grid}>{!isLoading && membersList}</div>
    </div>
  );
};

export default Members;
