import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const add = () => setCount(count+1)
    const reduce = () => setCount(count-1)

    return (
        <div>
            { count }<br/>
            <button onClick={ add } className="">+</button>
            <button onClick={ reduce } className="">-</button><br/>
            <button onClick={ ()=> onAdd(count) } className="">Add To Cart</button>
        </div>
    )
}

export default ItemCount
