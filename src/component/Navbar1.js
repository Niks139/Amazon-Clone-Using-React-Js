import React from 'react'
import Logo from "../img/amazon.png";
import Flag from "../img/canada.png";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar1.css";
import Login from './Login';


export default function Navbar1() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* //             <header id="container" className="bg-dark">
//                 <div id="nav-bar">
//                     <div id="nav-belt">
//                         <div class="nav-left">
//                             <div id="nav-logo">
//                                 <a href="/"></a>
//                             </div>
//                         </div>
//                         <div class="nav-fill">
//                             <div id="nav-search">
//                                 <form id="nav-search-bar-form">
//                                     <div class="nav-left">
//                                         <a href="">ALL</a>
//                                     </div>
//                                     <div class="nav-fill">
//                                         <input type="text" />
// 					                   </div>
//                                         <div class="nav-right">
//                                             <button type="submit">Search</button>
//                                         </div>
// 				                    </form>
// 			                    </div>
//                           </div>
//                           <div class="nav-right">
//                              <div id="nav-tools">
//                                     <a href="/">Hello, Sign in<br/> Accounts</a>
//                                     <a href="/">Returns <br/>&amp; Orders</a>
//                                     <a href="/">Cart</a>
//                               </div>
//                           </div>
//                         </div>
//                         <div id="nav-main">
// 	                       </div>
//                     </div>
// </header> */}
            <div className="d-flex justify-content-evenly align-items-center w-100">
                <div className="nav__left w-auto">
                    <Link to="/">
                        <img src={Logo} alt="Amazon Logo" className="logo" width="100px" />
                    </Link>
                </div>

                <div className="search d-flex align-items-center">
                    <div className="dropdown">
                        <button className="btn btn__dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            All
                            </button>
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
                    <NavLink className="flex-column link" activeClassName='is-active' to="/login">
                        <span className="upper__line">
                            Hello, Sign in
                            </span><br />
                        <span className="lower__line" to="/">
                            Accounts & Lists
                            </span>
                    </NavLink>
                    <Link className="flex-column link" to="/">
                        <span className="upper__line">
                            Returns
                            </span><br />
                        <span className="lower__line">
                            & Orders
                            </span>
                    </Link>
                    <Link className="flex-column link">
                        <span className="upper__line">
                            Try
                            </span><br />
                        <span className="lower__line">
                            Prime <i class="fas fa-caret-down"></i>
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
