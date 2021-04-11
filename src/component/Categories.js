import React, {useState, useEffect} from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Product from './Product';

const Categories = ({id,image,title,price,category,bestSeller}) => {

    let location = useLocation();
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/products")
        .then(response=> response.json())
        .then(data=> setProductData(data))
    }, [])


    return(
        <div className="row">
                {productData.filter(p=>p.category===location.state.category).map(item=>(
                    <div className="col-sm-4">
                        <Link to={{pathname:'/productdetails', state:{id:item.id}}}>
                    <Product
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                    />
                </Link>

                </div>
                ))}
        </div>
    )
}

export default Categories
