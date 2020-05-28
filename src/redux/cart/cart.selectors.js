import  { createSelector } from 'reselect';

const selectCart = state => state.cart; //input selector //Gets the selector from the
//state to props function


//Trimming the state data
export const selectCartItems = createSelector(
    [selectCart],
    cart=> cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce( //Returns a new value every time
            (accumalatedQuantity, cartItem) => 
                accumalatedQuantity+cartItem.quantity, 
        0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce( //Returns a new value every time
            (accumalatedQuantity, cartItem) => 
                accumalatedQuantity+cartItem.quantity*cartItem.price, 
        0
    )
)
