/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useReducer, useContext, useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Status from "./components/Grouping/Status/Status";
import Priority from "./components/Grouping/Priority/Priority";
import User from "./components/Grouping/User/User";
import GroupingContext from "./context/grouping";
import { GroupingReducer } from "./reducers/grouping";
import { OrderingReducer } from "./reducers/ordering";
import UserReducer from "./reducers/user";
import TicketReducer from "./reducers/tickets";
import { BsCircle } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import styles from "./App.module.css";
function App() {
  const defaultGrouping = localStorage.getItem("grouping") || "status";
  const defaultOrdering = localStorage.getItem("ordering") || "Priority";
  const [grouping, groupingDispatch] = useReducer(
    GroupingReducer,
    defaultGrouping
  );
  const [ordering, orderingDispatch] = useReducer(
    OrderingReducer,
    defaultOrdering
  );
  const [user, userDispatch] = useReducer(UserReducer, []);
  const [ticketState, ticketDispatch] = useReducer(TicketReducer, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await res.json();
      userDispatch({ type: "SET_USER", payload: data.users });
      ticketDispatch({ type: "SET_TICKETS", payload: data.tickets });
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log("app tickets", ticketState);
  return (
    <GroupingContext.Provider
      value={{
        grouping,
        groupingDispatch,
        ordering,
        orderingDispatch,
        user,
        ticketState,
        ticketDispatch,
      }}
    >
      {loading ? (  
        <Loader />
      ) : (
        <div>
          <div className={styles.layoutHeader}>
            <Header groupingSelected={grouping} orderingSelected={ordering} />
          </div>
          <div className={styles.layoutBody}>
            {grouping === "status" ? (
              <Status tickets={ticketState} ordering={ordering} />
            ) : grouping === "priority" ? (
              <Priority tickets={ticketState} ordering={ordering} />
            ) : (
              <User tickets={ticketState} users={user} ordering={ordering} />
            )}
          </div>
        </div>
      )}
    </GroupingContext.Provider>
  );
}

export default App;
