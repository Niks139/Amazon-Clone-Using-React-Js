import React, {useState, useEffect} from 'react';
import Product from './Product';

function DisplayData()
{

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/products")
        .then(response=> response.json())
        .then(data=> setProductData(data))
    }, [])

    return(
        <div className="row">
                {productData.map(item=>(
                    <div className="col-sm-4">
                    <Product
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}  
                        bestSeller={item.bestSeller}
                    />
                </div>
                ))}
        </div>
    )
}


export default DisplayData;