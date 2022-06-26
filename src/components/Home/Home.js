import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { quanLyPostAction } from '../../redux/actions/type/quanLyPostAction';

export default function Home () {

    const arrPost = useSelector(rootReducer => rootReducer.quanLyPostReducer.arrPost);
    const dispatch = useDispatch();

    useEffect(() => {
        const action = dispatch(quanLyPostAction);
        dispatch(action)
    })
    return (
        <div>
            <div className="theme-layout">
                <div className="container-fluid">
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
                                Blogs
                            </h1>
                        </div>
                        <div className="col-lg-2">
                            <div className="user-inf">
                                <div className="folowerz">Followers: 204</div>
                                <ul className="stars">
                                    <li>
                                        <i className="icofont-star" />
                                    </li>
                                    <li>
                                        <i className="icofont-star" />
                                    </li>
                                    <li>
                                        <i className="icofont-star" />
                                    </li>
                                    <li>
                                        <i className="icofont-star" />
                                    </li>
                                    <li>
                                        <i className="icofont-star" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div id="page-contents" className="row merged20">
                                        <div className="col-lg-9">
                                            <div className="main-wraper">
                                                <div className="main-title">Blog Posts</div>

                                                {arrPost.map((item, index) => {
                                                    return <div className="blog-posts" key={index}>
                                                        <figure>
                                                            <img
                                                                src="images/resources/blog-list-1.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <div className="blog-post-meta">
                                                            <ul>
                                                                <li>
                                                                    <i className="icofont-read-book" />
                                                                    <a title="Reads" href="#">
                                                                        {item.price}
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <i className="icofont-comment" />
                                                                    <a title="comments" href="#">
                                                                        33
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <h3>{item.title}</h3>
                                                            <p>
                                                                {item.description}
                                                            </p>
                                                            <h4>Price : ${item.price}</h4>
                                                            <span>
                                                                <i className="icofont-clock-time" /> {item.lastUpdatedAt}
                                                            </span>
                                                            <a
                                                                href="blog-detail.html"

                                                                className="button primary "
                                                            >
                                                                Read More
                                                            </a>
                                                            <a
                                                                href=""

                                                                className="button success circle"
                                                            >
                                                                Buy Product
                                                            </a>

                                                        </div>

                                                    </div>
                                                })}

                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <aside className="sidebar static right">
                                                <div className="widget">
                                                    <h4 className="widget-title">Popular Books</h4>
                                                    <div className="popular-book">
                                                        <figure>
                                                            <img src="images/resources/book10.jpg" alt="" />
                                                        </figure>
                                                        <div className="book-about">
                                                            <h6>
                                                                <a href="#" >
                                                                    Vu.js 2 Basics
                                                                </a>
                                                            </h6>
                                                            <span>Richard Ali</span>
                                                            <a href="#" >
                                                                <i className="icofont-book-mark" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="popular-book">
                                                        <figure>
                                                            <img src="images/resources/book9.jpg" alt="" />
                                                        </figure>
                                                        <div className="book-about">
                                                            <h6>
                                                                <a href="#" >
                                                                    Css3 for Bigners
                                                                </a>
                                                            </h6>
                                                            <span>Richard Ali</span>
                                                            <a href="#" >
                                                                <i className="icofont-book-mark" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="popular-book">
                                                        <figure>
                                                            <img src="images/resources/book5.jpg" alt="" />
                                                        </figure>
                                                        <div className="book-about">
                                                            <h6>
                                                                <a href="#" >
                                                                    Technology Wants 2020
                                                                </a>
                                                            </h6>
                                                            <span>Richard Ali</span>
                                                            <a href="#" >
                                                                <i className="icofont-book-mark" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget">
                                                    <h4 className="widget-title">
                                                        Ask Research Question?
                                                    </h4>
                                                    <div className="ask-question">
                                                        <i className="icofont-question-circle" />
                                                        <h6>
                                                            Ask questions in Q&amp;A to get help from experts
                                                            in your field.
                                                        </h6>
                                                        <a className="ask-qst" href="#" >
                                                            Ask a question
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="widget">
                                                    <h4 className="widget-title">
                                                        Explor Events{" "}
                                                        <a className="see-all" href="#" >
                                                            See All
                                                        </a>
                                                    </h4>
                                                    <div className="rec-events bg-purple">
                                                        <i className="icofont-gift" />
                                                        <h6>
                                                            <a>
                                                                BZ University good night event in columbia
                                                            </a>
                                                        </h6>
                                                        <img alt="" src="images/clock.png" />
                                                    </div>
                                                    <div className="rec-events bg-blue">
                                                        <i className="icofont-microphone" />
                                                        <h6>
                                                            <a>
                                                                The 3rd International Conference 2020
                                                            </a>
                                                        </h6>
                                                        <img alt="" src="images/clock.png" />
                                                    </div>
                                                </div>
                                                <div className="widget stick-widget">
                                                    <h4 className="widget-title">Who's follownig</h4>
                                                    <ul className="followers">
                                                        <li>
                                                            <figure>
                                                                <img
                                                                    alt=""
                                                                    src="images/resources/friend-avatar.jpg"
                                                                />
                                                            </figure>
                                                            <div className="friend-meta">
                                                                <h4>
                                                                    <a href="time-line.html">
                                                                        Kelly Bill
                                                                    </a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a className="underline" href="#">
                                                                    Follow
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure>
                                                                <img
                                                                    alt=""
                                                                    src="images/resources/friend-avatar2.jpg"
                                                                />
                                                            </figure>
                                                            <div className="friend-meta">
                                                                <h4>
                                                                    <a href="time-line.html">
                                                                        Issabel
                                                                    </a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a className="underline" href="#">
                                                                    Follow
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure>
                                                                <img
                                                                    alt=""
                                                                    src="images/resources/friend-avatar3.jpg"
                                                                />
                                                            </figure>
                                                            <div className="friend-meta">
                                                                <h4>
                                                                    <a href="time-line.html">
                                                                        Andrew
                                                                    </a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a className="underline" href="#">
                                                                    Follow
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure>
                                                                <img
                                                                    alt=""
                                                                    src="images/resources/friend-avatar4.jpg"
                                                                />
                                                            </figure>
                                                            <div className="friend-meta">
                                                                <h4>
                                                                    <a href="time-line.html">
                                                                        Sophia
                                                                    </a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a className="underline" href="#">
                                                                    Follow
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure>
                                                                <img
                                                                    alt=""
                                                                    src="images/resources/friend-avatar5.jpg"
                                                                />
                                                            </figure>
                                                            <div className="friend-meta">
                                                                <h4>
                                                                    <a href="time-line.html">
                                                                        Allen
                                                                    </a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a className="underline" href="#">
                                                                    Follow
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="bottom-mockup">
                    <img src="images/footer.png" alt="" />
                </figure>
                <div className="bottombar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span>
                                    © copyright All rights reserved by Socimo 2020
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wraper-invite">
                    <div className="popup">
                        <span className="popup-closed">
                            <i className="icofont-close" />
                        </span>
                        <div className="popup-meta">
                            <div className="popup-head">
                                <h5>
                                    <i>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-mail"
                                        >
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </i>{" "}
                                    Invite Colleagues
                                </h5>
                            </div>
                            <div className="invitation-meta">
                                <p>
                                    Enter an email address to invite a colleague or co-author to
                                    join you on socimo. They will receive an email and, in some
                                    cases, up to two reminders.
                                </p>
                                <form method="post" className="c-form">
                                    <input type="text" placeholder="Enter Email" />
                                    <button type="submit" className="main-btn">
                                        Invite
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="popup-wraper">
                    <div className="popup">
                        <span className="popup-closed">
                            <i className="icofont-close" />
                        </span>
                        <div className="popup-meta">
                            <div className="popup-head">
                                <h5>
                                    <i>
                                        <svg
                                            className="feather feather-message-square"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            height={24}
                                            width={24}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                    </i>{" "}
                                    Send Message
                                </h5>
                            </div>
                            <div className="send-message">
                                <form method="post" className="c-form">
                                    <input type="text" placeholder="Enter Name.." />
                                    <input type="text" placeholder="Subject" />
                                    <textarea placeholder="Write Message" defaultValue={""} />
                                    <div className="uploadimage">
                                        <i className="icofont-file-jpg" />
                                        <label className="fileContainer">
                                            <input type="file" />
                                            Attach file
                                        </label>
                                    </div>
                                    <button type="submit" className="main-btn">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="side-slide">
                    <span className="popup-closed">
                        <i className="icofont-close" />
                    </span>
                    <div className="slide-meta">
                        <ul className="nav nav-tabs slide-btns">
                            <li className="nav-item">
                                <a className="active" href="#messages" data-toggle="tab">
                                    Messages
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#notifications" data-toggle="tab">
                                    Notifications
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active fade show" id="messages">
                                <h4>
                                    <i className="icofont-envelope" /> messages
                                </h4>
                                <a
                                    href="#"
                                    className="send-mesg"
                                    title="New Message"
                                    data-toggle="tooltip"
                                >
                                    <i className="icofont-edit" />
                                </a>
                                <ul className="new-messages">
                                    <li>
                                        <figure>
                                            <img src="images/resources/user1.jpg" alt="" />
                                        </figure>
                                        <div className="mesg-info">
                                            <span>Ibrahim Ahmed</span>
                                            <a href="#" >
                                                Helo dear i wanna talk to you
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="images/resources/user2.jpg" alt="" />
                                        </figure>
                                        <div className="mesg-info">
                                            <span>Fatima J.</span>
                                            <a href="#" >
                                                Helo dear i wanna talk to you
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="images/resources/user3.jpg" alt="" />
                                        </figure>
                                        <div className="mesg-info">
                                            <span>Fawad Ahmed</span>
                                            <a href="#" >
                                                Helo dear i wanna talk to you
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="images/resources/user4.jpg" alt="" />
                                        </figure>
                                        <div className="mesg-info">
                                            <span>Saim Turan</span>
                                            <a href="#" >
                                                Helo dear i wanna talk to you
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="images/resources/user5.jpg" alt="" />
                                        </figure>
                                        <div className="mesg-info">
                                            <span>Alis wells</span>
                                            <a href="#" >
                                                Helo dear i wanna talk to you
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                                <a href="#" className="main-btn" data-ripple>
                                    view all
                                </a>
                            </div>
                            <div className="tab-pane fade" id="notifications">
                                <h4>
                                    <i className="icofont-bell-alt" /> notifications
                                </h4>
                                <ul className="notificationz">
                                    <li>
                                        <figure>
                                            <img src="images/resources/user5.jpg" alt="" />
                                        </figure>
                                        <div className="mesg-info">
                                            <span>Alis wells</span>
                                            <a href="#" >
                                                recommend your post
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="images/resources/user4.jpg" alt="" />
                                        </figure>
                                        <div className="mesg-info">
                                            <span>Alis wells</span>
                                            <a href="#" >
                                                share your post <strong>a good time today!</strong>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="images/resources/user2.jpg" alt="" />
                                        </figure>
                                        <div className="mesg-info">
                                            <span>Alis wells</span>
                                            <a href="#" >
                                                recommend your post
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="images/resources/user1.jpg" alt="" />
                                        </figure>
                                        <div className="mesg-info">
                                            <span>Alis wells</span>
                                            <a href="#" >
                                                share your post <strong>a good time today!</strong>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="images/resources/user3.jpg" alt="" />
                                        </figure>
                                        <div className="mesg-info">
                                            <span>Alis wells</span>
                                            <a href="#" >
                                                recommend your post
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                                <a href="#" className="main-btn" data-ripple>
                                    view all
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div >

    )
}

