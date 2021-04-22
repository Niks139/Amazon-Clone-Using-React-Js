import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Bg1 from '../img/bg1.jpg';
import Bg2 from '../img/bg2.jpg';
import Bg3 from '../img/bg3.jpg';
import '../css/home.css';
import baby from "../img/baby.jpg";
import security from '../img/securtiy.jpg'
import computer from "../img/computer.jpg";
import mobile from '../img/mobile.jpg'

function Home() {

    
    
    return (
            <div>
                <div className="d-flex justify-content-center mx-auto">
                    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="15000">
                            <img src={Bg1} className="bg__img" alt="bg1" />
                            </div>
                            <div className="carousel-item" data-bs-interval="7000">
                            <img src={Bg2} class="bg__img" alt="bg2" />
                            </div>
                            <div className="carousel-item">
                            <img src={Bg3} class="bg__img" alt="bg3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel"  data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel"  data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>  
                </div>

                <div className="row display">
                    
                    <div className="col-sm-3">
                        <div class="card">
                        <Link to={{pathname:'/categories', state:{category:'Baby'}}}>
                            <img src={baby} class="card-img-top" alt="..." />
                        
                        </Link>
                            <div class="card-body">
                                <h5 class="card-title cardTitle">Baby</h5>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-3">
                        <div class="card">
                        <Link to={{pathname:'/categories', state:{category:'Computer Accessories'}}}>
                            <img src={computer} class="card-img-top" alt="..." />
                            
                        </Link>
                            <div class="card-body">
                                <h5 class="card-title cardTitle">Computer Accessories</h5>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-3">
                        <div class="card">
                        <Link to={{pathname:'/categories', state:{category:'Security'}}}>
                            <img src={security} class="card-img-top" alt="..." />
                            
                        </Link>
                            <div class="card-body">
                                <h5 class="card-title cardTitle">Security</h5>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-3">
                        <div class="card">
                        <Link to={{pathname:'/categories', state:{category:'MobileWatch'}}}>
                            <img src={mobile} class="card-img-top" alt="..." />
                            
                        </Link>
                            <div class="card-body">
                                <h5 class="card-title cardTitle">Mobile, Watch & Accessories </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        
    )
}

export default Home
