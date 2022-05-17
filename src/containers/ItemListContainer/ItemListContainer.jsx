import '../../../src/Products.css';
import { useEffect, useState } from 'react';
import { getFetch } from '../../helpers/data';
import { useParams } from 'react-router-dom'
import ItemList from "../../components/ItemList/ItemList"
import ItemCount from ""
import React from 'react';



const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams(); 

    useEffect(() => {
          
        if (id) {
            getFetch()
            .then(answer => setProducts(answer.filter((prods) => prods.category === id)))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        } else {
            getFetch()
            .then(answer => setProducts(answer))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        }
      
    }, [id]);

    function onAdd(quant) {
        console.log(quant)
    }
        
    console.log(id)

  return (

        <div className='productList'>
                { loading ?
            
                    <h2>Loading products...</h2>
                    
                    :
                
                    <div>
                        <ItemList products={products} />
                    </div>
                }

                <ItemCount initial={1} stock={10} onAdd={onAdd} />



        </div>
    )
}


export default ItemListContainer