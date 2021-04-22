import React, {useState, useEffect} from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Product from './Product';
import axios from "axios";

const Categories = ({id,image,title,price,category,bestSeller}) => {

    let location = useLocation();
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:5000/category',{
            "category":location.state.category
          })
          .then((response) => 
          {
            setProductData(response.data.body);
          });
    }, [])


    return(
        <div className="row">
                {productData.map(item=>(
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
