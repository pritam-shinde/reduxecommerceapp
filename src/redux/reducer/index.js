import { combineReducers } from 'redux'
import { productReducer } from './productReducer'
import { cartReducer } from './cartReducer'
import {singleProductReducer} from './singleProductReducer'

const reducer = combineReducers({
    productReducer, cartReducer, singleProductReducer
})

export default reducer