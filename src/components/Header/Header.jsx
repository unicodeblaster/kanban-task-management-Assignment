/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import {RiEqualizerFill} from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import styles from "./Header.module.css";
import GroupingContext from "../../context/grouping";

function Header({ groupingSelected, orderingSelected }) {
  const [show, setShow] = useState(false);
  const { grouping, groupingDispatch, ordering, orderingDispatch } =
    useContext(GroupingContext);
  const handleShow = () => {
    setShow(!show);
  };

  const handleGroupingChange = (e) => {
    setShow(!show)
    localStorage.setItem("grouping", e.target.value);
    groupingDispatch({ type: "SET_GROUPING", payload: e.target.value });
  };

  const handleOrderingChange = (e) => {
    setShow(!show)
    localStorage.setItem("ordering", e.target.value);
    orderingDispatch({ type: "SET_ORDERING", payload: e.target.value });
  };
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.header} onClick={handleShow}>
          <div className={styles.display}>
            <RiEqualizerFill size={15} color="gray" />
            <span style={{"fontWeight":"bold","opacity":"0.5"}}>Display</span>
            <BiChevronDown size={20} color="gray" />
          </div>
        </div>
        <div>
            {show && (
              <div className={styles.filterContainer}>
                <div className={styles.filterItem}>
                  <p className={styles.grouping}>Grouping</p>
                  <select
                    name="grouping"
                    id=""
                    onChange={handleGroupingChange}
                    className={styles.select}
                  >
                    <option value="status" selected={groupingSelected === "status"}>
                      Status
                    </option>
                    <option value="user" selected={groupingSelected === "user"}>
                      User
                    </option>
                    <option value="priority" selected={groupingSelected === "priority"}>
                      Priority
                    </option>
                  </select>
                </div>
                <div className={styles.filterItem}>
                  <p>Ordering</p>
                  <select
                    name="ordering"
                    id=""
                    className={styles.select}
                    onChange={handleOrderingChange}
                  >
                    <option value="Priority" selected={orderingSelected === "Priority"}>Priority</option>
                    <option value="Title" selected={orderingSelected === "Title"}>Title</option>
                  </select>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Header;
