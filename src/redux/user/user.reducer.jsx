import { UserActionTypes } from'./user.types';

//Recieves an current user object and action containig a string value
const INITIAL_STATE = {
    currentUser:null
};

const userReducer = (state = INITIAL_STATE, action) => { //state here is basically the current state we are giving it a fallback
    switch(action.type) { //action.type is basically the string
        case UserActionTypes.SET_CURRENT_USER :
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;
