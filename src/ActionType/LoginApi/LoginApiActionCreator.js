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

//Async action creator
export const fetchToken = (user , pass) => {
    return dispatch => {
        dispatch(LoginApiRequest())
        axios(
            {
                method : 'post',
                url : 'http://192.168.100.56/api-token-auth',
                data :{
                    username : user,
                    password : pass
                }
            }
        )
            .then((response) =>{
                if (response.status === 200) {
                    dispatch(LoginApiSuccess(response.data.token))
                }
            })
            .catch((error) =>{

                dispatch(LoginApiError(error))
            })
    }
}

