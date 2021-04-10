import axios from "axios";
import {MAPDATA_API_REQUEST ,MAPDATA_API_SUCCESS ,MAPDATA_API_ERROR} from '../../Constants'

export const MapDataApiRequest = () => {
    return {
        type: MAPDATA_API_REQUEST
    }
}

export const  MapDataApiSuccess = (mapData) => {
    return {
        type : MAPDATA_API_SUCCESS,
        IvmsData : mapData
    }
}

export const MapDataApiError = (error) => {
    return {
        type : MAPDATA_API_ERROR,
        error : error
    }
}

//Async action creator using try catch
export const fetchMapData = (token) => {

    return async dispatch => {
        try {
            dispatch(MapDataApiRequest())
            const result = await axios({
                url: 'http://192.168.100.56/api/v1/map3d/overall',

                method: "GET",
                headers : {
                    Authorization : `token ${token}`,
                }
            })
            dispatch(MapDataApiSuccess(result.data))

        }
        catch (error){
            dispatch(MapDataApiError(error))
        }
    }

}