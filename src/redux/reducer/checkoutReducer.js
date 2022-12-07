import actionsTypes from "../constant/action-types";

const initialState = {
    checkoutToken: []
}

export const checkoutTokenReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionsTypes.SET_CHECKOUTTOKEN:
            return { ...state, checkoutToken: payload }

        default:
            return state;
    }
}