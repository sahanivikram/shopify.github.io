import React from 'react'
import Testimonial from './Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getProduct } from "../Store/ActionCreators/ProductActionCreators"
import { Link } from 'react-router-dom'
export default function Home() {
    let dispatch = useDispatch()
    let [data, setData] = useState([])
    let ProductStateData = useSelector((state) => state.ProductStateData)

    function getAPIData() {
        dispatch(getProduct())
        if (ProductStateData.length) {
            setData(ProductStateData.slice(1).reverse().slice(0, 8))
        }
    }
    useEffect(() => {
        getAPIData()
    }, [ProductStateData.length])


    return (
        <>
            {/* <!-- Carousel Start --> */}
            <div className="container-fluid p-0 mb-5">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/carousel-bg-1.jpg" height="500px" width="100%" alt="Image" />
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-white text-uppercase mb-3 animated slideInDown"></h6>
                                            <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Summer Fashion</h1>
                                            <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src="img/carousel-1.png" style={{ height: "300px", width: "100%" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-bg-3.jpg" height="500px" width="100%" alt="Image" />
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-white text-uppercase mb-3 animated slideInDown"></h6>
                                            <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Fashion as per your Need</h1>
                                            <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src="img/carousel-3.png" style={{ height: "300px", width: "100%" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-bg-2.jpg" height="500px" width="100%" alt="Image" />
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-white text-uppercase mb-3 animated slideInDown"></h6>
                                            <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Best Quality Products</h1>
                                            <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Shop<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src="img/carousel-2.png" style={{ height: "300px", width: "100%" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}


            {/* <!--  --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="d-flex py-5 px-4">
                                <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Quality Products</h5>
                                    <a className="text-secondary border-bottom" href="">Shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="d-flex bg-light py-5 px-4">
                                <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Best Return Policy</h5>
                                    <a className="text-secondary border-bottom" href="">Shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="d-flex py-5 px-4">
                                <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Best Price</h5>
                                    <a className="text-secondary border-bottom" href="">Shop</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- --> */}





            {/* <!-- Fact Start --> */}
            <div className="container-fluid fact bg-dark my-5 py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4  text-center wow fadeIn" data-wow-delay="0.1s">
                            <i className="fa fa-check fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2" data-toggle="counter-up">3000+</h2>
                            <p className="text-white mb-0">Customers</p>
                        </div>
                        <div className="col-md-4  text-center wow fadeIn" data-wow-delay="0.3s">
                            <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2" data-toggle="counter-up">1000+</h2>
                            <p className="text-white mb-0">Products</p>
                        </div>
                        <div className="col-md-4  text-center wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-users fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2" data-toggle="counter-up">50+</h2>
                            <p className="text-white mb-0">Category</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- Fact End --> */}






            {/* <!-- Products --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-primary text-uppercase">Latest Products </h6>
                        <h1 className="mb-5">Fresh Arrivals</h1>
                    </div>
                    <div className="row g-4">
                        {
                            data.map((item, index) => {
                                return <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">

                                    <div className="team-item" >
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src={`products/${item.pic1}`} alt="" style={{"width":"100%","height":"200px"}} />
                                            <div className="team-overlay position-absolute start-0 top-0 w-100 h-100 " >
                                            <img className="img-fluid team-overlay position-absolute start-0 top-0 w-100 h-100" src={`products/${item.pic2}`}  alt=""  style={{"width":"100%","height":"200px"}}/>

                                                <Link className="btn btn-square mx-1 text-light position-absolute bg-primary w-100" to={`products/${item.id}` }><i className="fa fa-shopping-cart"></i>&emsp; Add to Cart</Link>

                                            </div>
                                        </div>
                                        <div className="bg-light text-center p-4">
                                            <h5 className="fw-bold mb-0">{item.name}</h5>
                                            <small><del className='text-danger'>&#8377; {item.baseprice}</del>  &#8377; {item.finalprice}</small>
                                        </div>
                                    </div>
                                    </div>
                                
                        })
                    }
                                </div>
                
            </div>
                </div>
    
            {/* <!-- Products End --> */}
            <Testimonial />


        </>
    )
}
