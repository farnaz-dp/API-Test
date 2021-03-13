import {
    SVG_UNLOADED,
    SVG_LOADED,
    SVG_CLICK,
    MAPDATA_API_SUCCESS,
    MAPDATA_API_REQUEST,
    MAPDATA_API_ERROR,
    LOGIN_API_SUCCESS,
    LOGIN_API_REQUEST,
    DRAWER_SHOW,
    CONTENT_SHOW,
    LOGIN_API_ERROR,
    DRAWER_NOT_SHOW,
    CONTENT_NOT_SHOW
} from '../ActionType/Action'

const initState = {
    ivmsLoginApi : {
        loading: false,
        data : null ,
        error : null
    },

    ivmsMapDataApi : {
        loading: false,
        data : null ,
        error : null

    },

    svg : {
        svgLoading : false ,
        svgObjectIdClick : null

    },

    content : {

        contentShow : false
    },

    drawer : {
        drawerShow : false,

    }
}

const IVMSReducer = (state=initState , action) => {
    switch (action.type) {

        case LOGIN_API_REQUEST :
            return {
                ...state,
                ivmsLoginApi: {
                    ...state.ivmsLoginApi,
                    loading: true
                }
            }

        case LOGIN_API_SUCCESS :
            return {
                ...state,
                ivmsLoginApi: {
                    loading: false,
                    data: action.loginData,
                    error: false
                }

            }

        case LOGIN_API_ERROR :
            return {
                ...state,
                ivmsLoginApi: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }

        case MAPDATA_API_REQUEST :
            return {
                ...state,
                ivmsMapDataApi: {
                    ...state.ivmsMapDataApi,
                    loading: true,
                }
            }

        case MAPDATA_API_SUCCESS :
            return {
                ...state,
                ivmsMapDataApi: {
                    loading: false,
                    data: action.mapdata,
                    error: false
                }
            }

        case MAPDATA_API_ERROR :
            return {
                ...state,
                ivmsMapDataApi: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }

        case SVG_LOADED :
            return {
                ...state ,
                svg: {
                    ...state.svg ,
                    svgLoading : true
                }
            }

        case SVG_UNLOADED :
            return {
                ...state ,
                svg: {
                    ...state.svg ,
                    svgLoading : false
                }
            }

        case SVG_CLICK :
            return {
                ...state ,
                svg: {
                    ...state.svg ,
                    svgObjectIdClick : action.objectId
                }
            }

        case CONTENT_SHOW :
            return {
                ...state,
                content : {
                    contentShow: true
                }
            }

        case CONTENT_NOT_SHOW :
            return {
                ...state,
                content : {
                    contentShow: false
                }
            }

        case DRAWER_SHOW :
            return {
                ...state,
                drawer : {
                    drawerShow: true
                }
            }

        case DRAWER_NOT_SHOW :
            return {
                ...state,
                drawer : {
                    drawerShow: false
                }
            }

        default :
            return state
    }

}

export {IVMSReducer , initState}

