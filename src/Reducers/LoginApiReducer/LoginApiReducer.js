import {LOGIN_API_REQUEST,LOGIN_API_SUCCESS, LOGIN_API_ERROR} from '../../Constants'

const initState = {
    loading : false,
    token : null ,
    error : null
}

export const loginApiReducer = (state = initState , action) => {
    switch (action.type) {

        case LOGIN_API_REQUEST :
            return {
                ...state,
                loading: true
            }

        case LOGIN_API_SUCCESS :
            return {
                loading: false,
                token: action.loginData,
                error: false
            }

        case LOGIN_API_ERROR :
            return {
                ...state,
                error : action.error
            }

        default :
            return state
    }

}
