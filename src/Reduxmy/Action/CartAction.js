export const ADD_TO_CART='ADD_TO_CART'
export const REMOVE_CART='REMOVE_CART'

export const addToCart=key=>{
    return{
        type:ADD_TO_CART,key
    }
}

export  const removeFromCart=key=>{
    return{
        type:REMOVE_CART,key
    }
}