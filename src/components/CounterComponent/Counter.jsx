import {  useState } from 'react';
import '../../App.css';



function ItemCount({ stock, initial }) {

const [count, setCount] = useState(initial)
const [date, setDate] = useState(Date());

  function add() {

    if (count < 10) {

      setCount(count + 1);
      setDate(Date());

    } else {

      setCount(count);
      setDate(Date());
    }
  }

  function reduce() {
    
    if (count > 0) {

      setCount(count - 1);
      setDate(Date());

    } else {

      setCount(count);
      setDate(Date());
    }
  }

  function addToCart() {

    alert(count + " Added to cart!")
  } 

  return (
    <>
        <div className='counter'>
          <button onClick= { reduce }>-</button>
          <div className='counterValue'>{ count }</div>
          <button onClick={ add }>+</button> 
        </div>
        <div>Stock: {stock}</div>
        <button className='addToCartButton' onClick={ addToCart }>Add to Cart</button>
    </>
  )
}


export default ItemCount

