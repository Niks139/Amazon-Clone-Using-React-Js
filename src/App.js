import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar1 from './component/Navbar1';
import Home from './component/Home';
import Login from './component/Login';
import Registration from './component/Registration'
import Product from './component/Product';
import DisplayData from './component/DisplayData';
import Bestseller from './component/bestseller';
import {useEffect,useState} from 'react';
import ProductDetails from './component/ProductDetails';
import Categories from './component/Categories';
import Footer from './component/Footer';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/products")
    .then(res=>res.json())
    .then((data)=>{

      console.log(data);
      setProducts((previousState)=>{
        console.log("Set products")
        previousState = data;
       return previousState
      });
    })
    .catch(err=>console.log(`Error ${err}`));

  },[])

  return (


    <BrowserRouter>
      <div>
        <Navbar1 className="mb-5"/>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout">
            Cart  
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration}></Route>
          <Route path="/products"> <Product value={products}/></Route>
          <Route path="/productdetails"><ProductDetails /></Route>
          <Route path="/display"><DisplayData/></Route>
          <Route path="/bestseller"><Bestseller/></Route>
          <Route path="/categories"><Categories /></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
