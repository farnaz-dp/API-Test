import React from 'react'
import {useState , useEffect, useRef} from "react"

const SvgComponent = (props) => {

    const [propsState , setPropsState] = useState(props)
    const [isHovered , setIsHovered] = useState(false)
    const [isAlarmBlink , setIsAlarmBlink ] = useState(false)
    const [isWarnBlink , setIsWarnBlink ] = useState(false)
    const [isSensorsBlink , setIsSensorsBlink] = useState(false)
    const [isSensorsValue , setIsSensorsValue] = useState(false)

    // state of blink flag for control of blink
    const [blinkFlag , setBlinkFlag] = useState(null)

    // state for control of time to blink
    const  [enableTimerToBlink , setEnableTimerToBlink] = useState(null)

    // set timer reference for blink
    const timerToBlink = useRef (null)

   // set timer reference for Drawer show
    const timerToShowDrawer = useRef (null)



    // change color and opacity for hover and alarm and warn

    let color , opacity ;

    if(isAlarmBlink){
        color = '#FF1744'
        opacity = 0.3
        // console.log('SvgComponent, color is Red ')
    }
    else if(!isAlarmBlink & isWarnBlink){
        color = '#c3870e'
        opacity = 0.3
        // console.log('SvgComponent, color is Yellow')
    }
    if (isHovered){
        color = '#40C4FF'
        opacity = 0.3
    }
    else if(!isAlarmBlink & !isWarnBlink){
        color = '#000000'
        opacity = 0.3
        // console.log('SvgComponent, color is default')
    }
    // else {
    //     color = '#000000'
    //     opacity = 0.00392157
    // }

    const drawerShowHandler = ()=>{
        props.setDrawerVisible(true)

    }


    useEffect(()=>{
        setPropsState(props)
        propsState.svgSnap.select("#" + propsState.object_id)
            .hover(
                ()=>{
                    // console.log( propsState.object_id,' is hovered ')
                    setIsHovered(true)
                },
                ()=>{
                    // console.log( propsState.object_id,' is not hovered ')
                    setIsHovered(false)
                }
            )
            .click(
                (event)=>{
                    event.preventDefault()
                    // console.log( propsState.object_id,' is Clicked')
                    props.setSvgObjectIdClick(propsState.object_id)

                    if (props.svgObjectIdClick != propsState.object_id){

                        props.setDrawerVisible(false)
                        timerToShowDrawer.current= setTimeout(()=>{
                            drawerShowHandler()
                        },400)
                    }
                    else {
                        props.setDrawerVisible(true)
                    }

                }
            )

    },[props])


    useEffect(()=>{
        let isBlink = false
        let sensorValue = false

        props.sensors.map((sensor)=>{

            if (sensor.isBlink){
                isBlink |= true
            }

            if (sensor.value == -8555){

                sensorValue |= true

            }
        })

        if (isBlink){

            setIsSensorsBlink(true)
        }
        else
        {
            setIsSensorsBlink(false)
        }


        if (sensorValue){

            setIsSensorsValue(true)
        }
        else
        {
            setIsSensorsValue(false)
        }

    }, [props.sensors])


    // check blink (alarm and warn) and set timer to blinkya
    useEffect(()=>{

        if (isSensorsBlink){
            setEnableTimerToBlink(true)
            console.log('SvgComponent, timer is started')

        }
        else{
            setEnableTimerToBlink(false)
            propsState.svgSnap.select("#" + propsState.object_id).attr({fill: '#000000', fillOpacity: 0.00392157})

            setIsAlarmBlink(false)
            setIsWarnBlink(false)

        }
    },[isSensorsBlink])


    //timer of blink flag
    useEffect(()=>{
        if(enableTimerToBlink){
            timerToBlink.current= setTimeout(()=>{
                setBlinkFlag(!blinkFlag)
            },600)

        }
        return ()=>{
            clearInterval(timerToBlink.current)
        }
    },[enableTimerToBlink,blinkFlag])


    // set blink flag for alarm blink and warn blink
    useEffect (()=>{

        if (propsState.object_id){
            // if (blinkFlag & propsState.value != -8555) {
            if (blinkFlag & !isSensorsValue) {
                setIsAlarmBlink(true)
                // console.log('SvgComponent, alarmBlink')
            }
            // else if (blinkFlag & propsState.value == -8555){
            else if (blinkFlag & isSensorsValue){
                setIsWarnBlink(true)
                // console.log('SvgComponent, warnBlink , blinkFlag : ' ,blinkFlag)
            }
            else {
                setIsAlarmBlink(false)
                setIsWarnBlink(false)
                // console.log('SvgComponent, normal, blinkFlag : ' ,blinkFlag)
            }
        }
    },[blinkFlag, isSensorsValue])



    // set color of object in svg map
    useEffect(()=>{
        if (propsState.object_id) {
            // propsState.svgSnap.select("#"+propsState.object_boxes).attr({fill: color, fillOpacity: opacity})

            if (isWarnBlink == false & isAlarmBlink == false & isHovered ==false){
                propsState.svgSnap.select("#" + propsState.object_id).attr({fill: '#000000', fillOpacity: 0.00392157})
                // console.log('SvgComponent, normal color')
                // console.log('SvgComponent , normal color, isAlarmBlink : ' , isAlarmBlink , ' ,isWarnBlink : ' , isWarnBlink , 'Color : ' , color)

            }
            else if (isWarnBlink){
                propsState.svgSnap.select("#" + propsState.object_id).attr({fill: color, fillOpacity: opacity})
                // console.log('-----------------------------------------------------------------------------------------------------')
                // console.log('SvgComponent , isAlarmBlink : ' , isAlarmBlink , ' ,isWarnBlink : ' , isWarnBlink , 'Color : ' , color)
            }
            else {
                propsState.svgSnap.select("#" + propsState.object_id).attr({fill: color, fillOpacity: opacity})
                // console.log('SvgComponent, blink color')
                // console.log('SvgComponent , isAlarmBlink : ' , isAlarmBlink , ' ,isWarnBlink : ' , isWarnBlink)
            }
        }
    },[isAlarmBlink,isWarnBlink,isHovered])


    return(
        <div>

        </div>
    )
}

export {SvgComponent}