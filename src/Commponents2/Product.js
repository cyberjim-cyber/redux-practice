import React from 'react';

const Product = (props) => {

    const {name,key}=props.dt
    const {addToCart} = props
    console.log(addToCart)
    return (
        <div style={{border: '1px solid purple'}}>
          
            <h5>{name}</h5>
            <button onClick={() =>addToCart(key)}>Add to cart</button>
        </div>
    );
};

export default Product;