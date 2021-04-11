import React from 'react'
import '../css/product.css'
import { Link } from 'react-router-dom';

const Product = ({id,image,title,price,category,bestSeller}) => {
  
const imgURL =  `products/${image}`;

    return (
        <div className="card">
            <div className="bg">
                <p hidden>{id}</p>
                {bestSeller}
                    <img src={imgURL} alt="image" className="card-img-top img__size"/>
                <div class="card-body">
                    <p className="card-text">{title}</p>
                    <h6 className="price">{price}</h6>
                </div>
            </div>
        </div>
    )
}

export default Product
