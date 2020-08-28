import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, course)=> total + course.price, 0)
    return (
        <div className="cart-container">
            <div className="full-cart">
                <h4>Order Summuery</h4>
                <p>Course Oedered: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <button className="bg-warning cart-btn">Submit Order</button>
            </div>
        </div>
    );
};

export default Cart;