import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetch } from "../../helpers/data"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const { detailId } = useParams()

    useEffect(() => {

        getFetch(detailId)
        .then(answer=> setProduct(answer))
        .catch((err)=> console.log(err))


    }, [detailId])

    // console.log(product)
    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer