import React from 'react'
import '../css/footer.css'

import Flag from '../img/canada.png'
const Footer = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-bottom navbar-dark bg-dark align-items-center">

                <div className="d-flex align-items-center justify-content-center">
                    <span className="span__color mx-5">
                        Privacy Notice
                    </span>
                    <a href="https://www.facebook.com/Amazon" className="mx-5">
                        <span>
                        <i className="fab fa-facebook"></i>
                        </span>
                    </a>
                    <span className="span__color mx-5">
                    © 2008-2021, Amazon.com, Inc. or its affiliates
                    </span>
                    <span className="span__color mx-5">
                    <img src={Flag} alt="Canada Flag" className="flag" width="10px" />
                    &nbsp;Canada
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Footer
