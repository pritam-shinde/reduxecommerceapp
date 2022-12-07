import actionsTypes from '../constant/action-types';

export const setProducts = (products) =>{
    return{
        type: actionsTypes.SET_PRODUCTS,
        payload: products
    }
}

export const setSingleProduct = (product)=>{
    return{
        type: actionsTypes.OPEN_SELECTED_PRODUCT_PAGE,
        payload: product
    }
}

export const removeSelectedProduct = () =>{
    return {
        type: actionsTypes.REMOVE_SELECTED_PRODUCT
    }
}