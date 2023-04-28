import { ADD_TO_CART, INCREASE_QTY, DECREASE_QTY, REMOVE_FROM_CART, TOTAL_AMMOUNT } from "./actionTypes";


const initialState = {
    cart: [],
}

const cartReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch(type){
        case ADD_TO_CART:
            //let's check in the cart if the same product is present

            const isPresent = state.cart.find((prod) => {
                return prod.id === payload.id && prod.size === payload.size
            })

            let newCart
            //if present-- we'll increase the quantity
            if(isPresent) {
                newCart = state.cart.map((prod) => {
                    if(prod.id === payload.id && prod.size === payload.size) {
                        return {...prod, qty: prod.qty + 1}
                    }else {
                        return prod;
                    }
                })
            }
            //else -we'll add the product to the cart
            else {
                let newPayload = {
                    ...payload,
                    qty: 1,
                }
                newCart = [...state.cart , newPayload]
            }

            return {...state, cart: newCart}

        case INCREASE_QTY: 
            let modifiedCart = state.cart.map((prod) => {
                if(prod.id === payload.id && prod.size === payload.size) {
                    return {...prod, qty: prod.qty + 1}
                }else {
                    return prod;
                }
            })
            return {...state, cart: modifiedCart}
        
        case DECREASE_QTY:
            let resultantCart = state.cart.map((prod) => {
                if(prod.id === payload.id && prod.size === payload.size) {
                    return {...prod, qty: prod.qty - 1}
                }else {
                    return prod;
                }
            })
            return {...state, cart: resultantCart}
        
        case REMOVE_FROM_CART:
            let updatedCart = state.cart.filter((prod) => {
                return !(prod.id === payload.id && prod.size === payload.size)
            })

            return {...state, cart: updatedCart}
        
        


        default: 
            return state;
    }
}

export {cartReducer}