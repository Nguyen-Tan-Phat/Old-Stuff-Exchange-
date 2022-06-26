import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
export const UserTemplate = (props) => {
    const { Component, ...restParam } = props;

    return <Route {...restParam} render={(propsRoute) => {
        return <>

            <div className="responsive-header">
                <Link to='/home' className="logo res">
                    <img src="images/logo.png" alt="" />
                    <span>Old-Stuff-Exchange</span>
                </Link>
                <div className="user-avatar mobile">
                    <a href="profile.html" title="View Profile">
                        <img alt="" src="images/resources/user.jpg" />
                    </a>
                    <div className="name">
                        <h4>{localStorage.getItem('a')}</h4>
                        <span>Ontario, Canada</span>
                    </div>
                </div>
                <div className="right-compact">
                    <div className="res-search">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-search"
                            >
                                <circle cx={11} cy={11} r={8} />
                                <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="restop-search">
                    <span className="hide-search">
                        <i className="icofont-close-circled" />
                    </span>
                    <form method="post">
                        <input type="text" placeholder="Search..." />
                    </form>
                </div>
            </div>
            {/* responsive header */}
            <header className="">
                <div className="topbar stick">
                    <Link to='/home' className="logo">
                        <img src="images/logo.png" alt="" />
                        <span>Old-Stuff-Exchange</span>
                    </Link>
                    <div className="searches">
                        <form method="post">
                            <input type="text" placeholder="Search..." />
                            <button type="submit">
                                <i className="icofont-search" />
                            </button>
                            <span className="cancel-search">
                                <i className="icofont-close" />
                            </span>
                            <div className="recent-search">
                                <h4 className="recent-searches">Your's Recent Search</h4>
                            </div>
                        </form>
                    </div>
                    <ul className="web-elements">
                        <li>
                            <div className="user-dp">
                                <Link to="/profile" >
                                    <img alt="" src="images/resources/user.jpg" />
                                    <div className="name">
                                        <h4>{localStorage.getItem('a')}</h4>
                                    </div>
                                </Link>
                            </div>
                        </li>

                        <li>
                            <Link to="/home" title="Home" data-toggle="tooltip">
                                <i>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-home"
                                    >
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                </i>
                            </Link>
                        </li>
                        <li>
                            <a
                                className="mesg-notif"
                                href="#"
                                title="Messages"
                                data-toggle="tooltip"
                            >
                                <i>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-message-square"
                                    >
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    </svg>
                                </i>
                            </a>
                            <span />
                        </li>
                        <li>
                            <a
                                className="mesg-notif"
                                href="#"
                                title="Notifications"
                                data-toggle="tooltip"
                            >
                                <i>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-bell"
                                    >
                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                    </svg>
                                </i>
                            </a>
                            <span />
                        </li>

                        <li>
                            <a href="#" >
                                <i>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-grid"
                                    >
                                        <rect x={3} y={3} width={7} height={7} />
                                        <rect x={14} y={3} width={7} height={7} />
                                        <rect x={14} y={14} width={7} height={7} />
                                        <rect x={3} y={14} width={7} height={7} />
                                    </svg>
                                </i>
                            </a>
                            <ul className="dropdown">
                                <li>
                                    <Link to="/profile" >
                                        <i className="icofont-user-alt-3" /> Your Profile
                                    </Link>
                                </li>
                                <li>
                                    <a className="invite-new" href="#" >
                                        <i className="icofont-brand-slideshare" /> Invite Collegue
                                    </a>
                                </li>
                                <li>
                                    <a href="pay-out.html" >
                                        <i className="icofont-price" /> Payout
                                    </a>
                                </li>
                                <li>
                                    <a href="price-plan.html" >
                                        <i className="icofont-flash" /> Upgrade
                                    </a>
                                </li>
                                <li>
                                    <a href="help-faq.html" >
                                        <i className="icofont-question-circle" /> Help
                                    </a>
                                </li>
                                <li>
                                    <a href="settings.html" >
                                        <i className="icofont-gear" /> Setting
                                    </a>
                                </li>
                                <li>
                                    <a href="privacy-n-policy.html" >
                                        <i className="icofont-notepad" /> Privacy
                                    </a>
                                </li>
                                <li>
                                    <a className="dark-mod" href="#" >
                                        <i className="icofont-moon" /> Dark Mode
                                    </a>
                                </li>
                                <li className="logout">
                                    <Link to="/login" >
                                        <i className="icofont-power" /> Logout
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
            {/* header */}
            <nav className="sidebar">
                <ul className="menu-slide">
                    <li className="active menu-item-has-children">
                        <Link to="/home" >
                            <i>
                                <svg
                                    id="icon-home"
                                    className="feather feather-home"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    height={14}
                                    width={14}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </i>{" "}
                            Home
                        </Link>
                    </li>


                    <li className="">
                        <Link to="/cart" >
                            <i >
                                <svg
                                    id="ab5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={14}
                                    height={14}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    className="feather feather-shopping-bag"
                                >
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                </svg></i>{" "}
                            Cart
                        </Link>
                    </li>

                    <li>
                        <Link to="/profile" >
                            <i className="">
                                <svg className="feather feather-users" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle r="4" cy="7" cx="9" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </i>

                            Your Profile
                        </Link>

                    </li>
                    <li className="">
                        <Link to='/login'>
                            <i className="">
                                <svg id="ab9" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></i> Logout
                        </Link>
                    </li>
                </ul>
            </nav >
            <Component {...propsRoute} />
            <div className="cart-product">
                <Link to='/cart' title="View Cart" data-toggle="tooltip">
                    <i className="icofont-cart-alt" />
                </Link>
                <span>03</span>
            </div>

            <div className="chat-live">
                <a
                    className="chat-btn"
                    href="#"
                    title="Start Live Chat"
                    data-toggle="tooltip"
                >
                    <i className="icofont-facebook-messenger" />
                </a>
                <span>07</span>
            </div>

            <div className="chat-box">
                <div className="chat-head">
                    <h4>New Messages</h4>
                    <span className="clozed">
                        <i className="icofont-close-circled" />
                    </span>
                    <form method="post">
                        <input type="text" placeholder="To.." />
                    </form>
                </div>
            </div >
        </>
    }} />
}