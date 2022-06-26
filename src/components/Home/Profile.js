import React from 'react'

export default function() {
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
                <div className="gap no-gap">
                    <div className="top-area mate-black low-opacity">
                        <div className="bg-image" style={{ backgroundImage: ' url(images/resources/top-bg.jpg)' }}></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="post-subject">
                                        <div className="university-tag">
                                            <figure><img src="images/resources/user.jpg" alt="" /></figure>
                                            <div className="uni-name">
                                                <h4>{localStorage.getItem('a')}</h4>
                                                <span>@Georgofficial</span>
                                            </div>
                                            <ul className="sharing-options">
                                                <li><a title="Invite Colleagues" href="#" data-toggle="tooltip"><i className="icofont-id-card"></i></a> </li>
                                                <li><a title="Follow" href="#" data-toggle="tooltip"><i className="icofont-star"></i></a> </li>
                                                <li><a title="Share" href="#" data-toggle="tooltip"><i className="icofont-share-alt"></i></a> </li>
                                            </ul>
                                            <a data-ripple="" title="" href="#" className="invite">Invite Colleagues</a>
                                        </div>

                                        <ul className="nav nav-tabs post-detail-btn">
                                            <li className="nav-item"><a className="active" href="#timeline" data-toggle="tab">Timeline</a></li>
                                            <li className="nav-item"><a className="" href="#followers" data-toggle="tab">Followers</a><span>23</span></li>
                                            <li className="nav-item"><a className="" href="#follow" data-toggle="tab">Follow</a><span>100</span></li>
                                            <li className="nav-item"><a className="" href="#about" data-toggle="tab">About</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
                                            <div className="tab-content">
                                                <div className="tab-pane fade active show" id="timeline" >
                                                    <div className="main-wraper">
                                                        <span className="new-title">Create New Post</span>
                                                        <div className="new-post">

                                                            <form method="post">
                                                                <i className="icofont-pen-alt-1 " style={{ position: 'absolute', top: '20px', zIndex: 1000 }}></i>
                                                                <input type="text" placeholder="Create New Post" style={{ position: 'relative' }} />



                                                                <button className='btn btn-outline-primary mt-4' style={{ position: 'absolute', right: '10px', top: '30px' }}>Đăng</button>

                                                            </form>
                                                            <ul className="upload-media">
                                                                <li>
                                                                    <i><img src="images/image.png" alt="" /></i>
                                                                    <span>Photo/Video</span>
                                                                </li>
                                                                <li>
                                                                    <i><img src="images/activity.png" alt="" /></i>
                                                                    <span>Feeling/Activity</span>
                                                                </li>
                                                                <li>
                                                                    <i><img src="images/live-stream.png" alt="" /></i>
                                                                    <span>Live Stream</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="main-wraper">
                                                        <div className="user-post">
                                                            <div className="friend-info">
                                                                <figure>
                                                                    <img alt="" src="images/resources/user1.jpg" />
                                                                </figure>
                                                                <div className="friend-name">
                                                                    <div className="more">
                                                                        <div className="more-post-optns">
                                                                            <i className="">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></i>
                                                                            <ul>
                                                                                <li>
                                                                                    <i className="icofont-pen-alt-1"></i>Edit Post
                                                                                    <span>Edit This Post within a Hour</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="icofont-ban"></i>Hide Post
                                                                                    <span>Hide This Post</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="icofont-ui-delete"></i>Delete Post
                                                                                    <span>If inappropriate Post By Mistake</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="icofont-flag"></i>Report
                                                                                    <span>Inappropriate content</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <ins><a title="" href="time-line.html">Jack Carter</a> Share Post</ins>
                                                                    <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
                                                                </div>
                                                                <div className="post-meta">
                                                                    <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
                                                                    <p>
                                                                        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
                                                                    </p>
                                                                    <div className="we-video-info">
                                                                        <ul>
                                                                            <li>
                                                                                <span title="views" className="views">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></i>
                                                                                    <ins>1.2k</ins>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="Comments" className="Recommend">
                                                                                    <i>
                                                                                        <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                    <ins>54</ins>
                                                                                </span>

                                                                            </li>
                                                                            <li>
                                                                                <span title="follow" className="Follow">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></i>
                                                                                    <ins>5k</ins>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span className="share-pst" title="Share">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></i>
                                                                                    <ins>205</ins>
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                        <a href="post-detail.html" title="" className="reply">Reply <i className="icofont-reply"></i></a>
                                                                    </div>
                                                                    <div className="stat-tools">
                                                                        <div className="box">
                                                                            <div className="Like"><a className="Like__link"><i className="icofont-like"></i> Like</a>
                                                                                <div className="Emojis">
                                                                                    <div className="Emoji Emoji--like">
                                                                                        <div className="icon icon--like"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--love">
                                                                                        <div className="icon icon--heart"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--haha">
                                                                                        <div className="icon icon--haha"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--wow">
                                                                                        <div className="icon icon--wow"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--sad">
                                                                                        <div className="icon icon--sad"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--angry">
                                                                                        <div className="icon icon--angry"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="box">
                                                                            <div className="Emojis">
                                                                                <div className="Emoji Emoji--like">
                                                                                    <div className="icon icon--like"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--love">
                                                                                    <div className="icon icon--heart"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--haha">
                                                                                    <div className="icon icon--haha"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--wow">
                                                                                    <div className="icon icon--wow"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--sad">
                                                                                    <div className="icon icon--sad"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--angry">
                                                                                    <div className="icon icon--angry"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <a title="" href="#" className="comment-to"><i className="icofont-comment"></i> Comment</a>
                                                                        <a title="" href="#" className="share-to"><i className="icofont-share-alt"></i> Share</a>
                                                                        <div className="emoji-state">
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/thumb.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/thumb.png" /> Likes</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Jhon Doe</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Sarah K.</li>
                                                                                        <li><span>20+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/heart.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/heart.png" /> Love</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Jhon Doe</li>
                                                                                        <li><span>10+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/smile.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/smile.png" /> Happy</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Sarah K.</li>
                                                                                        <li>Jhon Doe</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li><span>100+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/weep.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/weep.png" /> Dislike</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Danial Carbal</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Sarah K.</li>
                                                                                        <li><span>15+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <p>10+</p>
                                                                        </div>
                                                                        <div className="new-comment" style={{ display: 'none' }}>
                                                                            <form method="post">
                                                                                <input type="text" placeholder="write comment" />
                                                                                <button type="submit"><i className="icofont-paper-plane"></i></button>
                                                                            </form>
                                                                            <div className="comments-area">
                                                                                <ul>
                                                                                    <li>
                                                                                        <figure><img alt="" src="images/resources/user1.jpg" /></figure>
                                                                                        <div className="commenter">
                                                                                            <h5><a title="" href="#">Jack Carter</a></h5>
                                                                                            <span>2 hours ago</span>
                                                                                            <p>
                                                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                            </p>
                                                                                            <span>you can view the more detail via link</span>
                                                                                            <a title="" href="https://www.youtube.com/watch?v=HpZgwHU1GcI" target="_blank">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                        </div>
                                                                                        <a title="Like" href="#"><i className="icofont-heart"></i></a>
                                                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply"></i></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <figure><img alt="" src="images/resources/user2.jpg" /></figure>
                                                                                        <div className="commenter">
                                                                                            <h5><a title="" href="#">Ching xang</a></h5>
                                                                                            <span>2 hours ago</span>
                                                                                            <p>
                                                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                            </p>
                                                                                        </div>
                                                                                        <a title="Like" href="#"><i className="icofont-heart"></i></a>
                                                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply"></i></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-wraper">
                                                        <div className="user-post">
                                                            <div className="friend-info">
                                                                <figure>
                                                                    <img alt="" src="images/resources/user2.jpg" />
                                                                </figure>
                                                                <div className="friend-name">
                                                                    <div className="more">
                                                                        <div className="more-post-optns">
                                                                            <i className="">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></i>
                                                                            <ul>
                                                                                <li>
                                                                                    <i className="icofont-pen-alt-1"></i>Edit Post
                                                                                    <span>Edit This Post within a Hour</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="icofont-ban"></i>Hide Post
                                                                                    <span>Hide This Post</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="icofont-ui-delete"></i>Delete Post
                                                                                    <span>If inappropriate Post By Mistake</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="icofont-flag"></i>Report
                                                                                    <span>Inappropriate content</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <ins><a title="" href="time-line.html">Maria k.</a> Premium Product</ins>
                                                                    <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
                                                                </div>
                                                                <div className="post-meta">
                                                                    <figure className="premium-post"><img src="images/resources/book5.jpg" alt="" /></figure>
                                                                    <div className="premium">
                                                                        <a href="book-detail.html" className="post-title">Technicial words 2020 Book world</a>
                                                                        <p>
                                                                            Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
                                                                        </p>
                                                                        <a className="main-btn purchase-btn" title="" href="book-detail.html"><i className="icofont-cart-alt"></i> Buy Now</a>
                                                                    </div>
                                                                    <div className="we-video-info">
                                                                        <ul>
                                                                            <li>
                                                                                <span title="views" className="views">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></i>
                                                                                    <ins>1.2k</ins>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="Comments" className="Recommend">
                                                                                    <i>
                                                                                        <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                    <ins>54</ins>
                                                                                </span>

                                                                            </li>
                                                                            <li>
                                                                                <span title="follow" className="Follow">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></i>
                                                                                    <ins>5k</ins>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span className="share-pst" title="Share">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></i>
                                                                                    <ins>205</ins>
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                        <a href="post-detail.html" title="" className="reply">Reply <i className="icofont-reply"></i></a>
                                                                    </div>
                                                                    <div className="stat-tools">
                                                                        <div className="box">
                                                                            <div className="Like"><a className="Like__link"><i className="icofont-like"></i> Like</a>
                                                                                <div className="Emojis">
                                                                                    <div className="Emoji Emoji--like">
                                                                                        <div className="icon icon--like"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--love">
                                                                                        <div className="icon icon--heart"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--haha">
                                                                                        <div className="icon icon--haha"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--wow">
                                                                                        <div className="icon icon--wow"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--sad">
                                                                                        <div className="icon icon--sad"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--angry">
                                                                                        <div className="icon icon--angry"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="box">
                                                                            <div className="Emojis">
                                                                                <div className="Emoji Emoji--like">
                                                                                    <div className="icon icon--like"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--love">
                                                                                    <div className="icon icon--heart"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--haha">
                                                                                    <div className="icon icon--haha"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--wow">
                                                                                    <div className="icon icon--wow"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--sad">
                                                                                    <div className="icon icon--sad"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--angry">
                                                                                    <div className="icon icon--angry"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <a title="" href="#" className="comment-to"><i className="icofont-comment"></i> Comment</a>
                                                                        <a title="" href="#" className="share-to"><i className="icofont-share-alt"></i> Share</a>
                                                                        <div className="emoji-state">
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/thumb.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/thumb.png" /> Likes</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Jhon Doe</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Sarah K.</li>
                                                                                        <li><span>20+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/heart.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/heart.png" /> Love</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Jhon Doe</li>
                                                                                        <li><span>10+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/smile.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/smile.png" /> Happy</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Sarah K.</li>
                                                                                        <li>Jhon Doe</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li><span>100+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/weep.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/weep.png" /> Dislike</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Danial Carbal</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Sarah K.</li>
                                                                                        <li><span>15+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <p>10+</p>
                                                                        </div>
                                                                        <div className="new-comment" style={{ display: 'block' }}>
                                                                            <form method="post">
                                                                                <input type="text" placeholder="write comment" />
                                                                                <button type="submit"><i className="icofont-paper-plane"></i></button>
                                                                            </form>
                                                                            <div className="comments-area">
                                                                                <ul>
                                                                                    <li>
                                                                                        <figure><img alt="" src="images/resources/user1.jpg" /></figure>
                                                                                        <div className="commenter">
                                                                                            <h5><a title="" href="#">Jack Carter</a></h5>
                                                                                            <span>2 hours ago</span>
                                                                                            <p>
                                                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                            </p>
                                                                                            <span>you can view the more detail via link</span>
                                                                                            <a title="" href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                        </div>
                                                                                        <a title="Like" href="#"><i className="icofont-heart"></i></a>
                                                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply"></i></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <figure><img alt="" src="images/resources/user2.jpg" /></figure>
                                                                                        <div className="commenter">
                                                                                            <h5><a title="" href="#">Ching xang</a></h5>
                                                                                            <span>2 hours ago</span>
                                                                                            <p>
                                                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                            </p>
                                                                                        </div>
                                                                                        <a title="Like" href="#"><i className="icofont-heart"></i></a>
                                                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply"></i></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="main-wraper">
                                                        <div className="wraper-title">
                                                            <span><i className="icofont-video-alt"></i> Videos Play List</span>
                                                            <a href="videos.html" title="">See all Videos</a>
                                                        </div>
                                                        <div className="videos-caro">
                                                            <div className="item-video" data-merge="2">
                                                                <a className="owl-video" href="https://www.youtube.com/watch?v=8iZTb9NWbz8"></a>
                                                                <div className="posted-user">
                                                                    <img src="images/resources/user4.jpg" alt="" />
                                                                    <span>Frank J.</span>
                                                                </div>
                                                                <div className="vid-info">
                                                                    <span>1 year ago</span>
                                                                    <span><i className="icofont-eye-open"></i> 3.1k</span>
                                                                </div>
                                                            </div>
                                                            <div className="item-video" data-merge="2">
                                                                <a className="owl-video" href="https://www.youtube.com/watch?v=8itUNRIWVIs"></a>
                                                                <div className="posted-user">
                                                                    <img src="images/resources/user2.jpg" alt="" />
                                                                    <span>Maria K.</span>
                                                                </div>
                                                                <div className="vid-info">
                                                                    <span>2 weeks ago</span>
                                                                    <span><i className="icofont-eye-open"></i> 1.1k</span>
                                                                </div>
                                                            </div>
                                                            <div className="item-video" data-merge="2">
                                                                <a className="owl-video" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ"></a>
                                                                <div className="posted-user">
                                                                    <img src="images/resources/user1.jpg" alt="" />
                                                                    <span>Jack Carter</span>
                                                                </div>
                                                                <div className="vid-info">
                                                                    <span>4 weeks ago</span>
                                                                    <span><i className="icofont-eye-open"></i> 20k</span>
                                                                </div>
                                                            </div>
                                                            <div className="item-video" data-merge="2">
                                                                <a className="owl-video" href="https://www.youtube.com/watch?v=WNeLUngb-Xg"></a>
                                                                <div className="posted-user">
                                                                    <img src="images/resources/user3.jpg" alt="" />
                                                                    <span>Fawad Jan</span>
                                                                </div>
                                                                <div className="vid-info">
                                                                    <span>1 Month ago</span>
                                                                    <span><i className="icofont-eye-open"></i> 8k</span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="main-wraper">
                                                        <div className="user-post">
                                                            <div className="friend-info">
                                                                <figure>
                                                                    <img alt="" src="images/resources/user3.jpg" />
                                                                </figure>
                                                                <div className="friend-name">
                                                                    <div className="more">
                                                                        <div className="more-post-optns">
                                                                            <i className="">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></i>
                                                                            <ul>
                                                                                <li>
                                                                                    <i className="icofont-pen-alt-1"></i>Edit Post
                                                                                    <span>Edit This Post within a Hour</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="icofont-ban"></i>Hide Post
                                                                                    <span>Hide This Post</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="icofont-ui-delete"></i>Delete Post
                                                                                    <span>If inappropriate Post By Mistake</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="icofont-flag"></i>Report
                                                                                    <span>Inappropriate content</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <ins><a title="" href="time-line.html">Turgut Alp</a> Create Post</ins>
                                                                    <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
                                                                </div>
                                                                <div className="post-meta">
                                                                    <figure>
                                                                        <a data-toggle="modal" data-target="#img-comt" href="images/resources/album1.jpg">
                                                                            <img src="images/resources/study.jpg" alt="" />
                                                                        </a>
                                                                    </figure>
                                                                    <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
                                                                    <p>
                                                                        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
                                                                    </p>
                                                                    <div className="we-video-info">
                                                                        <ul>
                                                                            <li>
                                                                                <span title="views" className="views">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></i>
                                                                                    <ins>1.2k</ins>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="Comments" className="Recommend">
                                                                                    <i>
                                                                                        <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                    <ins>54</ins>
                                                                                </span>

                                                                            </li>
                                                                            <li>
                                                                                <span title="follow" className="Follow">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></i>
                                                                                    <ins>5k</ins>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span className="share-pst" title="Share">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></i>
                                                                                    <ins>205</ins>
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                        <a href="post-detail.html" title="" className="reply">Reply <i className="icofont-reply"></i></a>
                                                                    </div>
                                                                    <div className="stat-tools">
                                                                        <div className="box">
                                                                            <div className="Like"><a className="Like__link"><i className="icofont-like"></i> Like</a>
                                                                                <div className="Emojis">
                                                                                    <div className="Emoji Emoji--like">
                                                                                        <div className="icon icon--like"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--love">
                                                                                        <div className="icon icon--heart"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--haha">
                                                                                        <div className="icon icon--haha"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--wow">
                                                                                        <div className="icon icon--wow"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--sad">
                                                                                        <div className="icon icon--sad"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--angry">
                                                                                        <div className="icon icon--angry"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="box">
                                                                            <div className="Emojis">
                                                                                <div className="Emoji Emoji--like">
                                                                                    <div className="icon icon--like"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--love">
                                                                                    <div className="icon icon--heart"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--haha">
                                                                                    <div className="icon icon--haha"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--wow">
                                                                                    <div className="icon icon--wow"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--sad">
                                                                                    <div className="icon icon--sad"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--angry">
                                                                                    <div className="icon icon--angry"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <a title="" href="#" className="comment-to"><i className="icofont-comment"></i> Comment</a>
                                                                        <a title="" href="#" className="share-to"><i className="icofont-share-alt"></i> Share</a>
                                                                        <div className="emoji-state">
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/thumb.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/thumb.png" /> Likes</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Jhon Doe</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Sarah K.</li>
                                                                                        <li><span>20+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/heart.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/heart.png" /> Love</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Jhon Doe</li>
                                                                                        <li><span>10+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/smile.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/smile.png" /> Happy</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Sarah K.</li>
                                                                                        <li>Jhon Doe</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li><span>100+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/weep.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/weep.png" /> Dislike</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Danial Carbal</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Sarah K.</li>
                                                                                        <li><span>15+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <p>30+</p>
                                                                        </div>
                                                                        <div className="new-comment" style="display: none;">
                                                                            <form method="post">
                                                                                <input type="text" placeholder="write comment" />
                                                                                <button type="submit"><i className="icofont-paper-plane"></i></button>
                                                                            </form>
                                                                            <div className="comments-area">
                                                                                <ul>
                                                                                    <li>
                                                                                        <figure><img alt="" src="images/resources/user1.jpg" /></figure>
                                                                                        <div className="commenter">
                                                                                            <h5><a title="" href="#">Jack Carter</a></h5>
                                                                                            <span>2 hours ago</span>
                                                                                            <p>
                                                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                            </p>
                                                                                            <span>you can view the more detail via link</span>
                                                                                            <a title="" href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                        </div>
                                                                                        <a title="Like" href="#"><i className="icofont-heart"></i></a>
                                                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply"></i></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <figure><img alt="" src="images/resources/user2.jpg" /></figure>
                                                                                        <div className="commenter">
                                                                                            <h5><a title="" href="#">Ching xang</a></h5>
                                                                                            <span>2 hours ago</span>
                                                                                            <p>
                                                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                            </p>
                                                                                        </div>
                                                                                        <a title="Like" href="#"><i className="icofont-heart"></i></a>
                                                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply"></i></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-wraper">
                                                        <div className="user-post">
                                                            <div className="friend-info">
                                                                <figure>
                                                                    <img alt="" src="images/resources/user4.jpg" />
                                                                </figure>
                                                                <div className="friend-name">
                                                                    <div className="more">
                                                                        <div className="more-post-optns">
                                                                            <i className="">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></i>
                                                                            <ul>
                                                                                <li>
                                                                                    <i className="icofont-pen-alt-1"></i>Edit Post
                                                                                    <span>Edit This Post within a Hour</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="icofont-ban"></i>Hide Post
                                                                                    <span>Hide This Post</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="icofont-ui-delete"></i>Delete Post
                                                                                    <span>If inappropriate Post By Mistake</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="icofont-flag"></i>Report
                                                                                    <span>Inappropriate content</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <ins><a title="" href="time-line.html">Saim turan</a> added image album</ins>
                                                                    <span><i className="icofont-globe"></i> published: Sep,15 2020</span>
                                                                </div>
                                                                <div className="post-meta">
                                                                    <figure>
                                                                        <div className="img-bunch">
                                                                            <div className="row">
                                                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                                                    <figure>
                                                                                        <a data-toggle="modal" data-target="#img-comt" href="images/resources/album1.jpg">
                                                                                            <img src="images/resources/album1.jpg" alt="" />
                                                                                        </a>
                                                                                    </figure>
                                                                                    <figure>
                                                                                        <a data-toggle="modal" data-target="#img-comt" href="images/resources/album2.jpg"><img src="images/resources/album2.jpg" alt="" />
                                                                                        </a>
                                                                                    </figure>
                                                                                </div>
                                                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                                                    <figure>
                                                                                        <a data-toggle="modal" data-target="#img-comt" href="images/resources/album6.jpg"><img src="images/resources/album6.jpg" alt="" />
                                                                                        </a>
                                                                                    </figure>
                                                                                    <figure>
                                                                                        <a data-toggle="modal" data-target="#img-comt" href="images/resources/album5.jpg"><img src="images/resources/album5.jpg" alt="" />
                                                                                        </a>
                                                                                    </figure>
                                                                                    <figure>
                                                                                        <a data-toggle="modal" data-target="#img-comt" href="images/resources/album4.jpg"><img src="images/resources/album4.jpg" alt="" />
                                                                                        </a>
                                                                                        <div className="more-photos">
                                                                                            <span>+15</span>
                                                                                        </div>
                                                                                    </figure>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </figure>
                                                                    <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
                                                                    <p>
                                                                        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
                                                                    </p>
                                                                    <div className="we-video-info">
                                                                        <ul>
                                                                            <li>
                                                                                <span title="views" className="views">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></i>
                                                                                    <ins>1.2k</ins>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="Comments" className="Recommend">
                                                                                    <i>
                                                                                        <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                    <ins>54</ins>
                                                                                </span>

                                                                            </li>
                                                                            <li>
                                                                                <span title="follow" className="Follow">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></i>
                                                                                    <ins>5k</ins>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span className="share-pst" title="Share">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></i>
                                                                                    <ins>205</ins>
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                        <a href="post-detail.html" title="" className="reply">Reply <i className="icofont-reply"></i></a>
                                                                    </div>
                                                                    <div className="stat-tools">
                                                                        <div className="box">
                                                                            <div className="Like"><a className="Like__link"><i className="icofont-like"></i> Like</a>
                                                                                <div className="Emojis">
                                                                                    <div className="Emoji Emoji--like">
                                                                                        <div className="icon icon--like"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--love">
                                                                                        <div className="icon icon--heart"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--haha">
                                                                                        <div className="icon icon--haha"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--wow">
                                                                                        <div className="icon icon--wow"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--sad">
                                                                                        <div className="icon icon--sad"></div>
                                                                                    </div>
                                                                                    <div className="Emoji Emoji--angry">
                                                                                        <div className="icon icon--angry"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="box">
                                                                            <div className="Emojis">
                                                                                <div className="Emoji Emoji--like">
                                                                                    <div className="icon icon--like"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--love">
                                                                                    <div className="icon icon--heart"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--haha">
                                                                                    <div className="icon icon--haha"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--wow">
                                                                                    <div className="icon icon--wow"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--sad">
                                                                                    <div className="icon icon--sad"></div>
                                                                                </div>
                                                                                <div className="Emoji Emoji--angry">
                                                                                    <div className="icon icon--angry"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <a title="" href="#" className="comment-to"><i className="icofont-comment"></i> Comment</a>
                                                                        <a title="" href="#" className="share-to"><i className="icofont-share-alt"></i> Share</a>
                                                                        <div className="emoji-state">
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/thumb.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/thumb.png" /> Likes</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Jhon Doe</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Sarah K.</li>
                                                                                        <li><span>20+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/heart.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/heart.png" /> Love</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Jhon Doe</li>
                                                                                        <li><span>10+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/smile.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/smile.png" /> Happy</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Sarah K.</li>
                                                                                        <li>Jhon Doe</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li><span>100+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="popover_wrapper">
                                                                                <a className="popover_title" href="#" title=""><img alt="" src="images/smiles/weep.png" /></a>
                                                                                <div className="popover_content">
                                                                                    <span><img alt="" src="images/smiles/weep.png" /> Dislike</span>
                                                                                    <ul className="namelist">
                                                                                        <li>Danial Carbal</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Sarah K.</li>
                                                                                        <li><span>15+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <p>50+</p>
                                                                        </div>
                                                                        <div className="new-comment" style="display: none;">
                                                                            <form method="post">
                                                                                <input type="text" placeholder="write comment" />
                                                                                <button type="submit"><i className="icofont-paper-plane"></i></button>
                                                                            </form>
                                                                            <div className="comments-area">
                                                                                <ul>
                                                                                    <li>
                                                                                        <figure><img alt="" src="images/resources/user1.jpg" /></figure>
                                                                                        <div className="commenter">
                                                                                            <h5><a title="" href="#">Jack Carter</a></h5>
                                                                                            <span>2 hours ago</span>
                                                                                            <p>
                                                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                            </p>
                                                                                            <span>you can view the more detail via link</span>
                                                                                            <a title="" href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                        </div>
                                                                                        <a title="Like" href="#"><i className="icofont-heart"></i></a>
                                                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply"></i></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <figure><img alt="" src="images/resources/user2.jpg" /></figure>
                                                                                        <div className="commenter">
                                                                                            <h5><a title="" href="#">Ching xang</a></h5>
                                                                                            <span>2 hours ago</span>
                                                                                            <p>
                                                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                            </p>
                                                                                        </div>
                                                                                        <a title="Like" href="#"><i className="icofont-heart"></i></a>
                                                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply"></i></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    {/* <div class="main-wraper">
                                                        <div class="user-post">
                                                            <div class="friend-info">
                                                                <figure>
                                                                    <img alt="" src="images/resources/user5.jpg"/>
                                                                </figure>
                                                                <div class="friend-name">
                                                                    <div class="more">
                                                                        <div class="more-post-optns">
                                                                            <i class="">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></i>
                                                                            <ul>
                                                                                <li>
                                                                                    <i class="icofont-pen-alt-1"></i>Edit Post
                                                                                    <span>Edit This Post within a Hour</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i class="icofont-ban"></i>Hide Post
                                                                                    <span>Hide This Post</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i class="icofont-ui-delete"></i>Delete Post
                                                                                    <span>If inappropriate Post By Mistake</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i class="icofont-flag"></i>Report
                                                                                    <span>Inappropriate content</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <ins><a title="" href="time-line.html">Andrew Jhon</a> Shared Link</ins>
                                                                    <span><i class="icofont-globe"></i> published: Sep,15 2020</span>
                                                                </div>
                                                                <div class="post-meta">
                                                                    <em><a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" title="" target="_blank">https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538</a></em>
                                                                    <figure>
                                                                        <span>fetched-image</span>
                                                                        <img src="images/resources/laptop.png" alt="">
                                                                    </figure>
                                                                    <a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" class="post-title" target="_blank">Winku Social Network with Company Pages Theme</a>
                                                                    <p>
                                                                        “Winku” is a social community mobile app kit with features. user can use this app for sharing blog, posts, timeline, create Group, Create Pages, chat/Messages, Movies sharing, QA, and Much More.
                                                                    </p>
                                                                    <div class="we-video-info">
                                                                        <ul>
                                                                            <li>
                                                                                <span title="views" class="views">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></i>
                                                                                    <ins>1.2k</ins>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="Comments" class="Recommend">
                                                                                    <i>
                                                                                        <svg class="feather feather-message-square" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                    <ins>54</ins>
                                                                                </span>

                                                                            </li>
                                                                            <li>
                                                                                <span title="follow" class="Follow">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></i>
                                                                                    <ins>5k</ins>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span class="share-pst" title="Share">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></i>
                                                                                    <ins>205</ins>
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                        <a href="post-detail.html" title="" class="reply">Reply <i class="icofont-reply"></i></a>
                                                                    </div>
                                                                    <div class="stat-tools">
                                                                        <div class="box">
                                                                            <div class="Like"><a class="Like__link"><i class="icofont-like"></i> Like</a>
                                                                                <div class="Emojis">
                                                                                    <div class="Emoji Emoji--like">
                                                                                        <div class="icon icon--like"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--love">
                                                                                        <div class="icon icon--heart"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--haha">
                                                                                        <div class="icon icon--haha"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--wow">
                                                                                        <div class="icon icon--wow"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--sad">
                                                                                        <div class="icon icon--sad"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--angry">
                                                                                        <div class="icon icon--angry"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="box">
                                                                            <div class="Emojis">
                                                                                <div class="Emoji Emoji--like">
                                                                                    <div class="icon icon--like"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--love">
                                                                                    <div class="icon icon--heart"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--haha">
                                                                                    <div class="icon icon--haha"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--wow">
                                                                                    <div class="icon icon--wow"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--sad">
                                                                                    <div class="icon icon--sad"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--angry">
                                                                                    <div class="icon icon--angry"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <a title="" href="#" class="comment-to"><i class="icofont-comment"></i> Comment</a>
                                                                        <a title="" href="#" class="share-to"><i class="icofont-share-alt"></i> Share</a>
                                                                        <div class="emoji-state">
                                                                            <div class="popover_wrapper">
                                                                                <a class="popover_title" href="#" title=""><img alt="" src="images/smiles/thumb.png"></a>
                                                                                <div class="popover_content">
                                                                                    <span><img alt="" src="images/smiles/thumb.png"> Likes</span>
                                                                                    <ul class="namelist">
                                                                                        <li>Jhon Doe</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Sarah K.</li>
                                                                                        <li><span>20+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div class="popover_wrapper">
                                                                                <a class="popover_title" href="#" title=""><img alt="" src="images/smiles/heart.png"></a>
                                                                                <div class="popover_content">
                                                                                    <span><img alt="" src="images/smiles/heart.png"> Love</span>
                                                                                    <ul class="namelist">
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Jhon Doe</li>
                                                                                        <li><span>10+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div class="popover_wrapper">
                                                                                <a class="popover_title" href="#" title=""><img alt="" src="images/smiles/smile.png"></a>
                                                                                <div class="popover_content">
                                                                                    <span><img alt="" src="images/smiles/smile.png"> Happy</span>
                                                                                    <ul class="namelist">
                                                                                        <li>Sarah K.</li>
                                                                                        <li>Jhon Doe</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li><span>100+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div class="popover_wrapper">
                                                                                <a class="popover_title" href="#" title=""><img alt="" src="images/smiles/weep.png"></a>
                                                                                <div class="popover_content">
                                                                                    <span><img alt="" src="images/smiles/weep.png"> Dislike</span>
                                                                                    <ul class="namelist">
                                                                                        <li>Danial Carbal</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Sarah K.</li>
                                                                                        <li><span>15+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <p>10+</p>
                                                                        </div>
                                                                        <div class="new-comment" style="display: block;">
                                                                            <form method="post">
                                                                                <input type="text" placeholder="write comment">
                                                                                    <button type="submit"><i class="icofont-paper-plane"></i></button>
                                                                            </form>
                                                                            <div class="comments-area">
                                                                                <ul>
                                                                                    <li>
                                                                                        <figure><img alt="" src="images/resources/user1.jpg"></figure>
                                                                                        <div class="commenter">
                                                                                            <h5><a title="" href="#">Jack Carter</a></h5>
                                                                                            <span>2 hours ago</span>
                                                                                            <p>
                                                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                            </p>
                                                                                            <span>you can view the more detail via link</span>
                                                                                            <a title="" href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                        </div>
                                                                                        <a title="Like" href="#"><i class="icofont-heart"></i></a>
                                                                                        <a title="Reply" href="#" class="reply-coment"><i class="icofont-reply"></i></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <figure><img alt="" src="images/resources/user2.jpg"></figure>
                                                                                        <div class="commenter">
                                                                                            <h5><a title="" href="#">Ching xang</a></h5>
                                                                                            <span>2 hours ago</span>
                                                                                            <p>
                                                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                            </p>
                                                                                        </div>
                                                                                        <a title="Like" href="#"><i class="icofont-heart"></i></a>
                                                                                        <a title="Reply" href="#" class="reply-coment"><i class="icofont-reply"></i></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="main-wraper">
                                                        <div class="user-post">
                                                            <div class="friend-info">
                                                                <figure>
                                                                    <img alt="" src="images/resources/user2.jpg">
                                                                </figure>
                                                                <div class="friend-name">
                                                                    <div class="more">
                                                                        <div class="more-post-optns">
                                                                            <i class="">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></i>
                                                                            <ul>
                                                                                <li>
                                                                                    <i class="icofont-pen-alt-1"></i>Edit Post
                                                                                    <span>Edit This Post within a Hour</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i class="icofont-ban"></i>Hide Post
                                                                                    <span>Hide This Post</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i class="icofont-ui-delete"></i>Delete Post
                                                                                    <span>If inappropriate Post By Mistake</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i class="icofont-flag"></i>Report
                                                                                    <span>Inappropriate content</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <ins><a title="" href="time-line.html">Maria k.</a> Shared Link</ins>
                                                                    <span><i class="icofont-globe"></i> published: Sep,15 2020</span>
                                                                </div>
                                                                <div class="post-meta">
                                                                    <em><a href="https://www.youtube.com/embed/zdow47FQRfQ" title="" target="_blank">https://www.youtube.com/embed/zdow47FQRfQ</a>
                                                                    </em>
                                                                    <iframe height="285" src="https://www.youtube.com/embed/zdow47FQRfQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                                                    <p>
                                                                        Cookie? Biscuit? Bikkie? They all mean the same thing! Our lovely English teachers will quickly show you some pronunciation and vocabulary differences from Australia, America, and England!
                                                                    </p>
                                                                    <div class="we-video-info">
                                                                        <ul>
                                                                            <li>
                                                                                <span title="views" class="views">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></i>
                                                                                    <ins>1.2k</ins>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="Comments" class="Recommend">
                                                                                    <i>
                                                                                        <svg class="feather feather-message-square" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                    <ins>54</ins>
                                                                                </span>

                                                                            </li>
                                                                            <li>
                                                                                <span title="follow" class="Follow">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></i>
                                                                                    <ins>5k</ins>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span class="share-pst" title="Share">
                                                                                    <i>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></i>
                                                                                    <ins>205</ins>
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                        <a href="post-detail.html" title="" class="reply">Reply <i class="icofont-reply"></i></a>
                                                                    </div>
                                                                    <div class="stat-tools">
                                                                        <div class="box">
                                                                            <div class="Like"><a class="Like__link"><i class="icofont-like"></i> Like</a>
                                                                                <div class="Emojis">
                                                                                    <div class="Emoji Emoji--like">
                                                                                        <div class="icon icon--like"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--love">
                                                                                        <div class="icon icon--heart"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--haha">
                                                                                        <div class="icon icon--haha"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--wow">
                                                                                        <div class="icon icon--wow"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--sad">
                                                                                        <div class="icon icon--sad"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--angry">
                                                                                        <div class="icon icon--angry"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="box">
                                                                            <div class="Emojis">
                                                                                <div class="Emoji Emoji--like">
                                                                                    <div class="icon icon--like"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--love">
                                                                                    <div class="icon icon--heart"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--haha">
                                                                                    <div class="icon icon--haha"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--wow">
                                                                                    <div class="icon icon--wow"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--sad">
                                                                                    <div class="icon icon--sad"></div>
                                                                                </div>
                                                                                <div class="Emoji Emoji--angry">
                                                                                    <div class="icon icon--angry"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <a title="" href="#" class="comment-to"><i class="icofont-comment"></i> Comment</a>
                                                                        <a title="" href="#" class="share-to"><i class="icofont-share-alt"></i> Share</a>
                                                                        <div class="emoji-state">
                                                                            <div class="popover_wrapper">
                                                                                <a class="popover_title" href="#" title=""><img alt="" src="images/smiles/thumb.png"></a>
                                                                                <div class="popover_content">
                                                                                    <span><img alt="" src="images/smiles/thumb.png"> Likes</span>
                                                                                    <ul class="namelist">
                                                                                        <li>Jhon Doe</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Sarah K.</li>
                                                                                        <li><span>20+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div class="popover_wrapper">
                                                                                <a class="popover_title" href="#" title=""><img alt="" src="images/smiles/heart.png"></a>
                                                                                <div class="popover_content">
                                                                                    <span><img alt="" src="images/smiles/heart.png"> Love</span>
                                                                                    <ul class="namelist">
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Jhon Doe</li>
                                                                                        <li><span>10+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div class="popover_wrapper">
                                                                                <a class="popover_title" href="#" title=""><img alt="" src="images/smiles/smile.png"></a>
                                                                                <div class="popover_content">
                                                                                    <span><img alt="" src="images/smiles/smile.png"> Happy</span>
                                                                                    <ul class="namelist">
                                                                                        <li>Sarah K.</li>
                                                                                        <li>Jhon Doe</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li><span>100+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div class="popover_wrapper">
                                                                                <a class="popover_title" href="#" title=""><img alt="" src="images/smiles/weep.png"></a>
                                                                                <div class="popover_content">
                                                                                    <span><img alt="" src="images/smiles/weep.png"> Dislike</span>
                                                                                    <ul class="namelist">
                                                                                        <li>Danial Carbal</li>
                                                                                        <li>Amara Sin</li>
                                                                                        <li>Sarah K.</li>
                                                                                        <li><span>15+ more</span></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <p>20+</p>
                                                                        </div>
                                                                        <div class="new-comment" style="display: none;">
                                                                            <form method="post">
                                                                                <input type="text" placeholder="write comment">
                                                                                    <button type="submit"><i class="icofont-paper-plane"></i></button>
                                                                            </form>
                                                                            <div class="comments-area">
                                                                                <ul>
                                                                                    <li>
                                                                                        <figure><img alt="" src="images/resources/user1.jpg"></figure>
                                                                                        <div class="commenter">
                                                                                            <h5><a title="" href="#">Jack Carter</a></h5>
                                                                                            <span>2 hours ago</span>
                                                                                            <p>
                                                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                            </p>
                                                                                            <span>you can view the more detail via link</span>
                                                                                            <a title="" href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                        </div>
                                                                                        <a title="Like" href="#"><i class="icofont-heart"></i></a>
                                                                                        <a title="Reply" href="#" class="reply-coment"><i class="icofont-reply"></i></a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <figure><img alt="" src="images/resources/user2.jpg"></figure>
                                                                                        <div class="commenter">
                                                                                            <h5><a title="" href="#">Ching xang</a></h5>
                                                                                            <span>2 hours ago</span>
                                                                                            <p>
                                                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                            </p>
                                                                                        </div>
                                                                                        <a title="Like" href="#"><i class="icofont-heart"></i></a>
                                                                                        <a title="Reply" href="#" class="reply-coment"><i class="icofont-reply"></i></a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="main-wraper">
                                                        <div class="user-post">
                                                            <div class="friend-info">
                                                                <figure>
                                                                    <img alt="" src="images/resources/user2.jpg">
                                                                </figure>
                                                                <div class="friend-name">
                                                                    <div class="more">
                                                                        <div class="more-post-optns">
                                                                            <i class="">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></i>
                                                                            <ul>
                                                                                <li>
                                                                                    <i class="icofont-pen-alt-1"></i>Edit Post
                                                                                    <span>Edit This Post within a Hour</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i class="icofont-ban"></i>Hide Post
                                                                                    <span>Hide This Post</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i class="icofont-ui-delete"></i>Delete Post
                                                                                    <span>If inappropriate Post By Mistake</span>
                                                                                </li>
                                                                                <li>
                                                                                    <i class="icofont-flag"></i>Report
                                                                                    <span>Inappropriate content</span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <ins><a title="" href="time-line.html">Maria k.</a> Shared Link</ins>
                                                                    <span><i class="icofont-globe"></i> published: Sep,15 2020</span>
                                                                </div>
                                                                <div class="post-meta">
                                                                    <img class="gif" src="images/giphy.png" data-gif="images/giphy-sample.gif" alt="">
                                                                        <div class="we-video-info">
                                                                            <ul>
                                                                                <li>
                                                                                    <span title="views" class="views">
                                                                                        <i>
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></i>
                                                                                        <ins>1.2k</ins>
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span title="Comments" class="Recommend">
                                                                                        <i>
                                                                                            <svg class="feather feather-message-square" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                        <ins>54</ins>
                                                                                    </span>

                                                                                </li>
                                                                                <li>
                                                                                    <span title="follow" class="Follow">
                                                                                        <i>
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></i>
                                                                                        <ins>5k</ins>
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <span class="share-pst" title="Share">
                                                                                        <i>
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></i>
                                                                                        <ins>205</ins>
                                                                                    </span>
                                                                                </li>
                                                                            </ul>
                                                                            <a href="post-detail.html" title="" class="reply">Reply <i class="icofont-reply"></i></a>
                                                                        </div>
                                                                        <div class="stat-tools">
                                                                            <div class="box">
                                                                                <div class="Like"><a class="Like__link"><i class="icofont-like"></i> Like</a>
                                                                                    <div class="Emojis">
                                                                                        <div class="Emoji Emoji--like">
                                                                                            <div class="icon icon--like"></div>
                                                                                        </div>
                                                                                        <div class="Emoji Emoji--love">
                                                                                            <div class="icon icon--heart"></div>
                                                                                        </div>
                                                                                        <div class="Emoji Emoji--haha">
                                                                                            <div class="icon icon--haha"></div>
                                                                                        </div>
                                                                                        <div class="Emoji Emoji--wow">
                                                                                            <div class="icon icon--wow"></div>
                                                                                        </div>
                                                                                        <div class="Emoji Emoji--sad">
                                                                                            <div class="icon icon--sad"></div>
                                                                                        </div>
                                                                                        <div class="Emoji Emoji--angry">
                                                                                            <div class="icon icon--angry"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="box">
                                                                                <div class="Emojis">
                                                                                    <div class="Emoji Emoji--like">
                                                                                        <div class="icon icon--like"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--love">
                                                                                        <div class="icon icon--heart"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--haha">
                                                                                        <div class="icon icon--haha"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--wow">
                                                                                        <div class="icon icon--wow"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--sad">
                                                                                        <div class="icon icon--sad"></div>
                                                                                    </div>
                                                                                    <div class="Emoji Emoji--angry">
                                                                                        <div class="icon icon--angry"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a title="" href="#" class="comment-to"><i class="icofont-comment"></i> Comment</a>
                                                                            <a title="" href="#" class="share-to"><i class="icofont-share-alt"></i> Share</a>
                                                                            <div class="emoji-state">
                                                                                <div class="popover_wrapper">
                                                                                    <a class="popover_title" href="#" title=""><img alt="" src="images/smiles/thumb.png"></a>
                                                                                    <div class="popover_content">
                                                                                        <span><img alt="" src="images/smiles/thumb.png"> Likes</span>
                                                                                        <ul class="namelist">
                                                                                            <li>Jhon Doe</li>
                                                                                            <li>Amara Sin</li>
                                                                                            <li>Sarah K.</li>
                                                                                            <li><span>20+ more</span></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="popover_wrapper">
                                                                                    <a class="popover_title" href="#" title=""><img alt="" src="images/smiles/heart.png"></a>
                                                                                    <div class="popover_content">
                                                                                        <span><img alt="" src="images/smiles/heart.png"> Love</span>
                                                                                        <ul class="namelist">
                                                                                            <li>Amara Sin</li>
                                                                                            <li>Jhon Doe</li>
                                                                                            <li><span>10+ more</span></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="popover_wrapper">
                                                                                    <a class="popover_title" href="#" title=""><img alt="" src="images/smiles/smile.png"></a>
                                                                                    <div class="popover_content">
                                                                                        <span><img alt="" src="images/smiles/smile.png"> Happy</span>
                                                                                        <ul class="namelist">
                                                                                            <li>Sarah K.</li>
                                                                                            <li>Jhon Doe</li>
                                                                                            <li>Amara Sin</li>
                                                                                            <li><span>100+ more</span></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="popover_wrapper">
                                                                                    <a class="popover_title" href="#" title=""><img alt="" src="images/smiles/weep.png"></a>
                                                                                    <div class="popover_content">
                                                                                        <span><img alt="" src="images/smiles/weep.png"> Dislike</span>
                                                                                        <ul class="namelist">
                                                                                            <li>Danial Carbal</li>
                                                                                            <li>Amara Sin</li>
                                                                                            <li>Sarah K.</li>
                                                                                            <li><span>15+ more</span></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <p>20+</p>
                                                                            </div>
                                                                            <div class="new-comment" style="display: none;">
                                                                                <form method="post">
                                                                                    <input type="text" placeholder="write comment">
                                                                                        <button type="submit"><i class="icofont-paper-plane"></i></button>
                                                                                </form>
                                                                                <div class="comments-area">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <figure><img alt="" src="images/resources/user1.jpg"></figure>
                                                                                            <div class="commenter">
                                                                                                <h5><a title="" href="#">Jack Carter</a></h5>
                                                                                                <span>2 hours ago</span>
                                                                                                <p>
                                                                                                    i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                                </p>
                                                                                                <span>you can view the more detail via link</span>
                                                                                                <a title="" href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                            </div>
                                                                                            <a title="Like" href="#"><i class="icofont-heart"></i></a>
                                                                                            <a title="Reply" href="#" class="reply-coment"><i class="icofont-reply"></i></a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <figure><img alt="" src="images/resources/user2.jpg"></figure>
                                                                                            <div class="commenter">
                                                                                                <h5><a title="" href="#">Ching xang</a></h5>
                                                                                                <span>2 hours ago</span>
                                                                                                <p>
                                                                                                    i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                                </p>
                                                                                            </div>
                                                                                            <a title="Like" href="#"><i class="icofont-heart"></i></a>
                                                                                            <a title="Reply" href="#" class="reply-coment"><i class="icofont-reply"></i></a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="sp sp-bars"></div> */}
                                                </div>
                                                {/* <div class="tab-pane fade" id="followers">
                                                    <div class="row col-xs-6 merged-10">
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-1.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Amy Watson</a></span>
                                                                <ins>Bz University, Pakistan</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-2.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Muhammad Khan</a></span>
                                                                <ins>Oxford University, UK</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-3.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Sadia Gill</a></span>
                                                                <ins>Wb University, USA</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-4.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Rjapal</a></span>
                                                                <ins>Km University, India</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-5.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Amy watson</a></span>
                                                                <ins>Oxford University, UK</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-6.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Bob Frank</a></span>
                                                                <ins>WB University, Canada</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-7.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Amy Watson</a></span>
                                                                <ins>Bz University, Pakistan</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-8.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Muhammad Khan</a></span>
                                                                <ins>Oxford University, UK</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-9.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Sadia Gill</a></span>
                                                                <ins>WB University, USA</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="sp sp-bars"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="follow">
                                                    <div class="row merged-10 col-xs-6">
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-10.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Amy Watson</a></span>
                                                                <ins>Bz University, Pakistan</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i>Unfollow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-11.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Muhammad Khan</a></span>
                                                                <ins>Oxford University, UK</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Unfollow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-12.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Sadia Gill</a></span>
                                                                <ins>WB University, USA</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Unfollow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-4.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Rjapal</a></span>
                                                                <ins>Km University, India</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Unfollow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-1.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Amy watson</a></span>
                                                                <ins>Oxford University, UK</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Unfollow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-2.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Bob Frank</a></span>
                                                                <ins>WB University, Canada</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Unfollow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-5.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Amy Watson</a></span>
                                                                <ins>Bz University, Pakistan</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Unfollow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-7.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Muhammad Khan</a></span>
                                                                <ins>Oxford University, UK</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Unfollow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                                            <div class="friendz">
                                                                <figure><img src="images/resources/speak-10.jpg" alt=""></figure>
                                                                <span><a href="#" title="">Sadia Gill</a></span>
                                                                <ins>WB University, USA</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Unfollow</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="sp sp-bars"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade " id="about">
                                                    <div class="main-wraper">
                                                        <h3 class="main-title">About Engin</h3>
                                                        <div class="lang">
                                                            <h6>Languages</h6>
                                                            <span>English, Turkish</span>
                                                        </div>

                                                        <div class="dis-n-exp">
                                                            <h6>Discipliens</h6>
                                                            <span>educational leadership</span>
                                                            <span>educational assesment</span>
                                                            <span>educational management</span>
                                                            <span>Social Psychology</span>
                                                            <span>organizational Psychology</span>
                                                            <span>Qualitative social research</span>
                                                            <span>Qualitative Psychology</span>
                                                        </div>
                                                        <div class="dis-n-exp">
                                                            <h6>Skills & Experties </h6>
                                                            <span>educational leadership</span>
                                                            <span>educational assesment</span>
                                                            <span>educational management</span>
                                                            <span>Social Psychology</span>
                                                            <span>organizational Psychology</span>
                                                            <span>Qualitative social research</span>
                                                            <span>Qualitative Psychology</span>
                                                        </div>
                                                    </div>
                                                    <div class="main-wraper">
                                                        <h3 class="main-title">Professional Experience</h3>
                                                        <div class="exp-col">
                                                            <div class="exp-meta">
                                                                <h5><i class="icofont-university"></i> Oxford university</h5>
                                                                <p>Sep-2012 Sep-2013</p>
                                                                <span>Position</span>
                                                                <ins>Professor Associate</ins>
                                                            </div>
                                                            <img src="images/resources/uni1.jpg" alt="">
                                                        </div>
                                                        <div class="exp-col">
                                                            <div class="exp-meta">
                                                                <h5><i class="icofont-university"></i> university of cambridge</h5>
                                                                <p>Sep-2012 Sep-2013</p>
                                                                <span>Position</span>
                                                                <ins>Professor Associate</ins>
                                                            </div>
                                                            <img src="images/resources/uni3.jpg" alt="">
                                                        </div>
                                                        <div class="exp-col">
                                                            <div class="exp-meta">
                                                                <h5><i class="icofont-university"></i> university of cambridge</h5>
                                                                <p>Sep-2012 Sep-2013</p>
                                                                <span>Position</span>
                                                                <ins>Professor Associate</ins>
                                                            </div>
                                                            <img src="images/resources/uni4.jpg" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="main-wraper">
                                                        <h3 class="main-title">Researches Image & PDF</h3>
                                                        <div class="row merged-10">
                                                            <div class="col-lg-4">
                                                                <figure class="research-avatar">
                                                                    <a class="uk-inline" href="images/resources/image1.jpg" data-fancybox="">
                                                                        <img src="images/resources/image1.jpg" alt="">
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <figure class="research-avatar">
                                                                    <a class="uk-inline" href="images/resources/image1.jpg" data-fancybox="">
                                                                        <img src="images/resources/image2.jpg" alt="">
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <figure class="research-avatar">
                                                                    <a class="uk-inline" href="images/resources/image1.jpg" data-fancybox="">
                                                                        <img src="images/resources/image3.jpg" alt="">
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <figure class="research-avatar">
                                                                    <a class="uk-inline" href="images/resources/image1.jpg" data-fancybox="">
                                                                        <img src="images/resources/image4.jpg" alt="">
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <figure class="research-avatar">
                                                                    <a class="uk-inline" href="images/resources/image1.jpg" data-fancybox="">
                                                                        <img src="images/resources/image5.jpg" alt="">
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <figure class="research-avatar">
                                                                    <a class="uk-inline" href="images/resources/image1.jpg" data-fancybox="">
                                                                        <img src="images/resources/image6.jpg" alt="">
                                                                    </a>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div> */}
                                            </div>
                                            {/* <div class="main-wraper">
                                                <div class="user-post">
                                                    <div class="friend-info">
                                                        <figure>
                                                            <i class="icofont-learn"></i>
                                                        </figure>
                                                        <div class="friend-name">
                                                            <ins><a title="" href="time-line.html">Suggested</a></ins>
                                                            <span><i class="icofont-runner-alt-1"></i> Follow similar Research People</span>
                                                        </div>
                                                        <ul class="suggested-caro">
                                                            <li>
                                                                <figure><img src="images/resources/speak-1.jpg" alt=""></figure>
                                                                <span>Amy Watson</span>
                                                                <ins>Department of Socilolgy</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                                                            </li>
                                                            <li>
                                                                <figure><img src="images/resources/speak-2.jpg" alt=""></figure>
                                                                <span>Muhammad Khan</span>
                                                                <ins>Department of Socilolgy</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                                                            </li>
                                                            <li>
                                                                <figure><img src="images/resources/speak-3.jpg" alt=""></figure>
                                                                <span>Sadia Gill</span>
                                                                <ins>Department of Socilolgy</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                                                            </li>
                                                            <li>
                                                                <figure><img src="images/resources/speak-4.jpg" alt=""></figure>
                                                                <span>Aykash verma</span>
                                                                <ins>Department of Socilolgy</ins>
                                                                <a href="#" title="" data-ripple=""><i class="icofont-star"></i> Follow</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        {/* <div class="col-lg-4">
                                            <aside class="sidebar static right">
                                                <div class="widget">
                                                    <h4 class="widget-title">Post Analytics</h4>
                                                    <ul class="widget-analytics">
                                                        <li>Reads <span>56</span></li>
                                                        <li>Recommendations <span>3</span></li>
                                                        <li>Shares <span>22</span></li>
                                                        <li>References <span>17</span></li>
                                                    </ul>
                                                </div>
                                                <div class="widget">
                                                    <h4 class="widget-title">Ask Research Question?</h4>
                                                    <div class="ask-question">
                                                        <i class="icofont-question-circle"></i>
                                                        <h6>Ask questions in Q&A to get help from experts in your field.</h6>
                                                        <a class="ask-qst" href="#" title="">Ask a question</a>
                                                    </div>
                                                </div>
                                                <div class="widget">
                                                    <h4 class="widget-title">Explor Events <a class="see-all" href="#" title="">See All</a></h4>
                                                    <div class="rec-events bg-purple">
                                                        <i class="icofont-gift"></i>
                                                        <h6><a title="" href="">BZ University good night event in columbia</a></h6>
                                                        <img alt="" src="images/clock.png">
                                                    </div>
                                                    <div class="rec-events bg-blue">
                                                        <i class="icofont-microphone"></i>
                                                        <h6><a title="" href="">The 3rd International Conference 2020</a></h6>
                                                        <img alt="" src="images/clock.png">
                                                    </div>
                                                </div>
                                                <div class="widget stick-widget">
                                                    <h4 class="widget-title">Who's follownig</h4>
                                                    <ul class="followers" >
                                                        <li>
                                                            <figure><img alt="" src="images/resources/friend-avatar.jpg"></figure>
                                                            <div class="friend-meta">
                                                                <h4>
                                                                    <a title="" href="time-line.html">Kelly Bill</a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a class="underline" title="" href="#">Follow</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img alt="" src="images/resources/friend-avatar2.jpg"></figure>
                                                            <div class="friend-meta">
                                                                <h4>
                                                                    <a title="" href="time-line.html">Issabel</a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a class="underline" title="" href="#">Follow</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img alt="" src="images/resources/friend-avatar3.jpg"></figure>
                                                            <div class="friend-meta">
                                                                <h4>
                                                                    <a title="" href="time-line.html">Andrew</a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a class="underline" title="" href="#">Follow</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img alt="" src="images/resources/friend-avatar4.jpg"></figure>
                                                            <div class="friend-meta">
                                                                <h4>
                                                                    <a title="" href="time-line.html">Sophia</a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a class="underline" title="" href="#">Follow</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img alt="" src="images/resources/friend-avatar5.jpg"></figure>
                                                            <div class="friend-meta">
                                                                <h4>
                                                                    <a title="" href="time-line.html">Allen</a>
                                                                    <span>Dept colleague</span>
                                                                </h4>
                                                                <a class="underline" title="" href="#">Follow</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </aside>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div >
        </div >

    )
}
