import React from 'react';

const Product = (props) => {
const {addToCart}=props
    const {name,id}=props.product
    return (
        <div style={{border: '1px solid purple'}}>
            <h2>{name}</h2>
            <button onClick={()=>addToCart(id)}>ADD to cart</button>
        </div>
    );
};

export default Product;