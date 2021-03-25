import { ADD_TO_CART, REMOVE_TO_CART } from "../Action/CartAction"

const initialState = {
    cart:[],products:[{name:"lenovo",id:1},
    {name:"sony",id:2},
    {name:"asus",id:3},
    {name:"toshiba",id:4},
    {name:"lenoascervo",id:5}]
}

  export  const cartReducer=(state=initialState,action)=>{
    switch(action.type){

        case ADD_TO_CART:

        const newid=action.id
        const newcart=[...state.cart,newid]

            return {
               ...state,cart:newcart
            }

            case REMOVE_TO_CART:
                const removeid=action.id
                const filtercart=state.cart.filter(item=>item !==removeid)
                return{
       ...state,  cart:filtercart
                }

        default:
            return state
    }
}