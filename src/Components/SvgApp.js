
import React from 'react'
import {useState , useEffect , useRef} from 'react'
import * as Snap from 'snapsvg-cjs';


const SvgApp = (props)=>{

    const svg_file = '#svg_file'

    const svg = Snap(svg_file)

    svg.attr({

        viewBox: "0 0 100 50" //TODO :: best resolution for 1920*1080 <Dynamic Model>
    });




    useEffect (()=>{

        if(props.svgUrl){
            const tux = Snap.load(`http://192.168.100.56/${props.svgUrl}`, (data)=>{
                svg.append(data)

                props.setSvgIsLoaded(true)

            } );
        }

    },[])







    return(
        <div>
        </div>
    )
}

export {SvgApp}