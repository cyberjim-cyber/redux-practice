import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Action/CartAction';

const Cart = (props) => {
    console.log(props)

    const{cart,removeFromCart} = props
    return (
        <div>
            <h2>This is cart{cart.length}</h2>
            <ul>
                {
                    cart.map(ct=><li>{ct}
                    <button onClick={()=>removeFromCart(ct)}>X</button>
                    </li>)

                }
            </ul>
        </div>
    );
};


const mapstateToProps=state =>{
    return{
        cart: state.cart
    }
}

const mapdispatchToProps={
    removeFromCart:removeFromCart
}

export default connect(mapstateToProps, mapdispatchToProps) (Cart);