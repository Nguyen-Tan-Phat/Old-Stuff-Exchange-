import axios from "axios"
import { history } from "../../util/setting";

export const loginAction = (userLogin) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/authorizes',
                method: 'POST',
                data: userLogin,
            })
            localStorage.setItem('loginadmin', result.data.data.token);
            console.log(result.data);
        } catch (error) {
            console.log(error.data);
        }
    }
}