import React from 'react';
import SingleItem from '../SingleItem/SingleItem';
import './Cart.css';

const Cart = (props) => {
    const {Name,Price} = props.cart;
    const cart = props.cart;
    
    
    console.log(props.cart)
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const itemPrice = item.Price;
        const price = parseFloat(itemPrice);
        totalCost = totalCost + Math.round(price);
        console.log(price);
        // totalCost = totalCost + item.Price; 
    }
   
    return (
        <div className="cart">
            <h2>Cart Length :{props.cart.length} </h2>
            <h2>Ammount:${totalCost}</h2>
            <hr />
           {
            cart.map(singleItem => <SingleItem singleItem={singleItem}></SingleItem>)
           }
        </div>
    );
};

export default Cart;