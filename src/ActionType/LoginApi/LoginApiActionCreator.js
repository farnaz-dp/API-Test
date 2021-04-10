import axios from "axios";
import {LOGIN_API_REQUEST,LOGIN_API_SUCCESS ,LOGIN_API_ERROR} from '../../Constants'

export const LoginApiRequest = () => {
    return {
        type : LOGIN_API_REQUEST
    }
}


export const LoginApiSuccess = (loginData) => {
    return {
        type : LOGIN_API_SUCCESS,
        loginData : loginData
    }
}

export const LoginApiError = (error) => {
    return {
        type : LOGIN_API_ERROR ,
        error : error
    }
}

//Async action creator using try catch
export const fetchToken = (user , pass) => {

    return async dispatch =>{
        try {
            dispatch(LoginApiRequest())
            const result = await axios({
                url: 'http://192.168.100.56/api-token-auth',

                method: "POST",
                data: {
                    username: user,

                    password: pass

                }
            })


            dispatch( LoginApiSuccess(result.data.token) )

        }
        catch (error){
            dispatch( LoginApiError(error) )
        }
    }

}

