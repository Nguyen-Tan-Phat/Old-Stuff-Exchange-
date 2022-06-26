import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editBuildingAction } from '../../redux/actions/type/quanLYBuildingAction';
export default function EditBuilding (props) {
    const dispatch = useDispatch();
    const editBuilding = useSelector(rootReducer => rootReducer.aditBuidingReducer);
    const [task, setTask] = useState({ id: '', name: '', numberFloor: 0, numberRoom: 0, description: '', apartmentId: '' });
    const handleChangeInput = (e) => {
        let { name, value } = e.target;
        setTask({
            ...task,
            [name]: value,
        })
    }
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
        dispatch(action)
    }

    return (
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
                    <h5>Aparment ID:</h5>
                    <input ref={inputUserApartmentId} onChange={handleChangeInput} id='apartmentId' name='apartmentId' type="text" className="form-control" placeholder={editBuilding.apartmentId} value={editBuilding.apartmentId} disabled />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>


        </div>




        // < div className='container mt-5' >
        //     <div className='d-flex justify-content-center align-items-center'>
        //         <div>
        //             <h3 className='text-center mb-3'>Edit Building</h3>
        //             <form className=" mb-3">
        //                 <div className='form-group'>
        //                     <h5>ID:</h5>
        //                     <input onChange={handleChangeInput} name='id' type="text" className="form-control" value="" disabled />
        //                 </div>
        //                 <div className='form-group'>
        //                     <h5>Name:</h5>
        //                     <input onChange={handleChangeInput} name='name' type="text" className="form-control" placeholder="task name" />
        //                 </div>
        //                 <div className='form-group'>
        //                     <h5>Number Floor:</h5>
        //                     <input onChange={handleChangeInput} name='numberFloor' type="number" className="form-control" placeholder="task name" />
        //                 </div>
        //                 <div className='form-group'>
        //                     <h5>Number Room:</h5>
        //                     <input onChange={handleChangeInput} name='numberRoom' type="number" className="form-control" placeholder="task name" />
        //                 </div>
        //                 <div className='form-group'>
        //                     <h5>Description:</h5>
        //                     <input onChange={handleChangeInput} name='description' type="text" className="form-control" placeholder="task name" />
        //                 </div>
        //                 <div className='form-group'>
        //                     <h5>Aparment ID:</h5>
        //                     <input onChange={handleChangeInput} name='apartmentId' type="text" className="form-control" value='43242' disabled />
        //                 </div>
        //             </form>


        //         </div>
        //     </div>
        // </div >

    )
}
