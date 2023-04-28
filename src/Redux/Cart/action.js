import { ADD_TO_CART, DECREASE_QTY, INCREASE_QTY, REMOVE_FROM_CART, TOTAL_AMMOUNT } from "./actionTypes";

const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

const increaseQty = (payload) => ({
    type: INCREASE_QTY,
    payload
})
const decreaseQty = (payload) => ({
    type: DECREASE_QTY,
    payload
})

const removeFromCart = (payload) => ({
    type:REMOVE_FROM_CART,
    payload
})

const totalAmount = () => ({
    type: TOTAL_AMMOUNT,
})


export {addToCart, increaseQty, decreaseQty, removeFromCart, totalAmount}