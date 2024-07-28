function TicketReducer(tickets, action){
    switch(action.type){
        case "SET_TICKETS":
            return action.payload;
        default:
            return tickets;
    }
}
export default TicketReducer;