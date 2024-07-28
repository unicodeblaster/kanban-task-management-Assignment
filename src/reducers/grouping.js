function GroupingReducer(grouping, action) {
  switch (action.type) {
    case 'SET_GROUPING':
      console.log("GroupingReducer SET_GROUPING");
      return action.payload
    default:
      return grouping
  }
}
export { GroupingReducer }