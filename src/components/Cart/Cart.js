import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart () {
    return (
        <div>
            <div className="theme-layout">
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="sidemenu">
                                <i>
                                    <svg
                                        id="side-menu"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={26}
                                        height={26}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-menu"
                                    >
                                        <line x1={3} y1={12} x2={21} y2={12} />
                                        <line x1={3} y1={6} x2={21} y2={6} />
                                        <line x1={3} y1={18} x2={21} y2={18} />
                                    </svg>
                                </i>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h1
                                style={{
                                    textAlign: "center",
                                }}
                            >
                            </h1>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div id="page-contents" className="row merged20">
                                        <div className="col-lg-12">
                                            <div className="main-wraper">
                                                <h4 className="main-title">Product Cart</h4>
                                                <div className="cart-table">
                                                    <table className="table table-responsive-md">
                                                        <thead>
                                                            <tr>
                                                                <th>Product</th>
                                                                <th>Price</th>
                                                                <th>Qty</th>
                                                                <th>Subtotal</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="edit-cart"><i className="">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></i></div>
                                                                    <figure><img src="images/resources/cart1.jpg" alt="" /></figure>
                                                                    <div className="item-meta">
                                                                        <h6>Holly Bible Book</h6>
                                                                        <span>by: Gray David</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span>29.99</span>
                                                                </td>
                                                                <td>
                                                                    <span>1</span>
                                                                </td>
                                                                <td>
                                                                    <span>29.99</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="edit-cart"><i className="">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></i></div>
                                                                    <figure><img src="images/resources/cart2.jpg" alt="" /></figure>
                                                                    <div className="item-meta">
                                                                        <h6>Basic Vu.js Online Course</h6>
                                                                        <span>by: Gray David</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span>29.99</span>
                                                                </td>
                                                                <td>
                                                                    <span>1</span>
                                                                </td>
                                                                <td>
                                                                    <span>29.99</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="edit-cart"><i className="">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></i></div>
                                                                    <figure><img src="images/resources/cart3.jpg" alt="" /></figure>
                                                                    <div className="item-meta">
                                                                        <h6>Advanced Css3 Pure Book</h6>
                                                                        <span>by: Gray David</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span>29.99</span>
                                                                </td>
                                                                <td>
                                                                    <span>1</span>
                                                                </td>
                                                                <td>
                                                                    <span>29.99</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="cart-update">
                                                        <Link to="/home" title="">Continue Shopping</Link>
                                                        <a href="#" title="">Update Shopping cart</a>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                    <div className="cart-box">
                                                        <span>Doscount Code</span>
                                                        <form method="post" className="c-form">
                                                            <input type="text" placeholder="Enter Your Coupon Code" />
                                                            <button className="button primary circle" type="submit">Apply</button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                    <div className="cart-box">
                                                        <span>Estimate Shipping and Tax</span>
                                                        <form method="post" className="c-form">
                                                            <input type="text" placeholder="Country" />
                                                            <button className="button primary circle" type="submit">Get A Quote</button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                    <div className="cart-box">
                                                        <span>Your Order Total</span>
                                                        <ul>
                                                            <li><span>Sub Total :</span> <i>29.99</i></li>
                                                            <li><span>Discount :</span> <i>2.00</i></li>
                                                            <li><span>Shipping :</span> <i>8.00</i></li>
                                                            <li><span>Grand Total :</span> <i>35.99</i></li>
                                                        </ul>
                                                        <a className="main-btn" href="#" title="">Proceed To Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <div className="gap" style={{ backgroundColor: 'rgb(0,0,0,0.3)' }}>

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="web-info">
                                        <a href="#" title=""><img src="images/logo.png" alt="" /></a>
                                        <p>Subscribe our newsletter for getting notifications and alerts</p>
                                        <div className="contact-little">
                                            <span><i className="icofont-phone-circle"></i> +1-235-099-34</span>
                                            <span><i className="icofont-email"></i> info@akedmic.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6">
                                    <div className="widget">
                                        <div className="widget-title">
                                            <h4>Company</h4>
                                        </div>
                                        <ul className="quick-links">
                                            <li><a href="#" title="">About Us</a></li>
                                            <li><a href="#" title="">Career</a></li>
                                            <li><a href="#" title="">Privacy</a></li>
                                            <li><a href="#" title="">Terms</a></li>
                                            <li><a href="#" title="">FAQ</a></li>
                                            <li><a href="#" title="">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-6">
                                    <div className="widget">
                                        <div className="widget-title">
                                            <h4>Quick Links</h4>
                                        </div>
                                        <ul className="quick-links">
                                            <li><a href="#" title="">Product</a></li>
                                            <li><a href="#" title="">Market</a></li>
                                            <li><a href="#" title="">Courses</a></li>
                                            <li><a href="#" title="">Services</a></li>
                                            <li><a href="#" title="">Enterprise</a></li>
                                            <li><a href="#" title="">Sitemap</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <div className="widget">
                                        <div className="widget-title">
                                            <h4>Follow Us</h4>
                                        </div>
                                        <ul className="quick-links">
                                            <li><a href="#" title=""><i className="icofont-facebook"></i>facebook</a></li>
                                            <li><a href="#" title=""><i className="icofont-twitter"></i>twitter</a></li>
                                            <li><a href="#" title=""><i className="icofont-instagram"></i>instagram</a></li>
                                            <li><a href="#" title=""><i className="icofont-google-plus"></i>google +</a></li>
                                            <li><a href="#" title=""><i className="icofont-whatsapp"></i>whatsapp</a></li>
                                            <li><a href="#" title=""><i className="icofont-reddit"></i>reddit</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget">
                                        <div className="widget-title">
                                            <h4>Newsletter</h4>
                                        </div>
                                        <div className="news-lettr">
                                            <form className="newsletter">
                                                <input type="text" placeholder="Email Address" />
                                                <button type="submit"><i className="icofont-paper-plane"></i></button>
                                            </form>
                                            <p>
                                                it is a long established fact that a reader will be distracted by.
                                            </p>
                                            <h5>Download App</h5>
                                            <a href="#" title=""><img src="images/android.png" alt="" /></a>
                                            <a href="#" title=""><img src="images/apple.png" alt="" /></a>
                                            <a href="#" title=""><img src="images/windows.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottombar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="">&copy; copyright All rights reserved by Socimo 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
