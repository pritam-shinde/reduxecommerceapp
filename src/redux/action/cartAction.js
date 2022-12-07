import actionsTypes from '../constant/action-types';

export const setCart = (cart) =>{
    return{
        type: actionsTypes.RETRIEVE_CART,
        payload: cart
    }
}