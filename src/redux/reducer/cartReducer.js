import actionsTypes from "../constant/action-types";

const initialState = {
    cart: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionsTypes.RETRIEVE_CART:
            return { ...state, cart: payload };
        default:
            return state;
    }
}