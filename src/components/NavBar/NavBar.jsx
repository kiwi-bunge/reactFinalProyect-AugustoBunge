import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/pelotaMundial.png'
import React from 'react';

import CartWidget from '../CartWidget/CartWidget';

const categories = [
    {idCategory: '1', name: 'balls', nameButton: 'Balls'},
    {idCategory: '2', name: 'jersesys', nameButton: 'Jerseys'}
]

const NavBar = () => {

    return (

        <>
            <nav className="App-navbar">
                <NavLink to="/" >
                    <img src= { logo } className="App-logo" alt="logo" />
                </NavLink>

                <h1>2022 World Cup Official Shop</h1>

                {categories.map(param => 
                
                    <NavLink key={param.id} to={`/category/${param.name}`}> 
                        {param.nameButton}
                    </NavLink>
                
                )}
                <CartWidget />
            </nav>
        </>
    )
}

export default NavBar