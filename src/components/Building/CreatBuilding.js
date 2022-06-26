import React, { Component } from 'react'

export default class CreatBuilding extends Component {
    render () {
        return (
            <div>
                <div>
                    <div className="theme-layout">



                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
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
                            </div>
                            <div className="gap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <aside className="sidebar">
                                                <div className="widget">
                                                    <h4 className="widget-title">Recent Media</h4>
                                                    <div className="recent-media">
                                                        <figure>
                                                            <img src="images/resources/course-6.jpg" alt="" />
                                                            <a className="play-btn" data-fancybox="" href="https://www.youtube.com/watch?v=nOCXXHGMezU&amp;feature=emb_title"><i className="icofont-play"></i></a>
                                                            <span>Vu.Js Free Tutorial</span>
                                                        </figure>
                                                        <figure>
                                                            <img src="images/resources/course-1.jpg" alt="" />
                                                            <a className="play-btn" data-fancybox="" href="https://www.youtube.com/watch?v=nOCXXHGMezU&amp;feature=emb_title"><i className="icofont-play"></i></a>
                                                            <span>Css3 2020 Tutorial</span>
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="widget">
                                                    <h4 className="widget-title">Post Analytics</h4>
                                                    <ul className="widget-analytics">
                                                        <li>Reads <span>56</span></li>
                                                        <li>Recommendations <span>3</span></li>
                                                        <li>Shares <span>22</span></li>
                                                        <li>References <span>17</span></li>
                                                    </ul>
                                                </div>

                                                <div className="widget">
                                                    <h4 className="widget-title">Add Credits</h4>
                                                    <div className="set-card">
                                                        <img src="images/paypal.png" alt="" />
                                                        <p>
                                                            Add credits to your account
                                                        </p>
                                                        <a className="main-btn" href="#" title="">Set Card</a>
                                                        <div className="added-complete">
                                                            <h6>Added: <span>25 Mar 2020</span></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </aside>

                                        </div>
                                        <div className="col-lg-8">
                                            <div className="main-wraper">
                                                <h4 className="main-title">Add New BuilDing</h4>
                                                <h6 className="mb-4">Add new apartment and address</h6>
                                                <div className="add-credits">
                                                    <form>
                                                        <fieldset className="row merged-10">
                                                            <div className="mb-4 col-lg-6 col-md-6 col-sm-6">
                                                                <input className="uk-input" type="text" placeholder="Apartment Category" />
                                                            </div>
                                                            <div className="mb-4 col-lg-6 col-md-6 col-sm-6">
                                                                <input className="uk-input" type="text" placeholder=" Building Address" />
                                                            </div>

                                                            <div className="uk-margin col-lg-6 mb-4">
                                                                <select className="uk-select">
                                                                    <option>Room Type</option>
                                                                    <option>Small</option>
                                                                    <option>Normal</option>
                                                                    <option>Big</option>
                                                                    <option>Very Big</option>
                                                                </select>
                                                            </div>
                                                            <div className="uk-margin col-lg-6 mb-4">
                                                                <input className="uk-input" type="text" placeholder="Price" />
                                                            </div>
                                                            <div className="mb-4 col-lg-12">
                                                                <textarea placeholder="Note" rows="4" className="uk-textarea"></textarea>
                                                            </div>
                                                        </fieldset>
                                                    </form>
                                                    <div className="mt-2 col-lg-12">
                                                        <form method="post" className="dropzone" action="/upload-target">
                                                            <div className="fallback">
                                                                <input name="file" type="file" multiple />
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="mt-3 col-lg-12">
                                                        <button type="submit" className="button primary circle">Create</button>
                                                    </div>
                                                    <p>
                                                        <b>Special Note: </b>
                                                        " Fill in the correct information about the building ."
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
