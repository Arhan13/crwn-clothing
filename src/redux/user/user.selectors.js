import {createSelector} from 'reselect';

//Input Selectors 1
const selectUser = state => state.user;
//Export selectors 1
export const selectCurrentUser = createSelector(
    [selectUser],//Argument is an array of input selectors
    (user)=> user.currentUser//Last argument is the function that gets the return of the input selector
);
//Instead of passing it as pairs(array) pass arguments in sucessive order

