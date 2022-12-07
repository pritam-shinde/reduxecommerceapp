import actionsTypes from "../constant/action-types"

const initialState = {
    product: []
}

export const singleProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionsTypes.OPEN_SELECTED_PRODUCT_PAGE:
            return { ...state, product: payload }

        case actionsTypes.REMOVE_SELECTED_PRODUCT:
            return {}

        default:
            return state
    }
}