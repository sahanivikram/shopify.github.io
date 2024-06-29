import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    function logout() {
        localStorage.clear()
    }



    return (
        <>
            {/* <!-- Spinner Start --> */}
            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width: "3rem" ,height: "3rem", role:"status"}}>
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}
            {/* <!-- Spinner End --> */}


            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-light p-0">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-6 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-map-marker-alt text-primary me-2"></small>
                            <small>A-43, Sector-16 , Noida</small>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-phone-alt text-primary me-2"></small>
                            <small><a href="tel:9999107432">91-9999107432</a></small>&emsp;
                            <small className="fa fa-envelope text-primary me-2"></small>
                            <small><a href="mailto:shopify@gmail.com">shopify@gmail.com</a></small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-sm-square bg-white text-primary me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-sm-square bg-white text-primary me-0" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link to="/"  className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary"><img src="/img/download.png" alt="..." /> &emsp; <i className="fa fa-shopping-cart text-primary me-2"></i></h2>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/shop" className="nav-item nav-link">Shop</Link>
                        <Link to="/admin" className="nav-item nav-link">Admin</Link>

                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    {/* localStorage and sessionStorage are almost identical and have the same API. The difference is that with sessionStorage , the data is persisted only until the window or tab is closed. With localStorage , the data is persisted until the user manually clears the browser cache or until your web app clears the data. */}
                    {
                        localStorage.getItem("login") ?
                            <div className="nav-item dropdown bg-danger">
                                <a to="#" className="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown">{localStorage.getItem("name")}</a>
                                <div className="dropdown-menu fade-up m-0">
                                    {
                                        localStorage.getItem("role") === "Admin" ?
                                            <Link to="/admin" className="dropdown-item">Profile</Link> :
                                            <Link to="/profile" className="dropdown-item">Profile</Link>
                                    }
                                    {
                                        localStorage.getItem("role") === "Buyer" ?
                                            <>
                                                <Link to="/cart" className="dropdown-item">Cart</Link>
                                                <Link to="/checkout" className="dropdown-item">Checkout</Link>
                                            </> : ""
                                    }
                                    <button className="dropdown-item" onClick={logout}>Logout</button>
                                </div>
                            </div>
                            :
                            <Link to="/login" className="btn btn-primary p-4">Login</Link>
                    }
                </div>
            </nav>
            {/* <!-- Navbar End --> */}
        </>
    )
}
