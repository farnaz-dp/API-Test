
import React, {useContext} from 'react'
import {useState , useEffect , useRef} from 'react'
import * as Snap from 'snapsvg-cjs';
import {SvgContainer} from "./SvgContainer";
import {Context} from '../../Contexts/IVMSContext'
import {SvgLoaded} from "../../ActionType";
import {useDispatch, useSelector} from "react-redux";



const SvgApp = (props)=>{

    const loading = useSelector(state => state.mapDataApi.loading)

    const dataFetched = useSelector(state => state.mapDataApi.dataFetched)

    const error = useSelector(state => state.mapDataApi.error)

    const svgLoaded = useSelector(state => state.svg.svgLoading)

    const svgUrl = useSelector(state => {
        if (!loading && dataFetched && !error){
            return state.mapDataApi.data.url
        }
        return null
    })

    const dispatch = useDispatch()

    // const {state , dispatch}= useContext(Context)
    const svg_id = '#svg_id'

    const svg = Snap(svg_id)

    svg.attr({

        viewBox: "0 0 100 50" //TODO :: best resolution for 1920*1080 <Dynamic Model>
    });


    useEffect (()=>{
//Loading SVG from Api URL
//         if(props.svgUrl){
//         if(state.ivmsMapDataApi.data.url){

        if(svgUrl){
            console.log('SvgApp , url :' , `http://192.168.100.56/${svgUrl}`)
            const tux = Snap.load(`http://192.168.100.56/${svgUrl}`, (data)=>{
                svg.append(data)

                dispatch(SvgLoaded())

             /*   dispatch({
                    type : SVG_LOADED
                })*/
                // props.setSvgIsLoaded(true)

            } );
        }

    },[])

    //Map in tabs
    const svgContainerRender = () => {
        // if (props.svgIsLoaded){
        if (svgLoaded){
            return (
                // <SvgContainer
                //     tabs={props.tabs}
                //     svgSnap={svg}
                //     setSvgObjectIdClick={props.setSvgObjectIdClick}
                //     setDrawerVisible={props.setDrawerVisible}
                //     svgObjectIdClick={props.svgObjectIdClick}
                // />

            <SvgContainer
                svgSnap={svg}
            />

            )
        }
        else
        {
            return null
        }
    }

    return(
        <div>
            {svgContainerRender()}
        </div>
    )
}

export {SvgApp}