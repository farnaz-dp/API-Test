import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from "axios";
import {SvgApp} from "./SVG/SvgApp";
import {MoonLoader} from "react-spinners";
import { css } from "@emotion/react";
import {ContentApp} from "./Content/ContentApp";
import {DrawerTable} from "./DrawerTable";
import {TabPanel} from "react-tabs";
import {fetchMapData ,ContentShow} from '../ActionType'


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Main = (props)=> {

    // const [map3dDataState , setMap3dDataState] = useState(null)
    // const [isMap3dDataFetched , setIsMap3dDataFetched] = useState(false)
    // const [svgIsLoaded , setSvgIsLoaded] = useState(false)
    // const [svgObjectIdClick , setSvgObjectIdClick] = useState(null)
    // const [contentIsShow , setContentIsShow] = useState(false)
    const [drawerVisible, setDrawerVisible] = useState(false);

    const token = useSelector(state => state.loginApi.token)

    const loading = useSelector(state => state.mapDataApi.loading)

    const dataFetched = useSelector(state => state.mapDataApi.dataFetched)

    const error = useSelector(state => state.mapDataApi.error)

    const svgLoaded = useSelector(state => state.svg.svgLoading)

    const svgClick = useSelector(state => state.svg.svgObjectIdClick)

    const contentShow = useSelector(state => state.content.contentShow)

    const dispatch = useDispatch()


    useEffect( ()=>{

        dispatch(fetchMapData(token))

         // dispatch({
         //     type: MAPDATA_API_REQUEST
         // })


        // axios({
        //     method : 'get',
        //     url : 'http://192.168.100.56/api/v1/map3d/overall',
        //     headers : {
        //         // Authorization : `token ${props.apiAuthTokenState.token}`,
        //         Authorization : `token ${state.ivmsLoginApi.data.token}`,
        //     }
        //
        // })
        //     .then((response)=>{
        //         dispatch({
        //             type: MAPDATA_API_SUCCESS,
        //             mapdata : response.data
        //         })
        //
        //         setIsMap3dDataFetched(true)
        //         setMap3dDataState(response.data)
        //         console.log('Main, Response : ',response.data)
        //     })
        //     .catch((error)=>{
        //         dispatch({
        //             type : MAPDATA_API_ERROR,
        //             error : error
        //
        //         })
        //         console.log(error)
        //     })


    }, [])

    useEffect( ()=>{
        // if (svgObjectIdClick){
        if (svgClick){
            console.log('object box ID : ' , svgClick)

            dispatch(ContentShow())
            // dispatch ({
            //     type: CONTENT_SHOW
            // })
            // setContentIsShow(true)
        }


    },[svgClick])

    const svgShowRender = () =>{
        // if (!svgIsLoaded) {
        if (!svgLoaded) {
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
        // if (!state.ivmsMapDataApi.loading & state.ivmsMapDataApi.data != null) {
        if (!loading & dataFetched) {

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
        if (contentShow){
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