import androids from "../../Fakedata/android";
import { ADD_TO_CART } from "../../Redux/Action/CartAction";
import { REMOVE_CART } from "../Action/CartAction";

const initialState={
    cart:[],products:androids
}

export  const cameraReducer=(state=initialState,action)=>{

    switch(action.type){
        case ADD_TO_CART:

        const newkey=action.key
        const newcart=[...state.cart,newkey]
            return{...state,cart:newcart}

            case REMOVE_CART:
                return{state}
                default:
                    return state
    }
}