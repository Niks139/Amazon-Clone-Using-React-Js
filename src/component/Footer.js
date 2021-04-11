import React from 'react'
import '../css/footer.css'


const Footer = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="d-flex justify-content-evenly">
                    <a href="https://www.facebook.com/Amazon">
                        <span>
                        <i class="fab fa-facebook"></i>
                        </span>
                    </a>
                    <span className="span__color">
                    © 2008-2021, Amazon.com, Inc. or its affiliates
                    </span>
                    
                    
                </div>
            </nav>
        </div>
    )
}

export default Footer
