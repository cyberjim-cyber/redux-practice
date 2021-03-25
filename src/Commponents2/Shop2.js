import React from 'react';
import { connect } from 'react-redux';
import androids from '../Fakedata/android';
import { addToCart } from '../Reduxmy/Action/CartAction';
import Product from './Product';

const Shop2 = (props) => {

    console.log(props)
    const {products,addToCart}=props
    console.log(products)
  

    return (
        <div>
            {
                products.map(dt=><Product key={dt.key} addToCart={addToCart}  dt={dt}></Product>)
            }
        </div>
    );
};


const mapstateToProps=(state)=>{
    return{
        cart:state.cart,products:state.products
    }
  
}

const mapdispatchtoprops={
    addToCart:addToCart
}



export default connect(mapstateToProps,mapdispatchtoprops)( Shop2);