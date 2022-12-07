import actionsTypes from "../constant/action-types";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionsTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}