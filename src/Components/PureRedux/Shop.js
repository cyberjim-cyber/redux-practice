import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Action/CartAction';
import Product from './Product';

const Shop = (props) => {

    console.log(props)

    const {products,addToCart}=props
    return (
        <div>
            {
                products.map(product =>
                <Product addToCart={addToCart} product={product}>

                </Product>)
            }
        </div>
    );
};



const mapstateToProps = (state)=>{
    return{
        cart: state.cart,
        products: state.products
    }




}
const mapdispatchtoprops={

    addToCart:addToCart

}
export default  connect(mapstateToProps,mapdispatchtoprops)(Shop)

