import React from 'react'
import {useState, useEffect} from 'react'
import axios from "axios";

const Main = (props)=> {

    const [map3dDataState , setMap3dDataState] = useState(null)

    useEffect( ()=>{
        axios({
            method : 'get',
            url : 'http://192.168.100.56/api/v1/map3d/overall',
            headers : {
                Authorization : `token ${props.apiAuthTokenState.token}`,
            }

        })
            .then((response)=>{
                setMap3dDataState(response.data)
                console.log('Main, Response : ',response.data)
            })
            .catch((error)=>{
                console.log(error)
            })


    }, [])


    return(
        <h2>Welcome To Main Page</h2>
    )
}

export {Main}