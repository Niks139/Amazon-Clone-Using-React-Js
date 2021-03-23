import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar1 from './component/Navbar1';
import Home from './component/Home';
import Login from './component/Login';
import Registration from './component/Registration'

function App() {
  return (


    <BrowserRouter>
      <div>
        <Navbar1 />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout">
            Cart  
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration}></Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
