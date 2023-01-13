import TableRowSkeletonLoaders from "@/components/TableRowSkeletonLoaders";
import styles from "./invitations.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllInvitations,
  respondToInvitation,
} from "@/features/invitations/invitationSlice";
import moment from "moment";

const Invitations = () => {
  const dispatch = useDispatch();
  const { invitations, isLoading, isSuccess } = useSelector(
    (state) => state.invitation
  );
  const { userId, email } = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getAllInvitations(userId));
  }, []);

  const handleResponse = (response, invitationId) => {
    const payload = {
      email: email,
      invitationId: invitationId,
      status: response,
    };

    dispatch(respondToInvitation(payload))
      .unwrap()
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  //Incident table rows
  const invitationsTableRows = invitations?.map((invitation, index) => {
    return (
      <tr key={index}>
        <td className={styles.monitor}>{invitation.sender.firstName}</td>
        <td>
          {moment(invitation.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </td>
        <td className={styles.actionButtons}>
          <button onClick={() => handleResponse("accepted", invitation._id)}>
            Accept
          </button>
          <button onClick={() => handleResponse("rejected", invitation._id)}>
            Reject
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className={styles.invitations}>
      <h2 className={styles.title}>Invitations</h2>
      <div className={styles.invitations__table}>
        <table>
          <thead>
            <tr>
              <th>Sent by</th>
              <th>Sent At</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {isLoading ? <TableRowSkeletonLoaders /> : invitationsTableRows}
            {isSuccess && !invitations?.length && (
              <tr className={styles.emptyTable}>
                <td>No Invitations</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invitations;
