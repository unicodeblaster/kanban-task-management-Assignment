/* eslint-disable no-unused-vars */
import React,{useContext} from 'react';
import {MdOutlineAdd} from 'react-icons/md';
import {IoEllipsisHorizontal} from 'react-icons/io5';
import {BsCircle} from 'react-icons/bs';
import styles from "./UserTemplate.module.css";
import Card from '../../Card/Card';
import Avatar from '../../Avatar/Avatar';
import GroupingContext from '../../../context/grouping';

function UserTemplate({ currentUser, tickets, ordering }) {
const {ticketState, ticketDispatch} = useContext(GroupingContext);

if (ordering === "Priority") {
  tickets.sort((a, b) => b.priority - a.priority);
} else {
  tickets.sort((a, b) => {
    const firstTitle = a.title.toUpperCase();
    const secondTitle = b.title.toUpperCase();

    if (firstTitle < secondTitle) {
      return -1;
    }
    if (firstTitle > secondTitle) {
      return 1;
    }
    return 0;
  });
}
  return (
    <div className={styles.UserContainer}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div>
            <Avatar currentUser={currentUser} />
          </div>
          <span className={styles.userName}>{currentUser.name}</span>
          <span className={styles.itemLength}>{tickets?.length}</span>
        </div>
        <div className={styles.right}>
            <div className={styles.add}>
            <MdOutlineAdd size={20} color="gray" />
            </div>
            <div className={styles.more}>
                <IoEllipsisHorizontal size={20} color="gray" />
            </div>
        </div>
      </div>
      <div className="body">
        {
            tickets.map((ticket,index) => {
                return (
                    <Card key={index} tickets={ticket} showAvatar={false} groupingType="User"/>
                )
            })
        }
      </div>
    </div>
  );
}

export default UserTemplate;
