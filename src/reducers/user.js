function UserReducer(user,action){
    switch(action.type){
        case "SET_USER":
            return action.payload;
        case 'UPDATE_USER':
            return user.map((u,index) => index === action.payload.id ? action.payload : u);
        default:
            return user;
    }
}
export default UserReducer;