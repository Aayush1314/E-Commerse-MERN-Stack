import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {productReducer, singleProductReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import {loginReducer} from './reducers/authReducers'

const reducers = combineReducers({user: loginReducer, productList: productReducer, oneProduct: singleProductReducer, cart: cartReducer})
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : []
const initState = {cart: {cartItems: cartItemsFromStorage}}
const middleware = [thunk]
const store = createStore(reducers, initState, composeWithDevTools(applyMiddleware(...middleware)))

export default store

/*
def process(string):
    num = int(string)
    if num==0:
        print(0,"days")
        return
    if num==1:
        print(1,"day")
        return
    if num<7:
        print(num,"days")
        return    
    d = num//7
    ext = num-(7*d)
    if ext==0 and d!=1:
        print(d,"weeks")    
        return
    if ext==0 and d==1:
        print(d,"week")    
        return
    if ext!=0 and d!=1:
        print(d,"weeks","+",ext,"days")    
        return
    if ext!=0 and d==1:
        print(d,"weeks","+",ext,"days")    
        return
    
*/