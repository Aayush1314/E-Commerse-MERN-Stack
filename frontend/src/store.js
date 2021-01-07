import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {productReducer, singleProductReducer} from './reducers/productReducers'

const reducers = combineReducers({productList: productReducer, oneProduct: singleProductReducer})
const initState = []
const middleware = [thunk]
const store = createStore(reducers, initState, composeWithDevTools(applyMiddleware(...middleware)))

export default store