import { combineReducers } from 'redux'
import { productReducer } from './productReducer'
import { cartReducer } from './cartReducer'
import {singleProductReducer} from './singleProductReducer'
import {checkoutTokenReducer} from './checkoutReducer'

const reducer = combineReducers({
    productReducer, cartReducer, singleProductReducer, checkoutTokenReducer
})

export default reducer