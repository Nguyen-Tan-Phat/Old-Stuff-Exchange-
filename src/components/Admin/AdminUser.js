import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserAction, editUserAction, quanLyUserAction } from '../../redux/actions/type/quanLyUserAction';

export default function AdminUser (props) {
    const arrUser = useSelector(rootReducer => rootReducer.quanLyUserReducer.arrUser);
    const editUserReducer = useSelector(rootReducer => rootReducer.editUserReducer);
    const [user, setUser] = useState({ id: '', userName: '', fullName: '', status: '', phone: '', createdAt: '', roleName: '' });
    const dispatch = useDispatch();
    const handleChangeInput = (e) => {
        let { name, value, option } = e.target;
        setUser({
            ...user,
            [name]: value,

        })
    }

    useEffect(() => {
        const action = dispatch(quanLyUserAction);
        dispatch(action);
    }, [])

    let inputUserID = useRef(null);
    let inputUserName = useRef(null);
    let inputFullName = useRef(null);
    let inputStatus = useRef(null);
    let inputPhone = useRef(null);
    let inputCreatedAt = useRef(null);
    let inputRole = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        let userId = inputUserID.current.value;
        let userName = inputUserName.current.value;
        let userFullName = inputFullName.current.value;
        let userStatus = inputStatus.current.value;
        let userPhone = inputPhone.current.value;
        let userCreatedAt = inputCreatedAt.current.value;
        let userRole = inputRole.current.value;

        user.id = userId;
        if (userName === '') {
            user.userName = inputUserName.current.placeholder;
        } else {
            user.userName = userName;
        }
        if (userFullName === '') {
            user.fullName = inputFullName.current.placeholder;
        } else {
            user.fullName = userFullName;
        }
        user.status = userStatus;
        if (userPhone === '') {
            user.phone = inputPhone.current.placeholder;
        } else {
            user.phone = userPhone;
        }
        if (userCreatedAt === '') {
            user.createdAt = inputCreatedAt.current.placeholder;
        } else {
            user.createdAt = userCreatedAt;
        }
        user.roleName = userRole;
        console.log(user);
        const action = editUserAction();
        dispatch(action);
    }

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
                            <div className="panel-content">
                                <div className='row merged20 mb-4'>
                                    <div className='col-lg-12'>
                                        <div className='d-widget'>
                                            <div className='d-widget-title'>
                                                <h5>All User</h5>
                                            </div>
                                            <table className='table table-default all-events table-striped table-responsive-lg'>
                                                <thead>
                                                    <tr>
                                                        <th>Number</th>
                                                        <th>ID#</th>
                                                        <th>User Name</th>
                                                        <th>Full Name</th>
                                                        <th>Phone</th>
                                                        <th>Email</th>
                                                        <th>Role</th>
                                                        <th>Status</th>
                                                        <th>Building</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {arrUser.filter(sp => sp.role.name === 'RESIDENT' && sp.status === 'ACTIVE').map((task, index) => {
                                                        return <tr key={index}>
                                                            <td>{index++}</td>
                                                            <td>{task.id}</td>
                                                            <td>{task.userName}</td>
                                                            <td>{task.fullName}</td>
                                                            <td>{task.phone}</td>
                                                            <td>{task.email}</td>
                                                            <td>{task.status}</td>
                                                            <td>{task.roleName}</td>
                                                            <td>{task.buildingName}</td>
                                                            <td>
                                                                <button className="button soft-danger"><i className="icofont-trash" onClick={() => {
                                                                    const action = deleteUserAction(task.id);
                                                                    dispatch(action);
                                                                    alert('Cập nhật status thành công!!!')
                                                                }}></i></button>
                                                                <div className="button soft-primary" data-toggle="modal" data-target="#modelId" onClick={() => {
                                                                    const action = {
                                                                        type: 'XEM_CHI_TIET_USER',
                                                                        userClick: task,
                                                                    }
                                                                    dispatch(action)
                                                                }}><i className="icofont-pen-alt-1"></i></div>
                                                            </td>
                                                        </tr>
                                                    })}

                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"> Edit</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <h3 className='text-center mb-3'>Edit User</h3>
                                    <form className=" mb-3" onSubmit={handleSubmit} >

                                        <div className='form-group'>
                                            <h5>ID:</h5>
                                            <input ref={inputUserID} onChange={handleChangeInput} id='id' name='id' className="form-control" placeholder={editUserReducer.id} value={editUserReducer.id} disabled />
                                        </div>
                                        <div className='form-group'>
                                            <h5>UserName:</h5>
                                            <input ref={inputUserName} onChange={handleChangeInput} id='userName' name='userName' className="form-control" placeholder={editUserReducer.userName} />
                                        </div>
                                        <div className='form-group'>
                                            <h5>Full Name:</h5>
                                            <input ref={inputFullName} onChange={handleChangeInput} id='fullName' name='fullName' className="form-control" placeholder={editUserReducer.fullName} />
                                        </div>
                                        <div className='form-group'>
                                            <h5>Status:</h5>
                                            <select onChange={handleChangeInput} ref={inputStatus} className="form-control" id='status' name='status'>
                                                <option value="ACTIVE">ACTIVE</option>
                                                <option value="INACTIVE">INACTIVE</option>

                                            </select>

                                        </div>
                                        <div className='form-group'>
                                            <h5>Phone:</h5>
                                            <input ref={inputPhone} onChange={handleChangeInput} id='phone' name='phone' className="form-control" placeholder={editUserReducer.phone} />
                                        </div>
                                        <div className='form-group'>
                                            <h5>createdAt:</h5>
                                            <input ref={inputCreatedAt} onChange={handleChangeInput} id='createdAt' name='createdAt' type='date' className="form-control" placeholder={editUserReducer.createdAt} />
                                        </div>

                                        <div className='form-group'>
                                            <h5>Role:</h5>
                                            <select ref={inputRole} onChange={handleChangeInput} className="form-control" id='roleName' name='roleName'>
                                                <option value="ADMIN">ADMIN</option>
                                                <option value="RESIDENT">RESIDENT</option>
                                            </select>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </form>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
