/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import UserTemplate from "./UserTemplate";
import GroupingContext from "../../../context/grouping";
import styles from "./User.module.css";
function User({ ordering }) {
  const { user, ticketState } = useContext(GroupingContext);
  // console.log("Users ",users);
  const users = user.map((u, index) => {
    return {
      currentUser: u,
      tickets: ticketState.filter((ticket) => ticket.userId === u.id),
    };
  });
  return (
    <div className={styles.UserContainer}>
      {/* <UserTemplate /> */}
      {users.map((usr, index) => {
        return (
          <UserTemplate
            key={index}
            currentUser={usr.currentUser}
            tickets={usr.tickets}
            ordering={ordering}
          />
        );
      })}
    </div>
  );
}

export default User;
