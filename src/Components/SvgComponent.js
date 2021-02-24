import React from 'react'
import {useState , useEffect} from "react"

const SvgComponent = (props) => {

    const [propsState , setPropsState] = useState(props)
    const [isHovered , setIsHovered] = useState(false)

    // change color and opacity for hover and alarm and warn

    let color , opacity ;

    // if(isAlarmBlink){
    //     color = '#FF1744'
    //     opacity = 0.3
    // }
    // else if(!isAlarmBlink & isWarnBlink){
    //     color = '#FFAB40'
    //     opacity = 0.3
    // }
    if (isHovered){
        color = '#40C4FF'
        opacity = 0.3
    }
    // else if(!isAlarmBlink & !isWarnBlink){
    //     color = '#000000'
    //     opacity = 0.3
    // }
    else {
        color = '#000000'
        opacity = 0.00392157
    }

    useEffect(()=>{
        setPropsState(props)
        propsState.svgSnap.select("#" + propsState.object_id)
            .hover(
                ()=>{
                console.log( propsState.object_id,' is hovered ')
                    setIsHovered(true)
                },
                ()=>{
                    console.log( propsState.object_id,' is not hovered ')
                    setIsHovered(false)
                }
                )
            .click(
                (event)=>{
                    event.preventDefault()
                    console.log( propsState.object_id,' is Clicked')
                }
                )

    },[props])

    // set color of object in svg map
    useEffect(()=>{
        if (propsState.object_id) {
            // propsState.svgSnap.select("#"+propsState.object_boxes).attr({fill: color, fillOpacity: opacity})

            if (isHovered ==false){
                propsState.svgSnap.select("#"+propsState.object_id).attr({fill: '#000000', fillOpacity: 0.00392157})

            }
            else {
                propsState.svgSnap.select("#"+propsState.object_id).attr({fill: color, fillOpacity: opacity})
            }
        }
    },[isHovered])


    return(
        <div>
            <h2>SVG Component</h2>
        </div>
    )
}

export {SvgComponent}