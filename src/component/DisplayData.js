import React, {useState, useEffect} from 'react';
import Product from './Product';
import axios from "axios";

function DisplayData()
{

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
          .then((response) => 
          {
            setProductData(response.data.body);
          });
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