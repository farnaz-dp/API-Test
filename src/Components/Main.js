import React from 'react'
import {useState, useEffect} from 'react'
import axios from "axios";
import {SvgApp} from "./SVG/SvgApp";
import {MoonLoader} from "react-spinners";
import { css } from "@emotion/react";
import {ContentApp} from "./Content/ContentApp";
import {DrawerTable} from "./DrawerTable";
import {TabPanel} from "react-tabs";


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

    useEffect( ()=>{
        axios({
            method : 'get',
            url : 'http://192.168.100.56/api/v1/map3d/overall',
            headers : {
                Authorization : `token ${props.apiAuthTokenState.token}`,
            }

        })
            .then((response)=>{
                setIsMap3dDataFetched(true)
                setMap3dDataState(response.data)
                console.log('Main, Response : ',response.data)
            })
            .catch((error)=>{
                console.log(error)
            })


    }, [])

    useEffect( ()=>{
        if (svgObjectIdClick){
            console.log('object box ID : ' , svgObjectIdClick)
            setContentIsShow(true)
        }


    },[svgObjectIdClick])

    const svgShowRender = () =>{
        if (!svgIsLoaded) {
            return (
                <MoonLoader color={'#01b3fd'} loading={true} css={override} size={150} />
            )
        }
        else {
            return null
        }
    }

    const svgAppShowRender = ()=>{
        if (isMap3dDataFetched & map3dDataState != null) {
            return(

                <SvgApp
                    svgUrl={map3dDataState.url}
                    setSvgIsLoaded={setSvgIsLoaded}
                    tabs={map3dDataState.table.tabs}
                    svgIsLoaded={svgIsLoaded}
                    setSvgObjectIdClick={setSvgObjectIdClick}
                    setDrawerVisible={setDrawerVisible}
                    svgObjectIdClick={svgObjectIdClick}
                />
            )
        }

        else
        {
            return null
        }
    }

    const contentAppShowRender = ()=>{
        if (contentIsShow){
            return(

                // <ContentApp
                //     svgObjectIdClick={svgObjectIdClick}
                //     tabs={map3dDataState.table.tabs}
                // />

                <DrawerTable
                    svgObjectIdClick={svgObjectIdClick}
                    map3dDataState={map3dDataState}
                    setDrawerVisible={setDrawerVisible}
                    drawerVisible={drawerVisible}
                />
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