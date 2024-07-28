function OrderingReducer(ordering, action) {
    switch (action.type) {
      case 'SET_ORDERING':
        console.log("GroupingReducer SET_ORDERING");
        return action.payload
      default:
        return ordering
    }
  }
  export { OrderingReducer }