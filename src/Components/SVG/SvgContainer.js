
import React, {useState, useEffect} from 'react'
import {SvgComponent} from "./SvgComponent";


const SvgContainer = (props) => {

//Extracts required fields from tabs array
    const svgComponentsRender = ()=> {
        const componentList = props.tabs.map((tab, index)=>{
            return(
                <SvgComponent
                    tab_name={tab.tab_name}
                    object_id={tab.object_id}
                    table_name={tab.table_name}
                    sensors={tab.sensors}
                    svgSnap={props.svgSnap}
                    key={index}
                    setSvgObjectIdClick={props.setSvgObjectIdClick}
                    setDrawerVisible={props.setDrawerVisible}
                    svgObjectIdClick={props.svgObjectIdClick}
                />
            )

        })

        return componentList
    }

    return(
        <div>

            {svgComponentsRender()}
        </div>
    )
}


export {SvgContainer}