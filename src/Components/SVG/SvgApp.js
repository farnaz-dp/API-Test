
import React, {useContext} from 'react'
import {useState , useEffect , useRef} from 'react'
import * as Snap from 'snapsvg-cjs';
import {SvgContainer} from "./SvgContainer";
import {Context} from '../../Contexts/IVMSContext'
import {SVG_LOADED} from "../../ActionType/Action";



const SvgApp = (props)=>{

    const {state , dispatch}= useContext(Context)
    const svg_id = '#svg_id'

    const svg = Snap(svg_id)

    svg.attr({

        viewBox: "0 0 100 50" //TODO :: best resolution for 1920*1080 <Dynamic Model>
    });


    useEffect (()=>{
//Loading SVG from Api URL
//         if(props.svgUrl){
        if(state.ivmsMapDataApi.data.url){
            console.log('SvgApp , url :' , `http://192.168.100.56/${state.ivmsMapDataApi.data.url}`)
            const tux = Snap.load(`http://192.168.100.56/${state.ivmsMapDataApi.data.url}`, (data)=>{
                svg.append(data)

                dispatch({
                    type : SVG_LOADED
                })
                // props.setSvgIsLoaded(true)

            } );
        }

    },[])

    //Map in tabs
    const svgContainerRender = () => {
        // if (props.svgIsLoaded){
        if (state.svg.svgLoading){
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