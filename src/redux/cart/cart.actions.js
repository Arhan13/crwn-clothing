import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    //payload is optional and is not needed in this situation
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload:item
})
