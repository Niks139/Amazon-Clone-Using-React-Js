import React from 'react'
import Bg1 from '../img/bg1.jpg';
import Bg2 from '../img/bg2.jpg';
import Bg3 from '../img/bg3.jpg';
import '../css/home.css'

function Home() {
    return (
            
            <div className="d-flex justify-content-center mx-auto">
                
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner mask">
                    <div className="carousel-item active" data-bs-interval="5000">
                    <img src={Bg1} className="bg__img" alt="bg1" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src={Bg2} class="bg__img" alt="bg2" />
                    </div>
                    <div className="carousel-item">
                    <img src={Bg3} class="bg__img" alt="bg3" />
                    </div>
                </div>
                <button className="carousel-control-prev btn__posi" type="button" data-bs-target="#carousel"  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next btn__posi" type="button" data-bs-target="#carousel"  data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
        
    )
}

export default Home
