import { Link } from "react-router-dom"
import React from "react"


const Item = ( {prod} ) => {

  return (
      <div>                        
        <Link to={`/detail/${prod.id}`}>
            <div className="" >
                <div className="">
                    {`${prod.name} - ${prod.category}`}
                </div>
                <div className="">
                    <img src={prod.img} alt='' className='' />
                    {prod.price}                                                            
                </div>
                <div className="">  
                    <button className="">
                        Product Detail
                    </button>                
                </div>
            </div>
        </Link>                                                                                
        </div>
    )
}

export default Item
