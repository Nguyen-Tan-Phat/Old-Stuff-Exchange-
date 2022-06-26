import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost, quanLyPostAction } from '../../redux/actions/type/quanLyPostAction';



export default function AdminPost () {
    const arrPost = useSelector(rootReducer => rootReducer.quanLyPostReducer.arrPost);
    const dispatch = useDispatch();

    useEffect(() => {
        const action = dispatch(quanLyPostAction);
        dispatch(action);

    }, [])
    console.log(arrPost);
    return (

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
                            <div className="gap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div id="page-contents" className="row merged20">
                                                <div className="col-lg-12">
                                                    <div className="main-wraper">
                                                        <h4 className="main-title">Post</h4>
                                                        <div className="row">



                                                            {arrPost.map((item, index) => {
                                                                return <div className="col-lg-4 col-md-4 col-sm-4" key={index}>
                                                                    <div className="course">
                                                                        <figure>
                                                                            <img src="https://picsum.photos/200/200" alt="" />
                                                                            <i className="icofont-book-mark" title="bookmark"></i>
                                                                            <em>{item.status}</em>
                                                                            <span className="rate-result"><i className="icofont-star"></i> 4.5</span>
                                                                        </figure>
                                                                    </div>
                                                                    <div className="course-meta">
                                                                        <div className="post-by">
                                                                            <figure><img src="images/resources/user1.jpg" alt="" /></figure>
                                                                            <div className="course-cat">
                                                                                <span>{item.title}</span>
                                                                                <a href="#" title="">{item.lastUpdatedAt}</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="prise">
                                                                            <span><i className="icofont-cart-alt"></i>${item.price}</span>
                                                                        </div>
                                                                        <h5 className="course-title"><a href="course-detail.html" title="">{item.description}</a></h5>
                                                                        <div className="course-info">
                                                                            <button className="btn btn-outline-primary transition-3d-hover">Edit</button>
                                                                            <button className="btn btn-outline-danger transition-3d-hover ml-3" onClick={() => {
                                                                                const action = deletePost(item.id);
                                                                                dispatch(action);
                                                                                console.log(item.id);
                                                                                alert('Delete Post Thành Công')
                                                                            }}>Detele</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            })}

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
                </div>
            </div>
        </div>
    )

}
