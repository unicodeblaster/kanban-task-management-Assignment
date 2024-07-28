/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { BsCircleFill, BsThreeDots, BsCheckCircleFill } from "react-icons/bs";
import { PiCircleHalfFill } from "react-icons/pi";
import { TbCircleDotted } from "react-icons/tb";
import { BsCircle,BsFillExclamationSquareFill } from "react-icons/bs";
import { HiXCircle } from "react-icons/hi";
import {AiFillSignal} from "react-icons/ai";
import {MdSignalCellularAlt2Bar, MdSignalCellularAlt1Bar} from "react-icons/md";
import styles from "./Card.module.css";
import Avatar from "../Avatar/Avatar";
import GroupingContext from "../../context/grouping";

function Card({ tickets, showAvatar = false, groupingType }) {
  const { user, ticketState, ticketDispatch } = useContext(GroupingContext);
  const currentUser = user.find((user) => user.id === tickets.userId);
  const [checked, setChecked] = useState(tickets.status === "Done");

  const selectPriorityIcon = (priority) => {
    switch (priority) {
      case 1:
        return <MdSignalCellularAlt1Bar size={20} color="#60646C" />;
      case 2:
        return <MdSignalCellularAlt2Bar size={20} color="#60646C" />;
      case 3:
        return <AiFillSignal size={10} color="#60646C" />;
      case 4:
        return <BsFillExclamationSquareFill size={10} color="#FC7840" />;
      default:
        return <BsThreeDots size={12} color="black" />;
    }
  };

  const selectStatusIcon = (status) => {
    switch (status) {
      case "Todo":
        return <BsCircle size={13} color="gray" />;
      case "In progress":
        return <PiCircleHalfFill size={15} color="#F1C949" />;
      case "Backlog":
        return <TbCircleDotted size={15} color="gray" />;
      case "Done":
        return <BsCheckCircleFill size={15} color="blue" />;
      default:
        return <HiXCircle size={15} color="#93A2B3" />;
    }
  };
  return (
    <div className={styles.card}>
      <p className={styles.id}>{tickets.id}</p>
      {groupingType === "Status" ? (
        <div className={styles.title}>
          <p>{tickets.title}</p>
        </div>
      ) : (
        <div className={styles.titleContainer}>
          <div className={styles.statusIcon}>
            {selectStatusIcon(tickets.status)}
          </div>
          <p className={styles.title}>{tickets.title}</p>
        </div>
      )}
      <div className={styles.features}>
        {groupingType !== "Priority" && (
          <div className={styles.groupIcon}>{selectPriorityIcon(tickets.priority)}</div>
        )}
        <div className={styles.tag}>
          <BsCircleFill size={8} color="#BEC2C8" />
          {tickets.tag.map((tag, index) => {
            return <span key={index}>{tag}</span>;
          })}
        </div>
      </div>
      {showAvatar && (
        <div className={styles.avatar}>
          <Avatar currentUser={currentUser} />
        </div>
      )}
    </div>
  );
}

export default Card;
