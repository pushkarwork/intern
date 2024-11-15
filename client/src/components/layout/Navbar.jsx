
import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid mainC">
                    <a className="navbar-brand logo" href="#"><img src='/src/assets/images/logo.svg' /> </a>


                    <div className="collapse navbar-collapse navMiddle" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li> <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">How it Works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Support</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>

                                </ul>
                            </li>

                        </ul>


                    </div>
                    <div className="collapse navbar-collapse navRight" id="navbarSupportedContent">
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className="nav-item">
                                <i className="ri-search-line"></i>
                            </li>
                            <li className="nav-item">
                                <i className="ri-sun-line"></i>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="#">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " id='signupBtn' aria-current="page" href="#">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
