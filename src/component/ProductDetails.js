import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';

const ProductDetails = () => {
    
    let location = useLocation();
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/products/${location.state.id}`)
        .then(response=> response.json())
        .then(data=> setProductData(data))
    }, [])
    
    return (
        <div className="bg">
                    <img src={`products/${productData.image}`} alt="image" className="img__details float-left"/>
                    <div className="col-sm4">
                        <p hidden>{productData.id}</p>
                        <div className="float-right ms-3">
                            <h3 className="pp">{productData.title}</h3>
                            <h5>{productData.price}</h5>
                            <p className="pp">{productData.desc}</p>
                            <form>
                                <label for="Quantity">Quantity :</label> 
                                <select name="Quantity" id="Quantity" type="number">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                
                            </form>
                                <button className="btn btn-bg">
                                    Add to cart
                                </button>
                        </div>
                        </div> 
        </div>
    )
}

export default ProductDetails
