import axios from "axios";

export const layDanhSachBudingAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/buildings?page=1&pageSize=100',
                method: 'GET',
            })
            const action = {
                type: 'LAY_DANH_SACH_BUILDING',
                arrBuilding: result.data.data,
            }
            dispatch(action)
        } catch (error) {
            console.log(error.data);
        }
    }
}

export const deleteBuildingAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/buildings/' + id,
                method: 'DELETE',
                headers: {
                    ['Authorization']: 'Bearer ' + localStorage.getItem('loginadmin'),
                }
            })
            const action = layDanhSachBudingAction();
            dispatch(action);

        } catch (error) {
            console.log(error.data);
        }
    }
}


export const editBuildingAction = (a) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/buildings',
                method: 'PUT',
                data: a,
                headers: {
                    ['Authorization']: 'Bearer ' + localStorage.getItem('loginadmin'),
                }
            });
            const action = layDanhSachBudingAction();
            dispatch(action);
        } catch (error) {

        }
    }
}
export const searchBuildingAction = (a) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/buildings?name=' + a + '&page=1&pageSize=100',
                method: 'GET',
                headers: {
                    ['Authorization']: 'Bearer ' + localStorage.getItem('loginadmin'),
                }
            });
            const action = {
                type: 'SEARCH_DANH_SACH_BUILDING',
                search1: result.data.data,
            }
            dispatch(action)
            console.log(result.data.data);
        } catch (error) {

        }
    }
}