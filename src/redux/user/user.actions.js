import { UserActionTypes} from './user.types';

//Functions that return action objects
//object should be in correct format which the action is expected to be
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});