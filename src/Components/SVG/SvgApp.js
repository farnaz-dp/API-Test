
import React from 'react'
import {useState , useEffect , useRef} from 'react'
import * as Snap from 'snapsvg-cjs';
import {SvgContainer} from "./SvgContainer";


const SvgApp = (props)=>{

    const svg_id = '#svg_id'

    const svg = Snap(svg_id)

    svg.attr({

        viewBox: "0 0 100 50" //TODO :: best resolution for 1920*1080 <Dynamic Model>
    });


    useEffect (()=>{
//Loading SVG from Api URL
        if(props.svgUrl){
            const tux = Snap.load(`http://192.168.100.56/${props.svgUrl}`, (data)=>{
                svg.append(data)

                props.setSvgIsLoaded(true)

            } );
        }

    },[])

    const svgContainerRender = () => {
        if (props.svgIsLoaded){
            return (
                <SvgContainer
                    tabs={props.tabs}
                    svgSnap={svg}
                    setSvgObjectIdClick={props.setSvgObjectIdClick}
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