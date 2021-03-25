import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Reduxmy/Action/CartAction';

const Cart2 = (props) => {

    console.log(props)
    return (
        <div>
            <h4>this is cart</h4>
        </div>
    );
};

const mapStateToProps = (state)=>{
    return {cart: state.cart,products: state.products}
}


const mapDispatchToProps ={
    removeFromCart:removeFromCart
}
export default connect(mapStateToProps,mapDispatchToProps) (Cart2);