import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Popup from "reactjs-popup";
import { deleteBuildingAction, editBuildingAction, layDanhSachBudingAction, searchBuildingAction } from '../../redux/actions/type/quanLYBuildingAction';
export default function AdminBuilDing (props) {
    const arrBuilding = useSelector(rootReducer => rootReducer.quanLyBuildingReducer.arrBuilding);
    const search1 = useSelector(rootReducer => rootReducer.quanLyBuildingReducer.search1);
    const editBuilding = useSelector(rootReducer => rootReducer.editBuidingReducer);
    const dispatch = useDispatch();
    const [task, setTask] = useState({ id: '', name: '', numberFloor: 0, numberRoom: 0, description: '', apartmentId: '' });
    const [search, setSearch] = useState({ searchId: '' });

    const handleChangeInput = (e) => {
        let { name, value } = e.target;
        setTask({
            ...task,
            [name]: value,
        })
    }
    const handleChangeSearch = (e) => {

        let { name, value } = e.target;
        setSearch({
            ...search,
            [name]: value,
        })
    }
    useEffect(() => {
        const action = dispatch(layDanhSachBudingAction);
        dispatch(action);

    }, [])

    const inputUserId = useRef(null);
    const inputUserName = useRef(null);
    const inputUserNumberFloor = useRef(0);
    const inputUsernumberRoom = useRef(0);
    const inputUserDescription = useRef(null);
    const inputUserApartmentId = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let userId = inputUserId.current.value;
        let userName = inputUserName.current.value;
        let userNumberFloor = inputUserNumberFloor.current.value;
        let usernumberRoom = inputUsernumberRoom.current.value;
        let userDescription = inputUserDescription.current.value;
        let userApartmentId = inputUserApartmentId.current.value;
        task.id = userId;
        if (userName === '') {
            task.name = inputUserName.current.placeholder;
        } else {
            task.name = userName;
        }
        if (userNumberFloor === '') {
            task.numberFloor = inputUserNumberFloor.current.placeholder;
        } else {
            task.numberFloor = userNumberFloor;
        }
        if (usernumberRoom === '') {
            task.numberRoom = inputUsernumberRoom.current.placeholder;
        } else {
            task.numberRoom = usernumberRoom;
        }
        if (userDescription === '') {
            task.description = inputUserDescription.current.placeholder;
        } else {
            task.description = userDescription;
        }
        task.apartmentId = userApartmentId;

        const action = editBuildingAction(task);
        dispatch(action);
        e.target.reset();
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        const action = searchBuildingAction(search.searchId);
        dispatch(action);


    }


    return (
        <div>

            <div className="theme-layout">
                {/* <EditBuilding handleChangeInput={handleChangeInput} /> */}


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
                            <div className="searches col-sm-4" style={{ position: 'absolute', right: '10px' }}>
                                <form onSubmit={handleSubmitSearch} style={{ display: 'flex' }} >
                                    <select onChange={handleChangeSearch} id="searchId" name="searchId" >
                                        {arrBuilding.map((item, index) => {
                                            return <option value={item.name} key={index}>{item.name}</option>
                                        })}
                                    </select>
                                    <button type="submit" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" >
                                        <i className="icofont-search" />
                                    </button>
                                    {/* <input onChange={handleChangeSearch} id="searchId" name="searchId" type="text" placeholder="Search Building" />
                                    <button type="submit" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" >
                                        <i className="icofont-search" />
                                    </button> */}
                                </form>
                            </div>
                            {/* <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true" >
                                <div className="modal-dialog" role="document" >

                                    <div className="modal-content" >
                                        <div className="modal-header">
                                            <h5 className="modal-title">Modal title</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body "> */}
                            <div className="modal fade " id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                <div className="modal-dialog col-md-12" role="document" >
                                    <div className="modal-content  " style={{ width: '670px', marginTop: '100px', marginRight: '300px' }}  >
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Search Buildng</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body" style={{ display: 'block' }} >
                                            <table className="table table-default all-events table-striped table-responsive-lg" style={{ padding: '10px' }}>
                                                <thead>
                                                    <tr>
                                                        {/* <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Number Floor</th>
                                                        <th>Number Room</th>
                                                        <th>Description</th> */}
                                                        <th>AparmentID</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        {/* <td>{search1.id}</td>
                                                        <td>{search1.name}</td>
                                                        <td>{search1.numberFloor}</td>
                                                        <td>{search1.numberRoom}</td>
                                                        <td>{search1.description}</td> */}
                                                        {search1.map((item, index) => {
                                                            return <td key={index}>{item.apartment.name}</td>
                                                        })}
                                                        <td>
                                                            <button className="button soft-danger " data-dismiss="modal"><i className="icofont-trash" onClick={() => {
                                                                const action = deleteBuildingAction(search1.id);
                                                                dispatch(action);
                                                                alert('Delete Building Thành Công');

                                                            }}></i></button>

                                                            <button className='btn  btn-outline-success' data-toggle="modal" data-target="#modelId"><i className="icofont-pen-alt-1" onClick={() => {
                                                                const action = {
                                                                    type: 'XEM_CHI_TIET_BUILDING',
                                                                    sanPhamClick: search1,
                                                                }
                                                                dispatch(action);
                                                                alert('Edit Building Thành Công!!!');
                                                                // b(task);
                                                            }}></i></button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Send message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="panel-content">
                                <div className='row merged20 mb-4'>
                                    <div className='col-lg-12'>
                                        <div className='d-widget'>
                                            <div className='d-widget-title'>
                                                <h5>All BuilDing</h5>
                                            </div>
                                            <table className='table table-default all-events table-striped table-responsive-lg'>
                                                <thead>
                                                    <tr>
                                                        <th>Number</th>

                                                        <th>Name</th>
                                                        <th>Number Floor</th>
                                                        <th>Number Room</th>
                                                        <th>Description</th>

                                                        <th>AparmentName</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {arrBuilding.map((task, index) => {
                                                        return <tr key={index}>
                                                            <td>{index++}</td>

                                                            <td>{task.name}</td>
                                                            <td>{task.numberFloor}</td>
                                                            <td>{task.numberRoom}</td>
                                                            <td>{task.description}</td>
                                                            <td>{task.apartment.name}</td>
                                                            <td>
                                                                <button className="button soft-danger"><i className="icofont-trash" onClick={() => {
                                                                    const action = deleteBuildingAction(task.id);
                                                                    dispatch(action);
                                                                    alert('Delete Building Thành Công');

                                                                }}></i></button>

                                                                <button className='btn  btn-outline-success' data-toggle="modal" data-target="#modelId"><i className="icofont-pen-alt-1" onClick={() => {
                                                                    const action = {
                                                                        type: 'XEM_CHI_TIET_BUILDING',
                                                                        sanPhamClick: task,
                                                                    }
                                                                    dispatch(action);
                                                                    // b(task);
                                                                }}></i></button>
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


            </div>
            <div>
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
                                    <h3 className='text-center mb-3'>Edit Building</h3>
                                    <form className=" mb-3" onSubmit={handleSubmit}>
                                        <div className='form-group'>
                                            <h5>ID:</h5>
                                            <input ref={inputUserId} onChange={handleChangeInput} id='id' name='id' className="form-control" placeholder={editBuilding.id} value={editBuilding.id} disabled />
                                        </div>
                                        <div className='form-group'>
                                            <h5>Name:</h5>
                                            <input ref={inputUserName} onChange={handleChangeInput} id='name' name='name' className="form-control" placeholder={editBuilding.name} />
                                        </div>
                                        <div className='form-group'>
                                            <h5>Number Floor:</h5>
                                            <input ref={inputUserNumberFloor} onChange={handleChangeInput} id='numberFloor' name='numberFloor' type="number" className="form-control" min={1} placeholder={editBuilding.numberFloor} />
                                        </div>
                                        <div className='form-group'>
                                            <h5>Number Room:</h5>
                                            <input ref={inputUsernumberRoom} onChange={handleChangeInput} id='numberRoom' name='numberRoom' type="number" className="form-control" min={1} placeholder={editBuilding.numberRoom} />
                                        </div>
                                        <div className='form-group'>
                                            <h5>Description:</h5>
                                            <input ref={inputUserDescription} onChange={handleChangeInput} id='description' name='description' className="form-control" placeholder={editBuilding.description} />
                                        </div>
                                        <div className='form-group'>
                                            <h5>Aparment name:</h5>

                                            <input ref={inputUserApartmentId} onChange={handleChangeInput} id='apartment' name='apartmentId' className="form-control" placeholder={editBuilding.apartment.id} value={editBuilding.apartment.id} type="hidden" />
                                            <input className="form-control" placeholder={editBuilding.apartment.name} value={editBuilding.apartment.name} />
                                        </div>
                                        <button type="submit" className="btn btn-primary" >Save</button>
                                        <button type="reset" className="btn btn-danger" >Reset</button>
                                    </form>


                                </div>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}




