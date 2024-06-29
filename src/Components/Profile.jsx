
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getWishlist, deleteWishlist } from "../Store/ActionCreators/WishlistActionCreators";
import { getCheckout } from "../Store/ActionCreators/CheckoutActionCreators";

export default function Profile() {
    let [user, setUser] = useState({});
    let [wishlist, setWishlist] = useState([]);
    let [orders, setOrders] = useState([]);
    let dispatch = useDispatch();
    let WishlistStateData = useSelector((state) => state.WishlistStateData);
    let CheckoutStateData = useSelector((state) => state.CheckoutStateData);

    function deleteItem(id) {
        dispatch(deleteWishlist({ id: id }));
        getAPIData();
    }

    async function getAPIData() {
        let response = await fetch("/user/" + localStorage.getItem("userid"), {
            method: "get",
            headers: {
                "content-type": "application/json"
            }
        });
        response = await response.json();
        setUser(response);
        dispatch(getWishlist());
        dispatch(getCheckout());
        if (WishlistStateData.length) {
            setWishlist(WishlistStateData.slice(1).filter((x) => x.userid === localStorage.getItem("userid")));
        }
        if (CheckoutStateData.length) {
            setOrders(CheckoutStateData.slice(1).filter((x) => x.userid === localStorage.getItem("userid")));
        }
    }

    useEffect(() => {
        getAPIData();
    }, [WishlistStateData.length, CheckoutStateData.length]);

    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-6">
                        {
                            user.pic ?
                                <img src={`/products/${user.pic}`} height="350px" width="100%" alt="" /> :
                                <img src={`/img/nouser.jpg`} height="350px" width="100%" alt="" />
                        }
                    </div>
                    <div className="col-md-6">
                        <table className='table table-bordered table-striped table-hover'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <th>UserName</th>
                                    <td>{user.username}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{user.phone}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{user.address}</td>
                                </tr>
                                <tr>
                                    <th>PIN</th>
                                    <td>{user.pin}</td>
                                </tr>
                                <tr>
                                    <th>City</th>
                                    <td>{user.city}</td>
                                </tr>
                                <tr>
                                    <th>State</th>
                                    <td>{user.state}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}><Link to="/updateprofile" className='btn btn-primary w-100'>Update</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h5 className='text-center bg-primary text-light p-2'>Wishlist Section</h5>
                {
                    wishlist.length ?
                        <div className='table-responsive'>
                            <table className='table table-bordered table-striped table-hover'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Brand</th>
                                        <th>Color/Size</th>
                                        <th>Price</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        wishlist.map((item, index) => {
                                            return <tr key={index}>
                                                <td>
                                                    <a href={`/products/${item.pic}`} target='_blank' rel="noreferrer">
                                                        <img src={`/products/${item.pic}`} className='rounded-1' height="80px" width="80px" alt="" />
                                                    </a>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.brand}</td>
                                                <td>{item.color}/{item.size}</td>
                                                <td>&#8377;{item.price}</td>
                                                <td><Link to={`/product/${item.productid}`}><i className='fa fa-shopping-cart text-success'></i></Link></td>
                                                <td><button className='btn' onClick={() => deleteItem(item.id)}><i className='fa fa-trash text-danger'></i></button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div> :
                        <div className='text-center my-5'>
                            <p>No Items in Cart</p>
                            <Link to="/shop" className='btn btn-primary'>Shop</Link>
                        </div>
                }
                <h5 className='text-center bg-primary text-light p-2'>Order Section</h5>
                {
                    orders.length ?
                        <>
                            {
                                orders.map((item, index) => {
                                    return (
                                        <div className='row' key={index}>
                                            <div className='col-md-4'>
                                                <div className='table-responsive'>
                                                    <table className='table table-bordered table-striped table-hover'>
                                                        <tbody>
                                                            <tr>
                                                                <th>Order Id</th><td>{item.id}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Order Status</th><td>{item.orderStatus}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Payment Mode</th><td>{item.paymentmode}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Payment Status</th><td>{item.paymentstatus}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>SubTotal</th><td>&#8377;{item.subtotal}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Shipping</th>
                                                                <td>&#8377;{item.shipping}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Total</th>
                                                                <td>&#8377;{item.total}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Date</th>
                                                                <td>{item.date}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </> :
                        <div className='text-center my-5'>
                            <p>No Items in Cart</p>
                            <Link to="/shop" className='btn btn-primary'>Shop</Link>
                        </div>
                }
            </div>
        </>
    );
}