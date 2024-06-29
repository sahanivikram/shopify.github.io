import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
         {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <h4 className="text-light mb-4">Address</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>A-43, Noida Sec-16</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91-8763578998</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>shopify@gmail.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
              
                <div className="col-lg-4 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <Link className="btn btn-link"to="/privacy">Privacy</Link>
                    <Link className="btn btn-link"to="/refund">Refund Policy</Link>
                    <Link className="btn btn-link"to="/terms">Terms & Conditions</Link>
                    <Link className="btn btn-link"to="/about">About</Link>
                    <Link className="btn btn-link"to="/contact">Contact</Link>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h4 className="text-light mb-4">Newsletter</h4>
                    <p>Subscribe Us For Updates</p>
                    <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
                        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#">shopify</a>, All Right Reserved.

                    </div>
                    <div className="col-md-8 text-center text-md-end">
                        <div className="footer-menu">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/shop">Shop</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    </>
  )
}
