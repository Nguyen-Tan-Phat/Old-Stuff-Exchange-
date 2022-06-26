import axios from "axios";

export const quanLyUserAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/users?pageNumber=1&pageSize=40',
                method: 'GET',
                headers: {
                    ['Authorization']: 'Bearer ' + localStorage.getItem('loginadmin'),
                }
            })
            const action = {
                type: 'LAY_DANH_SACH_USER',
                arrUser: result.data.data,
            }
            dispatch(action)
        } catch (error) {
            console.log(error.data);
        }
    }
}

export const deleteUserAction = (name) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/users/' + name,
                method: 'DELETE',
                headers: {
                    ['Authorization']: 'Bearer ' + localStorage.getItem('loginadmin'),
                }
            })
            const action = quanLyUserAction();
            dispatch(action);
        } catch (error) {
            console.log(error.data);
        }
    }
}


export const editUserAction = (name) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/users',
                method: 'PUT',
                data: name,
                headers: {
                    ['Authorization']: 'Bearer ' + localStorage.getItem('loginadmin'),
                }
            });
            const action = quanLyUserAction();
            dispatch(action);
        } catch (error) {

        }
    }
}