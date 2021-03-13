import React, {useContext} from 'react'
import {useState, useEffect} from 'react'
import axios from "axios";
import {SvgApp} from "./SVG/SvgApp";
import {MoonLoader} from "react-spinners";
import { css } from "@emotion/react";
import {ContentApp} from "./Content/ContentApp";
import {DrawerTable} from "./DrawerTable";
import {TabPanel} from "react-tabs";
import {Context} from "../Contexts/IVMSContext";
import {
    MAPDATA_API_REQUEST,
    MAPDATA_API_SUCCESS,
    MAPDATA_API_ERROR,
    CONTENT_SHOW
} from '../ActionType/Action'


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Main = (props)=> {

    const [map3dDataState , setMap3dDataState] = useState(null)
    const [isMap3dDataFetched , setIsMap3dDataFetched] = useState(false)
    const [svgIsLoaded , setSvgIsLoaded] = useState(false)
    const [svgObjectIdClick , setSvgObjectIdClick] = useState(null)
    const [contentIsShow , setContentIsShow] = useState(false)
    const [drawerVisible, setDrawerVisible] = useState(false);

    const {state , dispatch}= useContext(Context)

    useEffect( ()=>{

        dispatch({
            type: MAPDATA_API_REQUEST
        })


        axios({
            method : 'get',
            url : 'http://192.168.100.56/api/v1/map3d/overall',
            headers : {
                // Authorization : `token ${props.apiAuthTokenState.token}`,
                Authorization : `token ${state.ivmsLoginApi.data.token}`,
            }

        })
            .then((response)=>{
                dispatch({
                    type: MAPDATA_API_SUCCESS,
                    mapdata : response.data
                })

                // setIsMap3dDataFetched(true)
                // setMap3dDataState(response.data)
                // console.log('Main, Response : ',response.data)
            })
            .catch((error)=>{
                dispatch({
                    type : MAPDATA_API_ERROR,
                    error : error

                })
                console.log(error)
            })


    }, [])

    useEffect( ()=>{
        // if (svgObjectIdClick){
        if (state.svg.svgObjectIdClick){
            console.log('object box ID : ' , state.svg.svgObjectIdClick)

            dispatch ({
                type: CONTENT_SHOW
            })
            // setContentIsShow(true)
        }


    },[state.svg.svgObjectIdClick])

    const svgShowRender = () =>{
        // if (!svgIsLoaded) {
        if (!state.svg.svgLoading) {
            return (
                <MoonLoader color={'#01b3fd'} loading={true} css={override} size={150} />
            )
        }
        else {
            return null
        }
    }

    const svgAppShowRender = ()=>{
        // if (isMap3dDataFetched & map3dDataState != null) {
        if (!state.ivmsMapDataApi.loading & state.ivmsMapDataApi.data != null) {
            console.log('main , state :' , state)
            return(

                // <SvgApp
                //     svgUrl={map3dDataState.url}
                //     setSvgIsLoaded={setSvgIsLoaded}
                //     tabs={map3dDataState.table.tabs}
                //     svgIsLoaded={svgIsLoaded}
                //     setSvgObjectIdClick={setSvgObjectIdClick}
                //     setDrawerVisible={setDrawerVisible}
                //     svgObjectIdClick={svgObjectIdClick}
                // />

                <SvgApp />
            )
        }

        else
        {
            return null
        }
    }

    const contentAppShowRender = ()=>{
        // if (contentIsShow){
        if (state.content.contentShow){
            return(


                // <DrawerTable
                //     svgObjectIdClick={svgObjectIdClick}
                //     map3dDataState={map3dDataState}
                //     setDrawerVisible={setDrawerVisible}
                //     drawerVisible={drawerVisible}
                // />

                <DrawerTable />

            )
        }
        else {
            return null
        }

    }

    return(
        <div>
            <h2>Welcome To Main Page</h2>
            {svgShowRender()}
            <svg id='svg_id'></svg>
            {svgAppShowRender()}
            {contentAppShowRender()}
        </div>

    )
}

export {Main}