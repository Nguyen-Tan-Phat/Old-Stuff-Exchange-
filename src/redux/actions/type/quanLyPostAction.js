import axios from "axios";

export const quanLyPostAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/posts/list?page=1&pageSize=30',
                method: 'GET',
            })
            const action = {
                type: 'LAY_DANH_SACH_POST',
                arrPost: result.data.data,
            }
            dispatch(action)
        } catch (error) {
            console.log(error.data);
        }
    }
}

export const deletePost = (name) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/posts?id=' + name,
                method: 'DELETE',
            })

            const action = quanLyPostAction();
            dispatch(action)
        } catch (error) {
            console.log(error.data);
        }
    }
}