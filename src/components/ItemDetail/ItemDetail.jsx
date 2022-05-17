import '../../../src/Products.css';
import React from 'react';


const ItemDetail = ( { product } ) => {

  return (

    <div className="ballsCard hidden">
        <h1> { product.name } </h1>
        <img src= { product.img } alt="world-cup-match-ball"/>
        <p> { product.price } </p>
    </div>
  )
}

export default ItemDetail