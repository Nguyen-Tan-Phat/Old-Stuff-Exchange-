import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
export const AdminTemplate = (props) => {
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
                    <Link to='/adminbuilding' className="logo">
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
                    <ul className="web-elements" >
                        <li>
                            <div className="user-dp">
                                <Link to='/profile' >
                                    <img alt="" src="images/resources/user.jpg" />
                                    <div className="name">
                                        <h4>{localStorage.getItem('a')}</h4>
                                    </div>
                                </Link>
                            </div>
                        </li>

                        <li>
                            <Link to='/adminbuilding' title="Home" data-toggle="tooltip">
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
                            <Link to='/creatbuilding'
                                className="create"
                                title="Add BuilDing"
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
                                        className="feather feather-plus"
                                    >
                                        <line x1={12} y1={5} x2={12} y2={19} />
                                        <line x1={5} y1={12} x2={19} y2={12} />
                                    </svg>
                                </i>
                            </Link>
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
                                    <a href="profile.html" >
                                        <i className="icofont-user-alt-3" /> Your Profile
                                    </a>
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
                                    <Link to='/' >
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
                        <Link to="/adminbuilding" >
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
                            BuilDing
                        </Link>
                    </li>

                    <li className="menu-item-has-children">
                        <Link to="/adminuser" >
                            <i >
                                <svg
                                    id="team"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-smile"
                                >
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                    <line x1={9} y1={9} x2="9.01" y2={9} />
                                    <line x1={15} y1={9} x2="15.01" y2={9} />
                                </svg>
                            </i>{" "}
                            User
                        </Link>

                    </li>
                    <li className="">
                        <Link to="/adminpost" >
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
                            Products
                        </Link>
                    </li>
                </ul>
            </nav>
            <Component {...propsRoute} />

        </>
    }} />
}