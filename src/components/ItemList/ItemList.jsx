import Item from "../Item/Item"
import React from "react"


const ItemList = ({ products }) => {
  return (
        products.map((prod) =>  <Item key={prod.id} prod={prod} />  )
  )
}

export default ItemList
