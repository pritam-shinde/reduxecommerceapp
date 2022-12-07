import actionsTypes from "../constant/action-types";

export const generateCheckoutToken = (checkoutToken) =>{
    return {
        type: actionsTypes.SET_CHECKOUTTOKEN,
        payload: checkoutToken
    }
}