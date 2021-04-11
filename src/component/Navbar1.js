import React from 'react'
import Logo from "../img/amazon.png";
import Flag from "../img/canada.png";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar1.css";
import Login from './Login';


export default function Navbar1() {
    return (

        <nav className="navbar navbar__header navbar-expand-lg navbar-dark bg-dark">

            <div className="d-flex justify-content-evenly align-items-center w-100">
                <div className="nav__left w-auto">
                    <Link to="/">
                        <img src={Logo} alt="Amazon Logo" className="logo" width="100px" />
                    </Link>
                </div>

                <div className="search d-flex align-items-center">
                
                    <div className="dropdown">
                        <button className="btn btn__dropdown dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            All
                        </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><Link class="dropdown-item" to="/display">All products</Link></li>
                    </ul>
                    </div>
                    <input type="text" className="searchbar"></input>
                    <span className="searchicon"><i className="fas fa-search"></i></span>
                </div>
                <div className="flags">
                    <div className="dropdown">
                        <button className="btn flag__dropdown dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={Flag} alt="Canada Flag" className="flag" width="10px" />
                        </button>
                    </div>
                </div>

                <div className="d-flex justify-content-evenly">
                    <Link className="flex-column link" activeClassName='is-active' to="/login">
                        <span className="upper__line">
                            Hello, Sign in
                            </span><br />
                        <span className="lower__line">
                            Accounts & Lists
                            </span>
                    </Link>
                    <Link className="flex-column link" to="/display">
                        <span className="upper__line">
                            All
                            </span><br />
                        <span className="lower__line">
                            Products
                            </span>
                    </Link>
                    <Link className="flex-column link" to="/bestseller">
                        <span className="upper__line">
                            Best
                            </span><br />
                        <span className="lower__line">
                            Sellers
                            </span>
                    </Link>
                    <div className="d-flex flex-column">
                        <span className="upper__line cart">
                            <i class="fas fa-shopping-cart"></i>
                                0
                            </span>
                        <span className="lower__line">
                            Cart
                            </span>
                    </div>
                </div>

            </div>
        </nav>
    )
}
