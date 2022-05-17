import '../../../src/App.css';
import cart from '../../../src/images/shopping-cart.png';
import { Link } from 'react-router-dom'
import React from 'react';

function CartWidget() {

    return (
        <>
            <Link to="/cart" >
                <img src={ cart } alt="cart-widget" className='Cart'/>
            </Link>
        </>
    )
}

export default CartWidget