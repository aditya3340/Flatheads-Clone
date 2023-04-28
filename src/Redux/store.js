import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { productReducer } from "./Product/reducer";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/reducer";


const rootReducer = combineReducers({
    product: productReducer,
    cart : cartReducer
})

//createStore is depricated so we use legacy_createStore instead or we can use redux toolkit
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export {store}