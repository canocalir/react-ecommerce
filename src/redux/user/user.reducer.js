import { UserActionTypes } from './user.types';


//default state
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => { //if state not set userinitial state
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
               ...state,
               currentUser: action.payload 
            }
        default:
            return state;
    }
}

export default userReducer;