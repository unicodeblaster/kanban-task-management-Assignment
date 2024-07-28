import React, { useContext } from "react";
import StatusTemplate from "../Status/StatusTemplate";
import GroupingContext from "../../../context/grouping";
import {BsFillExclamationSquareFill ,BsThreeDots} from "react-icons/bs";
import {MdSignalCellularAlt2Bar, MdSignalCellularAlt1Bar} from "react-icons/md";
import {AiFillSignal} from "react-icons/ai";

import styles from "./Priority.module.css";
function Priority() {
  const { ticketState } = useContext(GroupingContext);
  const priority = [
    {
      name: "No priority",
      tickets: ticketState.filter((ticket) => ticket.priority === 0),
      icon: <BsThreeDots size={10} color="gray" />,
    },
    {
      name: "Urgent",
      tickets: ticketState.filter((ticket) => ticket.priority === 4),
      icon: <BsFillExclamationSquareFill size={12} color="#FC7840" />,
    },
    {
      name: "High",
      tickets: ticketState.filter((ticket) => ticket.priority === 3),
      icon: <AiFillSignal size={12} color="#60646C" />,
    },
    {
      name: "Medium",
      tickets: ticketState.filter((ticket) => ticket.priority === 2),
      icon: <MdSignalCellularAlt2Bar size={20} color="#60646C" />,
    },
    {
      name: "Low",
      tickets: ticketState.filter((ticket) => ticket.priority === 1),
      icon: <MdSignalCellularAlt1Bar size={20} color="#60646C" />,
    },
  ];
  // console.log("Users ",users);
  return (
    <div className={styles.PriorityContainer}>
      {/* <UserTemplate /> */}
      {priority.map((p, index) => {
        return (
          <StatusTemplate
            key={index}
            name={p.name}
            tickets={p.tickets}
            icon={p.icon}
            groupingType="Priority"
          />
        );
      })}
    </div>
  );
}

export default Priority;
