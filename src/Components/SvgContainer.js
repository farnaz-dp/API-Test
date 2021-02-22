
import React from 'react'
import {SvgComponent} from "./SvgComponent";


const SvgContainer = (props) => {


    const svgComponentsRender = ()=> {
        const componentList = props.tabs.map((tab, index)=>{
            return(
                <SvgComponent
                    tab_name={tab.tab_name}
                    object_id={tab.object_id}
                    table_name={tab.table_name}
                    sensors={tab.sensors}
                    svgSnap={props.svgSnap}
                />
            )

        })

        return componentList
    }

    return(
        <div>
            <h1>SVG Container</h1>
            {svgComponentsRender()}
        </div>
    )
}


export {SvgContainer}